import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import * as colors from '../../../colors.js';
import * as links from '../../../links.js';

const ProjectsContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const TitleContainer = styled.div`
  padding: 0 8vw;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    padding: 0 6vw;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: ${colors.TEXT};
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
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

const ProjectCard = styled(motion.a)`
  background: ${colors.BACKGROUND_CARD};
  border-top: 1px solid ${colors.BORDER};
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  overflow: hidden;

  &:hover {
    background: ${colors.BACKGROUND_LIGHT};
  }

  &:last-child {
    border-bottom: 1px solid ${colors.BORDER};
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background: ${colors.BACKGROUND_LIGHT};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.BACKGROUND_LIGHT} 0%, ${colors.BACKGROUND_CARD} 100%);
  color: ${colors.TEXT_MUTED};
  font-size: 3rem;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 6vw;
  }
`;

const CategoryLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${colors.TEXT_MUTED};
  font-weight: 500;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
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
  font-size: 1.1rem;
  color: ${colors.TEXT_MUTED};
  line-height: 1.7;
  margin: 0;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.875rem;
  color: ${colors.ACCENT};
  background: ${colors.BACKGROUND_LIGHT};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid ${colors.BORDER};
`;

const ViewMoreContainer = styled.div`
  padding: 3rem 8vw;

  @media (max-width: 768px) {
    padding: 2rem 6vw;
  }
`;

const ViewMoreLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: ${colors.ACCENT};
  text-decoration: none;
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
      link: null,
      icon: "mdi:train"
    },
    {
      title: "Launch Window",
      description: "A beautiful, modern rocket launch tracking application built with TypeScript. Features real-time launch data and elegant UI design.",
      tags: ["TypeScript", "React", "UI/UX"],
      category: "Frontend",
      github: links.launchWindowGithubLink,
      link: null,
      icon: "mdi:rocket-launch"
    },
    {
      title: "Sorting Visualizer",
      description: "Interactive visualization of sorting algorithms including quicksort, mergesort, and bubblesort. Educational tool for understanding algorithm complexity.",
      tags: ["React", "JavaScript", "Algorithms"],
      category: "Frontend",
      github: links.sortingGithubLink,
      link: links.sortingLink,
      icon: "mdi:sort"
    },
    {
      title: "Unity Pathfinding",
      description: "Implementation and visualization of pathfinding algorithms (A*, Dijkstra) in Unity. Demonstrates algorithmic problem-solving in game development.",
      tags: ["C#", "Unity", "Algorithms"],
      category: "Game Dev",
      github: links.pathfindingGithubLink,
      link: links.pathfindingLink,
      icon: "mdi:map-marker-path"
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <TitleContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            Featured Projects
          </SectionTitle>
        </motion.div>
      </TitleContainer>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              href={project.link || project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
            >
              <ProjectImageContainer>
                <ProjectImagePlaceholder>
                  <Icon icon={project.icon} />
                </ProjectImagePlaceholder>
              </ProjectImageContainer>

              <ProjectContent>
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
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>

      <ViewMoreContainer>
        <ViewMoreLink
          href={links.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          View more on GitHub
          <Icon icon="mdi:arrow-right" />
        </ViewMoreLink>
      </ViewMoreContainer>
    </ProjectsContainer>
  );
};

export default HomeProjects;
