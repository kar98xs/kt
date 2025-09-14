import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const SkillsContainer = styled(Container)`
  padding: 5rem 2rem;
`;

export const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`;

export const SkillCard = styled.div<{ color: string }>`
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 15px;
  padding: 2rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ color }) => color};
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    .skill-icon {
      transform: scale(1.1);
    }
    
    .skill-name {
      color: ${({ color }) => color};
    }
  }

  .skill-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1rem;
    transition: transform 0.3s ease;
    border-radius: 10px;
    background: ${({ theme }) => theme.background};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${({ color }) => color};
    
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  .skill-name {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
    transition: color 0.3s ease;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin: 3rem 0 2rem 0;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    border-radius: 2px;
  }
`;

export const SkillsDescription = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const ProficiencyContainer = styled.div`
  margin-top: 4rem;
`;

export const ProficiencyItem = styled.div`
  margin-bottom: 2rem;

  .skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    span {
      font-weight: 600;
      color: ${({ theme }) => theme.textPrimary};
    }

    .percentage {
      color: ${({ theme }) => theme.firstColor};
    }
  }
`;

export const ProgressBar = styled.div<{ percentage: number; color: string }>`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.border};
  border-radius: 4px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${({ percentage }) => percentage}%;
    height: 100%;
    background: ${({ color }) => color};
    border-radius: 4px;
    animation: fillProgress 2s ease-out;
  }

  @keyframes fillProgress {
    from {
      width: 0%;
    }
    to {
      width: ${({ percentage }) => percentage}%;
    }
  }
`;
