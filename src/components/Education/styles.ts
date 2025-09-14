import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const EducationContainer = styled(Container)`
  padding: 5rem 2rem;
`;

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled.div<{ isLeft?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.firstColor};
    border: 4px solid ${({ theme }) => theme.background};
    border-radius: 50%;
    z-index: 2;

    @media (max-width: 768px) {
      left: -29px;
    }
  }
`;

export const EducationCard = styled.div<{ isLeft?: boolean }>`
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 15px;
  padding: 2rem;
  width: calc(50% - 40px);
  margin-left: ${({ isLeft }) => (isLeft ? '0' : 'auto')};
  margin-right: ${({ isLeft }) => (isLeft ? 'auto' : '0')};
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: calc(100% - 3rem);
    margin-left: 0;
    margin-right: 0;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 15px 30px rgba(0, 217, 255, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${({ isLeft }) => (isLeft ? 'right: -10px' : 'left: -10px')};
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${({ isLeft, theme }) => 
      isLeft 
        ? `border-left-color: ${theme.border};` 
        : `border-right-color: ${theme.border};`
    }

    @media (max-width: 768px) {
      left: -10px;
      right: auto;
      border-right-color: ${({ theme }) => theme.border};
      border-left-color: transparent;
    }
  }

  &:hover::before {
    ${({ isLeft, theme }) => 
      isLeft 
        ? `border-left-color: ${theme.firstColor};` 
        : `border-right-color: ${theme.firstColor};`
    }

    @media (max-width: 768px) {
      border-right-color: ${({ theme }) => theme.firstColor};
      border-left-color: transparent;
    }
  }
`;

export const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 10px;
    background: ${({ theme }) => theme.background};
    padding: 0.5rem;
  }

  .icon-placeholder {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.white};
  }
`;

export const EducationInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
  }

  .degree {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.firstColor};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .duration {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .location {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const EducationDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-top: 1rem;
`;

export const AchievementsList = styled.ul`
  margin-top: 1rem;
  padding-left: 1rem;

  li {
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 0.5rem;
    position: relative;

    &::before {
      content: '▸';
      color: ${({ theme }) => theme.firstColor};
      font-weight: bold;
      position: absolute;
      left: -1rem;
    }
  }
`;
