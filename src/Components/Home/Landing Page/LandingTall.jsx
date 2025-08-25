import React from 'react'
import {SectionCentered, Flexbox, Title, SubTitle,  Letter,  ArrowDownHeight, BoldSubTitle } from "../HomeStylesTall.js"
import {IntroSubheaderContainer, NameContainer, FirstNameContainerTall, LastNameContainerTall,LeftLandingSubTextTall, RightLandingSubTextTall, LandingArrowContainerTall} from "./LandingStyles.js"
import * as colors from '../../../colors.js'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

const LandingTall = (props) => (
  <>
    <SectionCentered>
      
      {/* INTRO SECTION */}
      <IntroSubheaderContainer>
          <Fade style={{zIndex:0}} direction={'down'} triggerOnce={true}>
                <BoldSubTitle> Hi, &nbsp;</BoldSubTitle>
            </Fade>
            
            <Fade delay={800} direction={'down'} style={{zIndex:0}} triggerOnce={true}>
                <BoldSubTitle> I'm</BoldSubTitle>
            </Fade>
      </IntroSubheaderContainer>
      <NameContainer>
        <FirstNameContainerTall> 
          <Fade cascade damping={0.1} duration={800} delay={1500} style={{zIndex:1}} direction={'up'} triggerOnce={true}>
            <Letter> L</Letter>
            <Letter> u</Letter>
            <Letter> -</Letter>
            <Letter> W</Letter>
            <Letter> a</Letter>
            <Letter> i</Letter>
          </Fade>
        </FirstNameContainerTall>
        <LastNameContainerTall> 
          <Fade cascade damping={0.1} duration={800} delay={2500} style={{zIndex:1}} direction={'up'} triggerOnce={true}>
            <Letter> W</Letter>
            <Letter> o</Letter>
            <Letter> n</Letter>
            <Letter> g</Letter>
          </Fade>
        </LastNameContainerTall>
      </NameContainer>


      <LeftLandingSubTextTall>
        <Fade delay={4000}direction='down' triggerOnce={true}>
            <SubTitle>Developer</SubTitle>
        </Fade>
        <Fade delay={4800} direction='down' triggerOnce={true}>
              <SubTitle>Math, CS & Stats</SubTitle>
        </Fade>
        
      </LeftLandingSubTextTall>

      <RightLandingSubTextTall>
        <AttentionSeeker effect="rubberBand" delay={7000} style={{zIndex:0}}>
        <Fade delay={5600} direction='down' triggerOnce={true}>
            <SubTitle>uoft '26</SubTitle>
        </Fade>
        </AttentionSeeker>
      </RightLandingSubTextTall>
      
      <LandingArrowContainerTall href="#about">
        <Fade direction='down' delay={6400} duration={1000} triggerOnce={true}>
            <ArrowDownHeight>
              <Icon icon="mdi:arrow-down" color={colors.TEXT} /> 
            </ArrowDownHeight>
        </Fade>
      </LandingArrowContainerTall>
    </SectionCentered>
  </>
);

export default LandingTall;
