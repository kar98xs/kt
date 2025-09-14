import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const ExperienceContainer = styled(Container)`
  padding: 5rem 2rem;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

export const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 15px;
    background: ${({ theme }) => theme.background};
    padding: 0.5rem;
  }

  .company-placeholder {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.white};
    font-weight: 800;
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.3rem;
  }

  .position {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.firstColor};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    @media (min-width: 480px) {
      flex-direction: row;
      gap: 1rem;
    }
  }

  .duration, .location {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const TechnologiesContainer = styled.div`
  margin-top: 1.5rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.8rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TechTag = styled.span`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.firstColor};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
  }
`;

export const ResponsibilitiesContainer = styled.div`
  margin-top: 1.5rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.8rem;
  }
`;

export const ResponsibilitiesList = styled.ul`
  padding-left: 1rem;

  li {
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 0.5rem;
    position: relative;
    line-height: 1.5;

    &::before {
      content: '▸';
      color: ${({ theme }) => theme.firstColor};
      font-weight: bold;
      position: absolute;
      left: -1rem;
    }
  }
`;

export const CurrentBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.firstColor};
  color: ${({ theme }) => theme.white};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;
