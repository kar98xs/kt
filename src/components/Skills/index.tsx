import React from 'react';
import { FaReact, FaJs, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGit } from 'react-icons/fa';
import { SiMongodb,  SiTailwindcss, SiAxios, SiSpring, SiDjango, SiJsonwebtokens, SiMysql } from 'react-icons/si';
import { Title } from '../../styles/styles';
import { 
  SkillsContainer, 
  SkillsContent, 
  SkillsGrid, 
  SkillCard, 
  CategoryTitle,
  SkillsDescription
} from './styles';

export const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Axios', icon: <SiAxios />, color: '#5A29E4' },
  ];

  const backendSkills = [
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
    { name: 'Spring Boot', icon: <SiSpring />, color: '#6DB33F' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Git', icon: <FaGit />, color: '#F05032' },
  ];

  return (
    <SkillsContainer id="skills">
      <Title>
        Skills & Technologies
        <p>&lt;/skills&gt;</p>
      </Title>
      
      <SkillsContent>
        <SkillsDescription>
          <p>
            I'm passionate about staying up-to-date with the latest technologies and best practices. 
            Here are the tools and technologies I work with to bring ideas to life.
          </p>
        </SkillsDescription>

        <CategoryTitle>Frontend Development</CategoryTitle>
        <SkillsGrid>
          {frontendSkills.map((skill, index) => (
            <SkillCard key={index} color={skill.color}>
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-name">
                {skill.name}
              </div>
            </SkillCard>
          ))}
        </SkillsGrid>

        <CategoryTitle>Backend & Tools</CategoryTitle>
        <SkillsGrid>
          {backendSkills.map((skill, index) => (
            <SkillCard key={index} color={skill.color}>
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-name">
                {skill.name}
              </div>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </SkillsContainer>
  );
};
