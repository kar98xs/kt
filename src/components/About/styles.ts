import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const AboutContainer = styled(Container)`
  padding: 3rem 1rem;

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    border-radius: 20px;
    z-index: -1;
    opacity: 0.1;
  }
`;

export const AboutText = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;

    @media (min-width: 480px) {
      font-size: 2.2rem;
    }

    @media (min-width: 768px) {
      font-size: 2.8rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }

  .subtitle {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.firstColor};
    font-weight: 600;
    margin-bottom: 1.5rem;

    @media (min-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.8;
    margin-bottom: 1.5rem;

    @media (min-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 3rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.backgroundSecond};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;

  @media (min-width: 480px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 10px 30px rgba(0, 217, 255, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.firstColor};
    margin-bottom: 0.5rem;

    @media (min-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textSecondary};
    margin: 0;

    @media (min-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const InterestsContainer = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
  }
`;

export const InterestsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const InterestTag = styled.span`
  background: ${({ theme }) => theme.backgroundSecond};
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
  }
`;
