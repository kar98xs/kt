import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const HomeContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-top: 6rem; /* Account for navbar */
  position: relative;

  @media (max-width: 480px) {
    padding: 0.5rem;
    padding-top: 5rem;
    min-height: calc(100vh - 80px);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    line-height: 1.2;

    @media (min-width: 480px) {
      font-size: 2.5rem;
    }

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }

  .highlight {
    background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.secondColor};
    font-weight: 600;
    margin-bottom: 1rem;
    min-height: 2rem;

    @media (min-width: 480px) {
      font-size: 1.4rem;
    }

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  .description {
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    margin-bottom: 2rem;

    @media (min-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    
    button {
      width: 100%;
      max-width: 200px;
    }
  }
`;

export const ImgHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  order: -1;

  @media (min-width: 768px) {
    order: 0;
  }

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.firstColor};
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.3);
    transition: transform 0.3s ease;

    @media (min-width: 480px) {
      max-width: 350px;
    }

    @media (min-width: 768px) {
      max-width: 400px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border: 2px solid ${({ theme }) => theme.secondColor};
    border-radius: 50%;
    opacity: 0.5;
    animation: float 3s ease-in-out infinite;

    @media (min-width: 480px) {
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${({ theme }) => theme.backgroundSecond};
    color: ${({ theme }) => theme.firstColor};
    font-size: 1.3rem;
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.border};

    @media (min-width: 480px) {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }

    &:hover {
      background: ${({ theme }) => theme.firstColor};
      color: ${({ theme }) => theme.white};
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 217, 255, 0.3);
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;

  span {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .arrow {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
