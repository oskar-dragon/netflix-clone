import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";

const PlayerContext = createContext();

function PlayerProvider({ children }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}

export { PlayerProvider, PlayerContext };
