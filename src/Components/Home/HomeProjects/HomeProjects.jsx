import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';
import * as links from '../../../links.js';

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 8vw;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 6vw;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: ${colors.TEXT};
  margin-bottom: 3rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.a)`
  background: ${colors.BACKGROUND_CARD};
  border: 1px solid ${colors.BORDER};
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.ACCENT};
    transform: translateY(-4px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.TEXT};
  margin: 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  color: ${colors.TEXT_MUTED};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.ACCENT};
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${colors.TEXT_MUTED};
  line-height: 1.6;
  margin: 0;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const Tag = styled.span`
  font-size: 0.875rem;
  color: ${colors.ACCENT};
  background: ${colors.BACKGROUND_LIGHT};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid ${colors.BORDER};
`;

const CategoryLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${colors.TEXT_MUTED};
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

const ViewMoreLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: ${colors.ACCENT};
  text-decoration: none;
  margin-top: 2rem;
  transition: gap 0.3s ease;

  &:hover {
    gap: 0.75rem;
  }

  svg {
    font-size: 1.3rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HomeProjects = () => {
  const projects = [
    {
      title: "GO Transit Live",
      description: "Full-stack transit tracking platform with React web app, React Native mobile app, and Python backend for real-time GO train locations across Ontario.",
      tags: ["React", "React Native", "Python", "Mobile", "Full-Stack"],
      category: "Full-Stack",
      github: links.goTransitGithubLink,
      link: null
    },
    {
      title: "Launch Window",
      description: "A beautiful, modern rocket launch tracking application built with TypeScript. Features real-time launch data and elegant UI design.",
      tags: ["TypeScript", "React", "UI/UX"],
      category: "Frontend",
      github: links.launchWindowGithubLink,
      link: null
    },
    {
      title: "Sorting Visualizer",
      description: "Interactive visualization of sorting algorithms including quicksort, mergesort, and bubblesort. Educational tool for understanding algorithm complexity.",
      tags: ["React", "JavaScript", "Algorithms"],
      category: "Frontend",
      github: links.sortingGithubLink,
      link: links.sortingLink
    },
    {
      title: "Unity Pathfinding",
      description: "Implementation and visualization of pathfinding algorithms (A*, Dijkstra) in Unity. Demonstrates algorithmic problem-solving in game development.",
      tags: ["C#", "Unity", "Algorithms"],
      category: "Game Dev",
      github: links.pathfindingGithubLink,
      link: links.pathfindingLink
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle variants={itemVariants}>
          Featured Projects
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
            >
              <CategoryLabel>{project.category}</CategoryLabel>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon icon="mdi:github" />
                    </ProjectLink>
                  )}
                  {project.link && (
                    <ProjectLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon icon="mdi:link" />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectHeader>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <ViewMoreLink
          href={links.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
        >
          View more on GitHub
          <Icon icon="mdi:arrow-right" />
        </ViewMoreLink>
      </motion.div>
    </ProjectsContainer>
  );
};

export default HomeProjects;
