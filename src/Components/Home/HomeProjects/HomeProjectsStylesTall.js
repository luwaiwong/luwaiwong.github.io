import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Source Code Pro";

////////// PROJECTS //////////

////////// HEADER //////////
export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  position: relative;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: fit-content;
  width: 100vw;

  margin-left: 1vw;
  margin-top: 1vh;
  // border-radius: 20px;

  overflow: hidden;
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 100vw;
  padding-top: 5vw;
  padding-bottom: 0vw;
`;

////////// PROJECTS //////////

export const Project = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  width: 90vw;
  height: auto;
  margin-bottom: 2.5vh;
  margin-left: 4vw;

  border-radius: 20px;
  background-color: ${colors.BACKGROUND};

  box-shadow: 0px 0px 10px black;

  &:hover {
    cursor: pointer;
    margin-top: -1vh;
    margin-bottom: 3.5vh;
    // background-color: ${colors.DARK_BLUE};
  }

  z-index: 100;

  transition: 0.4s;
`;

export const ProjectImage = styled.img`
  border-radius: 20px;

  width: 100%;
  // height: 100%;

  background-color: ${colors.BACKGROUND};

  opacity: 1;

  transition: 0.4s;

  ${Project}:hover & {
    cursor: pointer;
    opacity: 0.4;
  }

  opacity: 0.4;
`;
export const ProjectImageWhite = styled.img`
  border-radius: 20px;

  width: 100%;
  // height: 100%;

  background-color: ${colors.BACKGROUND};

  opacity: 1;
  transition: 0.4s;

  ${Project}:hover & {
    cursor: pointer;
    opacity: 0.1;
  }
  opacity: 0.1;
`;

export const ProjectTitle = styled.h3`
  font-family: ${REGULAR_FONT};
  font-size: 3.2vh;
  font-decoration: underline;

  color: ${colors.TEXT};

  position: absolute;
  top: 1vh;
  left: 2vw;

  opacity: 0;
  transition: 0.4s;

  ${Project}:hover & {
    opacity: 1;
  }
  opacity: 1;
`;
export const ProjectTitleLine = styled.div`
  position: absolute;
  top: 7vh;
  left: 2.5vw;
  width: 80vw;
  height: 2px;
  background-color: ${colors.TEXT};
  border-radius: 5px;

  opacity: 0;
  transition: 0.4s;

  ${Project}:hover & {
    opacity: 1;
  }
  opacity: 1;
`;

export const ProjectText = styled.div`
  font-family: ${REGULAR_FONT};
  font-size: 2.5vh;
  font-decoration: underline;

  color: ${colors.TEXT};
  position: absolute;
  top: 8vh;
  margin: 1vh;
  margin-left: 2vw;

  opacity: 0;
  transition: 0.4s;

  ${Project}:hover & {
    opacity: 1;
  }
  opacity: 1;
`;

export const ProjectTags = styled.div`
  font-family: ${REGULAR_FONT};
  font-size: 2vh;
  font-decoration: underline;

  color: ${colors.TEXT};
  position: absolute;
  bottom: 1vh;
  margin: 1vh;
  width: 50%;

  opacity: 0;
  transition: 0.4s;

  ${Project}:hover & {
    opacity: 1;
  }
  opacity: 1;
`;

export const ProjectLinks = styled.div`
  position: absolute;
  bottom: 1vh;
  right: 1vh;

  flex-direction: row;
  justify-content: flex-end;
`;

export const ProjectLink = styled.a`
  font-family: ${REGULAR_FONT};
  font-size: 4vh;
  color: ${colors.TEXT};
  margin-left: 1vh;

  z-index: 200;
  &:hover {
    cursor: pointer;
    font-size: 5vw;
  }

  opacity: 0;
  transition: 0.4s;

  ${Project}:hover & {
    opacity: 1;
  }
  opacity: 1;
`;

export const ProjectEndText = styled.a`
  font-family: ${REGULAR_FONT};
  font-size: 2vh;

  color: ${colors.TEXT};
  text-decoration: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  width: 92vw;
  height: 15vh;
  margin-bottom: 2vw;
  margin-left: 3vw;

  padding: 2vw;

  border-radius: 20px;
  background-color: ${colors.BACKGROUND_DARK};

  &:hover {
    cursor: pointer;
    margin-top: -1vw;
    margin-bottom: 3vw;
    // background-color: ${colors.DARK_BLUE};
  }

  z-index: 0;

  transition: 0.4s;
`;

export const ProjectEndIcon = styled.a`
  position: absolute;
  bottom: 1vw;
  right: 2vw;

  flex-direction: row;
  justify-content: flex-end;

  color: ${colors.TEXT};
  font-size: 4vh;

  &:hover {
    cursor: pointer;
    font-size: 5vh;
    // background-color: ${colors.DARK_BLUE};
  }
  transition: 0.4s;
`;
