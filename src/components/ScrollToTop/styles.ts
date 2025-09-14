import styled from 'styled-components';

export const ScrollContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'visible'
})<{ visible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(20px)')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  @media (max-width: 480px) {
    bottom: 1.5rem;
    right: 1.5rem;
    transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(15px)')};
  }
`;

export const ScrollButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.firstColor};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 25px rgba(0, 217, 255, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  /* Pulse animation when first appearing */
  &.animate-pulse {
    animation: pulse 2s ease-in-out;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
    }
    50% {
      box-shadow: 0 4px 20px rgba(0, 217, 255, 0.6), 0 0 0 10px rgba(0, 217, 255, 0.1);
    }
    100% {
      box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
    }
  }
`;

export const ProgressRing = styled.svg`
  position: absolute;
  top: -5px;
  left: -5px;
  width: 60px;
  height: 60px;
  transform: rotate(-90deg);

  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
`;

export const ProgressCircle = styled.circle.withConfig({
  shouldForwardProp: (prop) => prop !== 'progress'
}).attrs<{ progress: number }>(({ progress }) => ({
  style: {
    strokeDashoffset: `${2 * Math.PI * 27 * (1 - progress / 100)}`
  }
}))<{ progress: number }>`
  fill: none;
  stroke: ${({ theme }) => theme.firstColor};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: ${2 * Math.PI * 27};
  transition: stroke-dashoffset 0.3s ease;
  opacity: 0.8;
`;
