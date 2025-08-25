import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import { ArrowDownHeight} from "../HomeStyles.js"
import {AboutTextVertical, AboutImageVertical, AboutTextContainerVertical, AboutImageContainerVertical, AboutContainerVertical, AboutArrowContainerVertical} from './AboutStyles.js'

import * as colors from '../../../colors.js'

import meImg from '../../../Images/me.jpg'

const AboutTall = (props) => (
  <>
    <AboutContainerVertical id='about'>
        <AboutTextContainerVertical>
            <Fade direction='left' delay={0} duration={1200} triggerOnce={true}>
                <AboutTextVertical>
                    I'm Lu-Wai, I'm currently studying mathematics, computer science, and statistics at the University Of Toronto, on track to graduate in 2026. 
                </AboutTextVertical>
            </Fade>

            <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                <AboutTextVertical>
                    I'm a full stack developer, with a focus on front-end web and native mobile development (I also dabble in gamedev). I'm always looking to work on new and interesting projects!
                </AboutTextVertical>
            </Fade>
        </AboutTextContainerVertical>

        <Fade direction='right' delay={1200} duration={1200} triggerOnce={true}>
            <AboutImageContainerVertical>
            <AboutImageVertical src={meImg}/>
            </AboutImageContainerVertical>                
        </Fade>

        <AboutArrowContainerVertical href="#projects">
            <Fade direction='down' delay={100} duration={1000} triggerOnce={true}>
                <ArrowDownHeight>
                <Icon icon="mdi:arrow-down" color={colors.TEXT} /> 
                </ArrowDownHeight>
            </Fade>
        </AboutArrowContainerVertical>
    </AboutContainerVertical>
            
  </>
);

export default AboutTall;