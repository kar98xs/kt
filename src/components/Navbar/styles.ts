import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  padding: 0.8rem 0;
  background: rgba(2, 6, 23, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 217, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: background, padding, box-shadow;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  @media (max-width: 480px) {
    padding: 0.6rem 0;
  }

  &.scrolled {
    background: rgba(2, 6, 23, 0.95);
    padding: 0.5rem 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
      padding: 0.4rem 0;
    }
  }
`;

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.1rem;
  font-weight: 800;
  background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (min-width: 480px) {
    font-size: 1.3rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.ul`
  display: none;
  list-style: none;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.li`
  a {
    color: ${({ theme }) => theme.textSecondary};
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover, &.active {
      color: ${({ theme }) => theme.firstColor};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
      transition: width 0.3s ease;
    }

    &:hover::after, &.active::after {
      width: 100%;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 480px) {
    width: 44px;
    height: 44px;
    font-size: 1.1rem;
  }

  &:hover {
    background: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 217, 255, 0.3);
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.firstColor};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(2, 6, 23, 0.98);
  backdrop-filter: blur(10px);
  padding: 2rem;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuBackdrop = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 217, 255, 0.2);
`;

export const MobileMenuTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 800;
  background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const MobileCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.firstColor};
    background: rgba(0, 217, 255, 0.1);
    transform: rotate(90deg);
  }
`;

export const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  justify-content: flex-start;
`;

export const MobileNavLink = styled.li`
  a {
    color: ${({ theme }) => theme.textSecondary};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.8rem;
    display: block;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover, &.active {
      color: ${({ theme }) => theme.firstColor};
      background: rgba(0, 217, 255, 0.1);
      transform: translateX(10px);
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
      transition: width 0.3s ease;
    }

    &:hover::before, &.active::before {
      width: 4px;
    }
  }
`;
