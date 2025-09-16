import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';
import { Button, ButtonPrimary } from '../../styles/styles';
import { HomeContainer, Content, HomeText, ButtonGroup, ImgHome, SocialLinks, ScrollIndicator } from './styles';

export const HomeHero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomeContainer id="home">
      <Content>
        <HomeText>
          <h1>
            Hi, I'm <span className="highlight">Kartik Tripathi</span>
          </h1>
          <div className="subtitle">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Market Analyst',
                  'Problem Solver',
                  'Finance Enthusiast',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </div>
          <p className="description">
            I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications. 
            With expertise in modern web technologies, I bring ideas to life through clean code and innovative solutions.
          </p>
          <ButtonGroup>
            <ButtonPrimary 
              as="a" 
              href="https://drive.google.com/file/d/1cX0-d0HSy1u41jB_6bvTeZEktClTdc70/view" 
              
              target="_blank"
            >
              <FiDownload /> Download CV
            </ButtonPrimary>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </Button>
          </ButtonGroup>
          <SocialLinks>
            <a href="https://github.com/K9TX" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/k9tx" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="mailto:Kartik.tripathi9096@gmail.com">
              <FiMail />
            </a>
          </SocialLinks>
        </HomeText>
        <ImgHome>
          <img 
            src="/images/picme.jpg" 
            alt="Profile"
          />
        </ImgHome>
      </Content>
      <ScrollIndicator onClick={scrollToNext}>
        <span>Scroll Down</span>
        <div className="arrow">
          <FiArrowDown />
        </div>
      </ScrollIndicator>
    </HomeContainer>
  );
};

