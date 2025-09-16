import React from 'react';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { Title } from '../../styles/styles';
import { 
  EducationContainer, 
  TimelineContainer, 
  TimelineItem, 
  EducationCard,
  EducationHeader,
  EducationInfo,
  EducationDescription,
  AchievementsList
} from './styles';

export const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Sharda University',
      degree: 'Bachelor of Technology (Computer Science & Engineering)',
      duration: '2022 - 2026',
      location: 'Greater Noida, India',
      description: 'Focused on software engineering, DS & Algorithms, and web development.',
      achievements: [
        'GPA: 8/10',
        'Completed multiple projects in web development',
        'Developed leadership skills through group projects',
        'Led team in winning University hackathon'
      ],
      logo: null
    },
    {
      id: 2,
      institution: 'R.K Talreja College ',
      degree: 'Higher Secondary School',
      duration: '2020',
      location: 'Thane, Maharashtra, India',
      description: 'A motivated and disciplined Passout of RKT College with a proven aptitude for the analytical and problem-solving demands of the Science stream.',
      achievements: [
        'PCM - 90%',
        'State Merit Scholar',
        'First place in State Mathematics ',
      ],
      logo: null
    }
  ];

  return (
    <EducationContainer id="education">
      <Title>
        Education
        <p>&lt;/education&gt;</p>
      </Title>
      
      <TimelineContainer>
        {educationData.map((edu, index) => (
          <TimelineItem key={edu.id} isLeft={index % 2 === 0}>
            <EducationCard isLeft={index % 2 === 0}>
              <EducationHeader>
                {edu.logo ? (
                  <img src={edu.logo} alt={edu.institution} />
                ) : (
                  <div className="icon-placeholder">
                    <FiAward />
                  </div>
                )}
                <EducationInfo>
                  <h3>{edu.institution}</h3>
                  <div className="degree">{edu.degree}</div>
                  <div className="duration">
                    <FiCalendar />
                    {edu.duration}
                  </div>
                  <div className="location">
                    <FiMapPin />
                    {edu.location}
                  </div>
                </EducationInfo>
              </EducationHeader>
              
              <EducationDescription>
                {edu.description}
              </EducationDescription>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <>
                  <h4 style={{ 
                    color: 'var(--first-color)', 
                    marginTop: '1rem', 
                    marginBottom: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Key Achievements:
                  </h4>
                  <AchievementsList>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </AchievementsList>
                </>
              )}
            </EducationCard>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </EducationContainer>
  );
};

