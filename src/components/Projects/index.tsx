import React from 'react';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiEye } from 'react-icons/fi';
import { Title } from '../../styles/styles';
import { projectsData } from '../../data/projects';
import { 
  ProjectsContainer, 
  ProjectsGrid, 
  ProjectCard,
  ProjectImage,
  ProjectOverlay,
  OverlayButton,
  ProjectContent,
  ProjectHeader,
  ProjectDescription,
  TechStack,
  TechTag,
  ProjectActions,
  ActionButton,
  FeaturedBadge,
  ProjectStats
} from './styles';

export const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      <Title>
        Featured Projects
        <p>&lt;/projects&gt;</p>
      </Title>
      
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
            
            <ProjectImage className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="placeholder">
                  <FiCode />
                </div>
              )}
              
              <ProjectOverlay className="project-overlay">
                <OverlayButton 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="View Live Demo"
                >
                  <FiExternalLink />
                </OverlayButton>
                <OverlayButton 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="View Source Code"
                >
                  <FiGithub />
                </OverlayButton>
              </ProjectOverlay>
            </ProjectImage>
            
            <ProjectContent>
              <ProjectHeader>
                <h3>{project.title}</h3>
                <div className="project-type">{project.type}</div>
              </ProjectHeader>
              
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ProjectActions>
                <ActionButton 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="primary"
                >
                  <FiExternalLink />
                  Live Demo
                </ActionButton>
                <ActionButton 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                  Code
                </ActionButton>
              </ProjectActions>

              <ProjectStats>
                <div className="stat">
                  <FiStar />
                  {project.stats.stars} stars
                </div>
                <div className="stat">
                  <FiEye />
                  {project.stats.views} views
                </div>
              </ProjectStats>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};
