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
  setBestScore: Dispatch<SetStateAction<number>>;
}
interface IChildrenProps {
  children: React.ReactNode;
}

export const ScoreContext = createContext<IScoreData>({} as IScoreData);

export const ScoreProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [dataScore, setDataScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  if (dataScore > bestScore) {
    setBestScore(dataScore);
  }

  return (
    <ScoreContext.Provider value={{ dataScore, bestScore, setDataScore, setBestScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => useContext(ScoreContext);
