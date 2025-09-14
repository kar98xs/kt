import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const ProjectsContainer = styled(Container)`
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-bottom: 1.5rem;
  }
`;

export const FilterButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})<{ active: boolean }>`
  padding: 0.6rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 25px;
  background: ${({ active, theme }) => (active ? theme.firstColor : theme.backgroundSecond)};
  color: ${({ active, theme }) => (active ? theme.white : theme.textPrimary)};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
  }

  &:hover {
    background: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);

    @media (max-width: 768px) {
      transform: translateY(-1px);
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 15px;
    margin: 0 0.5rem;
  }

  @media (max-width: 480px) {
    margin: 0;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);

    @media (max-width: 768px) {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 217, 255, 0.1);
    }

    .project-image {
      transform: scale(1.05);
    }

    .project-overlay {
      opacity: 1;
    }
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  background: ${({ theme }) => theme.background};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 3rem;
    color: ${({ theme }) => theme.firstColor};
    background: linear-gradient(135deg, ${({ theme }) => theme.backgroundSecond}, ${({ theme }) => theme.background});
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const OverlayButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.firstColor};
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: scale(1.1);
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProjectHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .project-type {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.firstColor};
    font-weight: 500;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
`;

export const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.firstColor};
  border: 1px solid ${({ theme }) => theme.firstColor};
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
  }

  &.primary {
    background: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.white};

    &:hover {
      background: ${({ theme }) => theme.hover};
    }
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
  color: ${({ theme }) => theme.white};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 2;
`;

export const ProjectStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};

  .stat {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;
