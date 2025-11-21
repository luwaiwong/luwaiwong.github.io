import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';
import * as links from '../../../links.js';

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
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-weight: 400;
  color: ${colors.ACCENT};
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  color: ${colors.TEXT};
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 10vw, 3.5rem);
  }
`;

const Subtitle = styled(motion.h3)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 300;
  color: ${colors.TEXT_MUTED};
  margin-top: 0.75rem;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 4.5vw, 1.2rem);
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  color: ${colors.TEXT_MUTED};
  margin-top: 1.5rem;
  max-width: 600px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1.25rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: ${colors.TEXT_MUTED};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.ACCENT};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
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
    font-size: 1.75rem;
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

        <SocialLinks variants={itemVariants}>
          <SocialLink
            href={links.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Icon icon="mdi:github" />
          </SocialLink>
          <SocialLink
            href={links.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Icon icon="mdi:linkedin" />
          </SocialLink>
          <SocialLink
            href={links.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter/X"
          >
            <Icon icon="akar-icons:x-fill" />
          </SocialLink>
        </SocialLinks>
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
