import styled from 'styled-components';
import { Container } from '../../styles/styles';

export const ContactContainer = styled(Container)`
  padding: 5rem 2rem;
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

export const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.firstColor};
    transform: translateX(10px);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.firstColor};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
    font-size: 1.2rem;
  }

  .details {
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.text};
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.95rem;
      color: ${({ theme }) => theme.textSecondary};
      margin: 0;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.backgroundSecond};
    color: ${({ theme }) => theme.firstColor};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 50%;
    font-size: 1.3rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.firstColor};
      color: ${({ theme }) => theme.white};
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 217, 255, 0.3);
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }

  &.half {
    @media (min-width: 480px) {
      flex-direction: row;
      gap: 1rem;

      > div {
        flex: 1;
      }
    }
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.backgroundSecond};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.backgroundSecond};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.firstColor};
    box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.firstColor}, ${({ theme }) => theme.secondColor});
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 217, 255, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

export const FormMessage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'success'
})<{ success?: boolean }>`
  padding: 1rem;
  border-radius: 10px;
  background: ${({ success, theme }) => 
    success 
      ? 'rgba(52, 211, 153, 0.1)' 
      : 'rgba(239, 68, 68, 0.1)'
  };
  border: 1px solid ${({ success, theme }) => 
    success 
      ? theme.emerald_400 
      : '#ef4444'
  };
  color: ${({ success, theme }) => 
    success 
      ? theme.emerald_400 
      : '#ef4444'
  };
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AvailabilityStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.backgroundSecond};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 1rem;

  .status-dot {
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.emerald_400};
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
