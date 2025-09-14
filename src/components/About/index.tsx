import React from 'react';
import { Title } from '../../styles/styles';
import { 
  AboutContainer, 
  AboutContent, 
  AboutImage, 
  AboutText, 
  StatsContainer, 
  StatItem, 
  InterestsContainer,
  InterestsList,
  InterestTag
} from './styles';

export const About: React.FC = () => {
  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const interests = [
    'Full-Stack Development',
    'Cryptocurrency',
    'Finance & Trading',
    'Machine Learning',
    'Cloud Computing',
    'Gaming',
    'Travel'
  ];

  return (
    <AboutContainer id="about">
      <Title>
        About Me
        <p>&lt;/about&gt;</p>
      </Title>
      
      <AboutContent>
        <AboutImage>
          <img 
            src="/images/picme.jpg" 
            alt="About me"
          />
        </AboutImage>
        
        <AboutText>
          <h2>I'm a passionate Developer</h2>
          <p className="subtitle">Creating digital experiences that matter</p>
          <p>
            Hello! I'm a dedicated full-stack developer with a passion for creating 
            innovative web applications. My journey in technology started during my 
            computer science studies, where I discovered my love for turning complex 
            problems into simple, beautiful solutions.
          </p>
          <p>
           I'm driven by the challenge of solving complex problems, particularly where technology and finance converge. My journey into software development is fueled by a deep interest in Stock Market, Trading, and Cryptocurrency, and I am fascinated by the systems that power them.
          </p>
      
          <p>
          From architecting efficient algorithms to understanding market dynamics, I thrive on building robust solutions that bridge the gap between innovative technology and the financial world.
          </p>
          
          

          <InterestsContainer>
            <h3>Interests & Hobbies</h3>
            <InterestsList>
              {interests.map((interest, index) => (
                <InterestTag key={index}>
                  {interest}
                </InterestTag>
              ))}
            </InterestsList>
          </InterestsContainer>
        </AboutText>
      </AboutContent>

      <StatsContainer>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </StatItem>
        ))}
      </StatsContainer>
    </AboutContainer>
  );
};
