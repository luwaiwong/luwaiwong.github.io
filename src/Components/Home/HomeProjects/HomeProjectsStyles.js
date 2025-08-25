import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Source Code Pro";

////////// PROJECTS //////////
export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
  margin-top: 1vh;
  margin-bottom: -5vh;

  position: relative;
`;

export const ProjectSubtitle = styled.div`
  margin-left: 0.25vw;
  margin-top: 5vh;
  margin-bottom: 10vh;
  margin-right: 13vw;

  position: absolute;
  top: 0vw;
  right: 0;

  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 2vw;

  text-align: right;
`;
export const ProjectContainer = styled.div`
  display: flex;

  // height: 150vh;
  height: fit-content;
  width: 90vw;

  margin-left: 1vw;
  margin-top: 1vh;
  border-radius: 20px;

  overflow: hidden;
  // background-color: ${colors.BACKGROUND_DARK};
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 45vw;
  // padding: 2vw;
  padding-top: 5vw;
  padding-bottom: 0vw;
`;

export const Project = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  width: 41vw;
  height: auto;
  margin-bottom: 3vw;

  border-radius: 20px;
  background-color: ${colors.BACKGROUND};

  box-shadow: 0px 0px 10px black;

  &:hover {
    cursor: pointer;
    margin-top: -1vw;
    margin-bottom: 4vw;
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

  ${Project}:hover & {
    cursor: pointer;
    opacity: 0.4;
  }

  opacity: 1;
  transition: 0.4s;
`;
export const ProjectImageWhite = styled.img`
  border-radius: 20px;

  width: 100%;
  // height: 100%;

  background-color: ${colors.BACKGROUND};

  ${Project}:hover & {
    cursor: pointer;
    opacity: 0.1;
  }

  opacity: 1;
  transition: 0.4s;
`;

export const ProjectTitle = styled.h3`
  font-family: ${REGULAR_FONT};
  font-size: 3vw;
  font-decoration: underline;

  color: ${colors.TEXT};

  position: absolute;
  top: 0vh;
  left: 1vw;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }
  transition: 0.4s;
`;
export const ProjectTitleLine = styled.div`
  position: absolute;
  top: 6vw;
  left: 1vw;
  width: 39vw;
  height: 3px;
  background-color: ${colors.TEXT};
  border-radius: 5px;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }
  transition: 0.4s;
`;

export const ProjectText = styled.div`
  font-family: ${REGULAR_FONT};
  font-size: 2vw;
  font-decoration: underline;

  color: ${colors.TEXT};
  position: absolute;
  top: 7vw;
  margin: 1vw;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }

  transition: 0.4s;
`;

export const ProjectTags = styled.div`
  font-family: ${REGULAR_FONT};
  font-size: 2vw;
  font-decoration: underline;

  color: ${colors.TEXT};
  position: absolute;
  bottom: 1vw;
  margin: 1vw;
  width: 50%;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }

  transition: 0.4s;
`;

export const ProjectLinks = styled.div`
  position: absolute;
  bottom: 1vw;
  right: 1vw;

  flex-direction: row;
  justify-content: flex-end;
`;

export const ProjectLink = styled.a`
  font-family: ${REGULAR_FONT};
  font-size: 4vw;
  color: ${colors.TEXT};
  margin-left: 1vw;

  z-index: 200;
  &:hover {
    cursor: pointer;
    font-size: 5vw;
  }

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }

  transition: 0.4s;
`;

export const ProjectEndText = styled.a`
  font-family: ${REGULAR_FONT};
  font-size: 2vw;

  color: ${colors.TEXT};
  text-decoration: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  width: 41vw;
  height: 100%;
  margin-bottom: 3vw;

  padding: 2vw;

  border-radius: 20px;
  background-color: ${colors.BACKGROUND_DARK};

  &:hover {
    cursor: pointer;
    margin-top: -1vw;
    margin-bottom: 3vw;
    // background-color: ${colors.DARK_BLUE};
  }

  ${(props) =>
    props.mobile === true &&
    css`
      height: 20px;
      width: 20px;
    `}

  z-index: 0;

  transition: 0.4s;
`;

export const ProjectEndIcon = styled.a`
  position: absolute;
  bottom: 1vw;
  left: 2vw;

  flex-direction: row;
  justify-content: flex-end;

  color: ${colors.TEXT};
  font-size: 4vw;
`;
