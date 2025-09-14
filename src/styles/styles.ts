import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  position: relative;
  z-index: 1;
`

export const Container = styled.section`
  padding-top: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`

export const Title = styled.h2`
  position: relative;
  font-size: 1.8rem;
  font-weight: 800;
  padding-top: 4rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.firstColor};
  text-align: center;
  z-index: 1;
  opacity: 1;

  @media (min-width: 480px) {
    font-size: 2.2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }

  @media (min-width: 994px) {
    font-size: 3.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    font-family: monospace;
    position: absolute;
    text-align: center;
    top: -1.5rem;
    color: ${props => props.theme.secondColor};

    @media (min-width: 480px) {
      font-size: 1.2rem;
    }
  }

  span {
    z-index: -1;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    left: 50%;
    right: 50%;
    color: ${props => props.theme.secondColor};
    font-weight: 800;
    font-size: 2rem;

    @media (min-width: 370px) {
      top: -0.8rem;
      font-size: 2.6rem;
    }

    @media (min-width: 480px) {
      font-size: 3rem;
    }

    @media (min-width: 994px) {
      top: -0.8rem;
      font-size: 4.5rem;
    }
  }
`

export const Button = styled.button`
  background: linear-gradient(45deg, ${props => props.theme.firstColor}, ${props => props.theme.secondColor});
  color: ${props => props.theme.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 140px;

  @media (min-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem 1.8rem;
    min-width: 160px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 217, 255, 0.3);
  }
`

export const ButtonPrimary = styled(Button)`
  background: ${props => props.theme.firstColor};
  
  &:hover {
    background: ${props => props.theme.hover};
  }
`

export const Card = styled.div`
  background: ${props => props.theme.backgroundSecond};
  border: 1px solid ${props => props.theme.border};
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.theme.firstColor};
  }
`
