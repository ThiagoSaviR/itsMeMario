import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
  } from 'react';

  import { IPlayer } from './types';


interface IPlayerData {
    data: IPlayer;
    setData: Dispatch<SetStateAction<IPlayer>>;
}
interface IChildrenProps {
    children: React.ReactNode;
}

export const PlayerContext = createContext<IPlayerData>(
    {} as IPlayerData
);

export const PlayerProvider: React.FC<IChildrenProps> = ({ children }) => {
    const [data, setData] = useState<IPlayer>(
        {} as IPlayer);
        

    return (
        <PlayerContext.Provider value={{ data, setData }}>
            {children}
        </PlayerContext.Provider>
        );
}

export const usePlayerContext = () => useContext(PlayerContext);

