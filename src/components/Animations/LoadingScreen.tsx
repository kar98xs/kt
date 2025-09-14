import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

let hasShownLoadingInThisPageLoad = false;

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (!hasShownLoadingInThisPageLoad) {
      setShouldShow(true);
      hasShownLoadingInThisPageLoad = true;
    } else {
      onLoadingComplete();
      return;
    }
  }, [onLoadingComplete]);

  useEffect(() => {
    if (!shouldShow) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete, shouldShow]);

  useEffect(() => {
    if (!shouldShow) return;

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'Loading...') return 'Loading';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(textInterval);
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <LoadingContainer>
      <LoadingContent>
        <LogoContainer>
          <Logo>Portfolio</Logo>
        </LogoContainer>
        <LoadingBarContainer>
          <LoadingBar progress={progress} />
          <LoadingPercentage>{Math.round(progress)}%</LoadingPercentage>
        </LoadingBarContainer>
        <LoadingText>{loadingText}</LoadingText>
      </LoadingContent>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const LogoContainer = styled.div`
  margin-bottom: 2rem;
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

const LoadingBarContainer = styled.div`
  width: 300px;
  height: 4px;
  background: ${({ theme }) => theme.border};
  border-radius: 2px;
  margin: 2rem 0;
  position: relative;
`;

const LoadingBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
  border-radius: 2px;
  transition: width 0.3s ease;
`;

const LoadingPercentage = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.firstColor};
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
`;
