import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';
import * as links from '../../../links.js';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 1rem;
  left: 50%;
  z-index: 1000;
  max-width: 900px;
  width: calc(100% - 4rem);
  background: ${colors.BACKGROUND_CARD}E6;
  backdrop-filter: blur(10px);
  border: 1px solid ${colors.BORDER};
  border-radius: 50px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    top: 0.75rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: ${props => props.$compact ? '0.75rem 2rem' : '1rem 2rem'};
  transition: padding 0.3s ease;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: ${props => props.$compact ? '0.5rem 1rem' : '0.75rem 1.5rem'};
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
  font-size: ${props => props.$compact ? '0.9rem' : '0.95rem'};
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;

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
    font-size: ${props => props.$compact ? '0.85rem' : '0.9rem'};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SocialLink = styled.a`
  color: ${colors.TEXT_MUTED};
  font-size: ${props => props.$compact ? '1.2rem' : '1.3rem'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.ACCENT};
  }

  @media (max-width: 768px) {
    font-size: ${props => props.$compact ? '1.1rem' : '1.2rem'};
  }
`;

const Links = () => {
  const location = useLocation();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      style={{ x: '-50%' }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <NavContent $compact={isCompact}>
        <NavLinks>
          <NavLink to="/" $active={location.pathname === '/'} $compact={isCompact}>
            Home
          </NavLink>
          <NavLink to="/projects" $active={location.pathname === '/projects'} $compact={isCompact}>
            Projects
          </NavLink>
        </NavLinks>

        <SocialLinks>
          <SocialLink
            href={links.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            $compact={isCompact}
          >
            <Icon icon="mdi:github" />
          </SocialLink>
          <SocialLink
            href={links.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            $compact={isCompact}
          >
            <Icon icon="mdi:linkedin" />
          </SocialLink>
          <SocialLink
            href={links.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter/X"
            $compact={isCompact}
          >
            <Icon icon="akar-icons:x-fill" />
          </SocialLink>
        </SocialLinks>
      </NavContent>
    </Nav>
  );
};

export default Links;
