import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { PlayerProvider, PlayerContext } from "../../context/PlayerContext";
import {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
} from "./style/Player.styled";

export default function Player({ children, ...restProps }) {
  return (
    <PlayerProvider>
      <Container {...restProps}>{children}</Container>
    </PlayerProvider>
  );
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);
  return (
    <Button
      onClick={() => setShowPlayer(prevShowPlayer => !prevShowPlayer)}
      {...restProps}
    >
      Play
    </Button>
  );
};

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};
