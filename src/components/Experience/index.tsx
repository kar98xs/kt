import React from 'react';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { Title } from '../../styles/styles';
import { 
  ExperienceContainer, 
  ExperienceGrid, 
  ExperienceCard,
  ExperienceHeader,
  CompanyInfo,
  ExperienceDescription,
  TechnologiesContainer,
  TechStack,
  TechTag,
  ResponsibilitiesContainer,
  ResponsibilitiesList,
  CurrentBadge
} from './styles';

export const Experience: React.FC = () => {
  const experienceData = [
    {
      id: 1,
      company: 'PremitiveKey Technology',
      position: 'Full Stack Developer',
      duration: 'May 2025 - July 2025',
      location: 'On-site',
      description: 'Leading development of scalable web applications using modern technologies.',
      technologies: ['React', 'JavaScript', 'Python', 'Django', 'MySQL'],
      responsibilities: [
        'Architected and developed 2+ full-stack applications from concept to deployment',
        'Led a team of 4 developers using Agile methodologies',
        'Improved application performance by 40% through optimization techniques',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
      logo: null,
      current: false
    },
   
  ];

  return (
    <ExperienceContainer id="experience">
      <Title>
        Work Experience
        <p>&lt;/experience&gt;</p>
      </Title>
      
      <ExperienceGrid>
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id}>
            {exp.current && <CurrentBadge>Current</CurrentBadge>}
            
            <ExperienceHeader>
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} />
              ) : (
                <div className="company-placeholder">
                  <FiBriefcase />
                </div>
              )}
              
              <CompanyInfo>
                <h3>{exp.company}</h3>
                <div className="position">{exp.position}</div>
                <div className="meta">
                  <div className="duration">
                    <FiCalendar />
                    {exp.duration}
                  </div>
                  <div className="location">
                    <FiMapPin />
                    {exp.location}
                  </div>
                </div>
              </CompanyInfo>
            </ExperienceHeader>
            
            <ExperienceDescription>
              {exp.description}
            </ExperienceDescription>
            
            <TechnologiesContainer>
              <h4>Technologies Used</h4>
              <TechStack>
                {exp.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
            </TechnologiesContainer>
            
            <ResponsibilitiesContainer>
              <h4>Key Responsibilities</h4>
              <ResponsibilitiesList>
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ResponsibilitiesList>
            </ResponsibilitiesContainer>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceContainer>
  );
};
