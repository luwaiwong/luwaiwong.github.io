import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';

const LandingContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 8vw;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 6vw;
    justify-content: center;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 400;
  color: ${colors.ACCENT};
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 700;
  color: ${colors.TEXT};
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }
`;

const Subtitle = styled(motion.h3)`
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: 300;
  color: ${colors.TEXT_MUTED};
  margin-top: 1rem;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${colors.TEXT_MUTED};
  margin-top: 2rem;
  max-width: 600px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1.5rem;
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
      staggerChildren: 0.2,
      delayChildren: 0.1
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

const Landing = () => {
  return (
    <LandingContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Greeting variants={itemVariants}>
          Hi, I'm
        </Greeting>

        <Name variants={itemVariants}>
          Lu-Wai Wong
        </Name>

        <Subtitle variants={itemVariants}>
          Full Stack Developer
        </Subtitle>

        <Description variants={itemVariants}>
          Math, CS & Stats @ UofT '26. I build web apps, mobile experiences, and everything in between.
        </Description>
      </motion.div>

      <ScrollIndicator
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Icon icon="mdi:arrow-down" />
        </motion.div>
      </ScrollIndicator>
    </LandingContainer>
  );
};

export default Landing;
