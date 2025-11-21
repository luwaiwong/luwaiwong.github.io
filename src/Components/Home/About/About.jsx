import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';
import meImg from '../../../Images/me.jpg';

const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 8vw;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 6vw;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutTextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: ${colors.TEXT};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${colors.ACCENT};
  }
`;

const AboutText = styled(motion.p)`
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  color: ${colors.TEXT_MUTED};
  line-height: 1.8;
  margin: 0;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  max-width: 400px;
  justify-self: center;

  @media (max-width: 1024px) {
    max-width: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  position: relative;
  z-index: 2;
`;

const ImageBorder = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  border: 2px solid ${colors.ACCENT};
  border-radius: 8px;
  z-index: 1;
  transition: all 0.3s ease;

  ${ImageContainer}:hover & {
    top: 15px;
    left: 15px;
  }
`;

const ScrollIndicator = styled(motion.a)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${colors.TEXT_MUTED};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.ACCENT};
  }

  svg {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    bottom: 2rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutTextSection>
            <SectionTitle variants={itemVariants}>
              About Me
            </SectionTitle>

            <AboutText variants={itemVariants}>
              I'm Lu-Wai, currently studying mathematics and statistics at the University of Toronto,
              on track to graduate in 2026.
            </AboutText>

            <AboutText variants={itemVariants}>
              I'm a full-stack developer with a focus on frontend web and native mobile development.
              I love building intuitive, performant applications that solve real problems. From React
              web apps to React Native mobile experiences, I enjoy working across the entire stack.
            </AboutText>

            <AboutText variants={itemVariants}>
              When I'm not coding, you might find me exploring new technologies, contributing to open
              source, or working on game dev side projects.
            </AboutText>
          </AboutTextSection>
        </motion.div>

        <ImageContainer
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProfileImage src={meImg} alt="Lu-Wai Wong" />
          <ImageBorder />
        </ImageContainer>
      </AboutContent>

      <ScrollIndicator href="#projects">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          animate={{ y: [0, 8, 0] }}
        >
          <Icon icon="mdi:arrow-down" />
        </motion.div>
      </ScrollIndicator>
    </AboutContainer>
  );
};

export default About;
