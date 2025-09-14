import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const CertificationsContainer = styled(Container)`
  padding: 3rem 1rem;
  width: 100%;
  min-height: auto;
  display: block;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    min-height: auto;
    display: block;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
    min-height: auto;
    display: block;
  }
`;

export const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
    margin: 2rem auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
    margin: 1.5rem auto;
  }
`;

export const CertificationCard = styled.div`
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 15px;
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 0;
    border-radius: 12px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.1), transparent);
    transition: all 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);

    @media (max-width: 768px) {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 217, 255, 0.1);
    }

    &::before {
      left: 100%;
    }

    .cert-image {
      transform: scale(1.1);
    }
  }
`;

export const CertificationImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  border: 2px solid ${({ theme }) => theme.border};

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 10px;
  }

  .cert-icon {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.firstColor};
  }
`;

export const CertificationInfo = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .issuer {
    font-size: 1rem;
    color: ${({ theme }) => theme.firstColor};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .date {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .description {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

export const CertificationActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

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

export const CertificationBadge = styled.div`
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
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 3rem auto 0;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin: 2rem auto 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem auto 0;
  }
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.firstColor};
    transform: translateY(-3px);
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.firstColor};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    margin: 0;
  }
`;
