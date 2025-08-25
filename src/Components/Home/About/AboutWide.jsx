import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import { SectionCentered,  ArrowDown} from "../HomeStyles.js"
import {AboutText, AboutImage, AboutTextContainer, AboutImageContainer} from './AboutStyles.js'

import { LandingArrowContainer } from '../Landing Page/LandingStyles.js'
import * as colors from '../../../colors.js'

import meImg from '../../../Images/me.jpg'

const AboutWide = (props) => (
  <>
    <SectionCentered id='about'>
            <AboutTextContainer>
                <Fade direction='left' delay={0} duration={1200} triggerOnce={true}>
                    <AboutText>
                        I'm Lu-Wai, I'm currently studying mathematics and statistics at the University Of Toronto, on track to graduate in 2026. 
                    </AboutText>
                </Fade>

                <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                    <AboutText>
                    I'm a full stack developer, with a focus on front-end web and native mobile development (I also dabble in gamedev). I'm always looking to work on new and interesting projects!
                    </AboutText>
                </Fade>
            </AboutTextContainer>

            <Fade direction='right' delay={1200} duration={1200} triggerOnce={true}>
              <AboutImageContainer>
                <AboutImage src={meImg}/>
              </AboutImageContainer>                
            </Fade>

      <LandingArrowContainer href="#projects">
        <Fade direction='down' delay={100} duration={1000} triggerOnce={true}>
            <ArrowDown>
              <Icon icon="mdi:arrow-down" color={colors.TEXT} /> 
            </ArrowDown>
        </Fade>
      </LandingArrowContainer>
    </SectionCentered>
  </>
);

export default AboutWide;