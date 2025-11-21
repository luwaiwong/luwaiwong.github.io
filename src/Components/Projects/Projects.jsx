import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import * as colors from '../../colors.js';
import * as links from '../../links.js';

const ProjectsPageContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 8vw 4rem;

  @media (max-width: 768px) {
    padding: 6rem 6vw 3rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.TEXT_MUTED};
  text-decoration: none;
  margin-bottom: 3rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.ACCENT};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${colors.TEXT};
  margin-bottom: 1rem;
`;

const PageSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${colors.TEXT_MUTED};
  margin-bottom: 4rem;
  max-width: 700px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${colors.BACKGROUND_CARD};
  border: 1px solid ${colors.BORDER};
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
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

const Projects = () => {
  const allProjects = [
    {
      title: "GO Transit Live",
      description: "Full-stack transit tracking platform with React web app, React Native mobile app (Android/iOS), and Python backend. Real-time GO train locations across Ontario with live updates.",
      tags: ["React", "React Native", "Python", "Android", "iOS", "Full-Stack"],
      category: "Full-Stack",
      github: links.goTransitGithubLink,
      link: null
    },
    {
      title: "Launch Window",
      description: "A beautiful, modern rocket launch tracking application built with TypeScript. Features real-time launch data, countdown timers, and elegant UI design with smooth animations.",
      tags: ["TypeScript", "React", "UI/UX", "API"],
      category: "Frontend",
      github: links.launchWindowGithubLink,
      link: null
    },
    {
      title: "Sorting Visualizer",
      description: "Interactive visualization of sorting algorithms including quicksort, mergesort, heapsort, and bubblesort. Educational tool for understanding algorithm complexity and performance.",
      tags: ["React", "JavaScript", "Algorithms"],
      category: "Frontend",
      github: links.sortingGithubLink,
      link: links.sortingLink
    },
    {
      title: "Unity Pathfinding",
      description: "Implementation and visualization of pathfinding algorithms (A*, Dijkstra's) in Unity. Demonstrates algorithmic problem-solving in game development context.",
      tags: ["C#", "Unity", "Algorithms"],
      category: "Game Dev",
      github: links.pathfindingGithubLink,
      link: links.pathfindingLink
    },
    {
      title: "The Office",
      description: "A short horror game made in less than a week for TOJam 2022. Features atmospheric lighting, sound design, and puzzle mechanics.",
      tags: ["C#", "Unity3D", "Blender", "Game Jam"],
      category: "Game Dev",
      github: links.officeGithubLink,
      link: links.officeItchLink
    },
    {
      title: "Necromerger",
      description: "A 2D strategy game made in one week for Brackeys Game Jam 2021.1. Combines merge mechanics with necromancy theme and strategic gameplay.",
      tags: ["C#", "Unity2D", "Game Jam"],
      category: "Game Dev",
      github: links.necroGithubLink,
      link: links.necroLink
    },
    {
      title: "RETURN",
      description: "A 2D platformer made in 15 days for a game jam about time. Features time manipulation mechanics, pixel art, and challenging level design.",
      tags: ["C#", "Unity2D", "Game Jam"],
      category: "Game Dev",
      github: links.returnGithubLink,
      link: links.returnLink
    },
    {
      title: "Simulator",
      description: "A short first-person shooter made in less than a week for 7DFPS 2021. Fast-paced action with custom 3D models and environments.",
      tags: ["C#", "Unity3D", "Blender", "FPS"],
      category: "Game Dev",
      github: null,
      link: links.simulationLink
    }
  ];

  return (
    <ProjectsPageContainer>
      <BackLink to="/">
        <Icon icon="mdi:arrow-left" />
        Back to Home
      </BackLink>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PageTitle>All Projects</PageTitle>
        <PageSubtitle>
          A collection of my work spanning full-stack development, frontend applications, mobile apps, and game development.
        </PageSubtitle>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProjectsGrid>
          {allProjects.map((project, index) => (
            <ProjectCard key={index} variants={itemVariants}>
              <CategoryLabel>{project.category}</CategoryLabel>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon icon="mdi:github" />
                    </ProjectLink>
                  )}
                  {project.link && (
                    <ProjectLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
      </motion.div>
    </ProjectsPageContainer>
  );
};

export default Projects;
