import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useEffect
} from "react";
import { useNavigate } from "react-router-dom";

import fireDb from "../../dataBase/firebase";

interface IScoreData {
  dataScore: number;
  bestScore: number;
  setDataScore: Dispatch<SetStateAction<number>>;
  addToRanking: any
  FBDataSorted: any
}
interface IChildrenProps {
  children: React.ReactNode;
}

export const ScoreContext = createContext<IScoreData>({} as IScoreData);

export const ScoreProvider: React.FC<IChildrenProps> = ({ children }) => {
  const navigate = useNavigate()
  const [dataScore, setDataScore] = useState(0);
  const [FBData, setFBData] = useState({})

  const bestScore = Number(localStorage.getItem("best"));

  const addToRanking = (obj: any) => {
    fireDb.child("bestScore").push(
        obj,
        (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Success save");
                navigate("/")
                setDataScore(0);
            }
        },
    
    );
  } 

  useEffect(() => {
    
    fireDb.child("bestScore").on('value', (snapshot) => {
        if (snapshot.val() !== null) {
            setFBData({
                ...snapshot.val()
            });
        } else {
            setFBData({});
        }
    })
  }, []);
  const FBDataSorted = Object.values(FBData).sort((a: any, b: any) => a['points'] < b['points'] ? 1 : -1)

  return (
    <ScoreContext.Provider value={{ dataScore, bestScore, setDataScore, addToRanking, FBDataSorted }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => useContext(ScoreContext);
