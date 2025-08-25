import styled, { keyframes, css } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Space Mono";

// SIDE MENU

////////// Horizontal //////////
export const SideMenuButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: fixed;
  right: 1.5vw;
  top: 1vh;

  width: 5vw;
  height: 4vw;
  border-radius: 2vw;
  padding-top: 1vw;

  background-color: ${colors.BACKGROUND};
  color: ${colors.TEXT};

  font-size: 4vw;

  &:hover {
    cursor: pointer;

    font-size: 5vw;
  }

  z-index: 200;

  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const MenuBackground = styled.div`
  background-color: ${colors.BACKGROUND_DARK};

  position: fixed;
  right: ${(props) => (props.visible ? "-250vw" : "0vw")};
  top: ${(props) => (props.visible ? "-250vw" : "0vh")};

  width: ${(props) => (props.visible ? "500vw" : "0vw")};
  height: ${(props) => (props.visible ? "500vw" : "0vh")};

  border-radius: 100vw;

  z-index: 100;

  transition: 2s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const MenuButtonContainer = styled.div`
  position: fixed;
  top: 5vh;
  left: ${(props) => (props.visible ? "1vw" : "-50vw")};

  transition: 1s;
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.a`
  font-size: 4vw;
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};

  transition: 0.4s;
`;

////////// Vertical //////////

export const SideMenuButtonVertical = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: fixed;
  right: 2vh;
  top: 0.5vh;

  width: 7vh;
  height: 5vh;
  border-radius: 2vw;
  padding-top: 1vh;
\

  background-color: ${colors.BACKGROUND};
  color: ${colors.TEXT};

  font-size: 5vh;

  &:hover {
    cursor: pointer;

    top: 0.9vh;
    font-size: 6vh;
  }

  z-index: 200;

  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const MenuBackgroundVertical = styled.div`
  background-color: ${colors.BACKGROUND};

  position: fixed;
  right: ${(props) => (props.visible ? "-250vw" : "0vw")};
  top: ${(props) => (props.visible ? "-250vw" : "0vh")};

  width: ${(props) => (props.visible ? "500vw" : "0vw")};
  height: ${(props) => (props.visible ? "500vw" : "0vh")};

  border-radius: 100vw;

  z-index: 100;

  transition: 2s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const MenuButtonContainerVertical = styled.div`
  position: fixed;
  top: 10vh;
  left: ${(props) => (props.visible ? "7vw" : "-100vw")};

  transition: 1s;
  display: flex;
  flex-direction: column;
`;

export const MenuButtonVertical = styled.a`
  font-size: 8vh;
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};

  transition: 0.4s;
`;
