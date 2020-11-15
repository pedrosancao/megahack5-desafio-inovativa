import styled, { keyframes } from 'styled-components';

interface CompletedProps {
  completed?: Boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 250px;
  padding: 0 1rem;
`;

const pulseAnimation = keyframes`
 0% { rotate: 0deg; }
 100% { rotate: 30deg; }
`;

export const Badge = styled.div<CompletedProps>`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 2rem;
  background-image: linear-gradient(
    to right,
    transparent 45%,
    ${props => (props.completed ? '#359749' : '#ddd')} 45%,
    ${props => (props.completed ? '#359749' : '#ddd')} 55%,
    transparent 55%
  );
  svg.pulse {
    animation: 2s ${pulseAnimation} linear infinite;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  p {
    margin: 0.75rem 0;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  align-self: baseline;
`;

export const Completed = styled.span`
  margin-left: 0.75rem;
  color: #359749;
`;
