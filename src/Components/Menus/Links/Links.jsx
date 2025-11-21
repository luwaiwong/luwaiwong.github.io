import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';
import * as links from '../../../links.js';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 8vw;
  background: ${colors.BACKGROUND}CC;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.BORDER};

  @media (max-width: 768px) {
    padding: 1rem 6vw;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.TEXT};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.ACCENT};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.TEXT_MUTED};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${colors.ACCENT};
  }

  ${props => props.$active && `
    color: ${colors.ACCENT};

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${colors.ACCENT};
    }
  `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const SocialLink = styled.a`
  color: ${colors.TEXT_MUTED};
  font-size: 1.3rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.ACCENT};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Links = () => {
  const location = useLocation();

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <NavContent>
        <Logo to="/">LW</Logo>

        <NavLinks>
          <NavLink to="/" $active={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/projects" $active={location.pathname === '/projects'}>
            Projects
          </NavLink>

          <SocialLinks>
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
        </NavLinks>
      </NavContent>
    </Nav>
  );
};

export default Links;
