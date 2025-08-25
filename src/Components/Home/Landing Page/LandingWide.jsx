import React from 'react'
import {SectionCentered, Flexbox, Title, SubTitle,  Letter,  ArrowDown, BoldSubTitle, } from "../HomeStyles.js"
import {IntroSubheaderContainer, LandingArrowContainer, NameContainer, FirstNameContainer, LastNameContainer,LeftLandingSubText, RightLandingSubText} from "./LandingStyles.js"
import * as colors from '../../../colors.js'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

const LandingWide = (props) => (
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
        <FirstNameContainer> 
          <Fade cascade damping={0.1} duration={800} delay={1500} style={{zIndex:1}} direction={'up'} triggerOnce={true}>
            <Letter> L</Letter>
            <Letter> u</Letter>
            <Letter> -</Letter>
            <Letter> W</Letter>
            <Letter> a</Letter>
            <Letter> i</Letter>
          </Fade>
        </FirstNameContainer>
        <LastNameContainer> 
          <Fade cascade damping={0.1} duration={800} delay={2500} style={{zIndex:1}} direction={'up'} triggerOnce={true}>
            <Letter> W</Letter>
            <Letter> o</Letter>
            <Letter> n</Letter>
            <Letter> g</Letter>
          </Fade>
        </LastNameContainer>
      </NameContainer>


      <LeftLandingSubText>
        <Fade delay={4000} direction='down' triggerOnce={true}>
            <SubTitle>Math, CS & Stats</SubTitle>
        </Fade>
        
        <Fade delay={4800}direction='down' triggerOnce={true}>
            <SubTitle>Developer</SubTitle>
        </Fade>
      </LeftLandingSubText>

      <RightLandingSubText>
        <AttentionSeeker effect="rubberBand" delay={7000} style={{zIndex:0}}>
        <Fade delay={5600} direction='down' triggerOnce={true}>
            <SubTitle>uoft '26</SubTitle>
        </Fade>
        </AttentionSeeker>
      </RightLandingSubText>
      
      <LandingArrowContainer href="#about">
        <Fade direction='down' delay={6400} duration={1000} triggerOnce={true}>
            <ArrowDown>
              <Icon icon="mdi:arrow-down" color={colors.TEXT} /> 
            </ArrowDown>
        </Fade>
      </LandingArrowContainer>
    </SectionCentered>
  </>
);

export default LandingWide;
