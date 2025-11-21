import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';
import * as links from '../../../links.js';

const ContactContainer = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 8vw;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 6vw;
    min-height: 50vh;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: ${colors.TEXT};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${colors.TEXT_MUTED};
  margin-bottom: 3rem;
  max-width: 600px;
`;

const EmailLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 500;
  color: ${colors.ACCENT};
  text-decoration: none;
  padding: 1rem 2rem;
  border: 2px solid ${colors.ACCENT};
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.ACCENT};
    color: ${colors.BACKGROUND};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  color: ${colors.TEXT_MUTED};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.ACCENT};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Footer = styled(motion.footer)`
  text-align: center;
  padding: 2rem 8vw;
  color: ${colors.TEXT_MUTED};
  font-size: 0.9rem;
  border-top: 1px solid ${colors.BORDER};

  @media (max-width: 768px) {
    padding: 1.5rem 6vw;
    font-size: 0.85rem;
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

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle variants={itemVariants}>
            Get In Touch
          </SectionTitle>

          <Description variants={itemVariants}>
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
          </Description>

          <EmailLink
            href="mailto:luwaiwong@gmail.com"
            variants={itemVariants}
          >
            <Icon icon="mdi:email-outline" />
            luwaiwong@gmail.com
          </EmailLink>

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
            <SocialLink
              href={links.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <Icon icon="ri:instagram-line" />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </ContactContainer>

      <Footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Lu-Wai Wong. Built with React.
      </Footer>
    </>
  );
};

export default Contact;
