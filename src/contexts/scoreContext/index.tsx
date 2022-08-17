import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IScoreData {
  dataScore: number;
  bestScore: number;
  setDataScore: Dispatch<SetStateAction<number>>;
}
interface IChildrenProps {
  children: React.ReactNode;
}

export const ScoreContext = createContext<IScoreData>({} as IScoreData);

export const ScoreProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [dataScore, setDataScore] = useState(0);
  const [best, setBest] = useState(0);
  if (dataScore) {;
    window.localStorage.setItem("localScore", JSON.stringify(dataScore));
    const lastScore = Number(window.localStorage.getItem("localScore"));
    if (lastScore > best) {
      setBest(lastScore);
      window.localStorage.setItem("bestScore", JSON.stringify(best + 1));
    }
  }
  const bestScore = Number(window.localStorage.getItem("bestScore"));

  return (
    <ScoreContext.Provider value={{ dataScore, bestScore, setDataScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => useContext(ScoreContext);
