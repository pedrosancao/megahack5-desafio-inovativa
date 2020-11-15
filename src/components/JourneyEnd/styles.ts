import styled, { keyframes } from 'styled-components';

interface CompletedProps {
  completed?: Boolean;
}

export const Container = styled.div`
  display: flex;
  min-height: 150px;
  padding: 0 1rem;
`;

const flagAnimation = keyframes`
 0% { rotate: -30deg; }
 50% { rotate: 5deg; }
 100% { rotate: -30deg; }
`;

export const Badge = styled.div<CompletedProps>`
  display: flex;
  align-items: flex-end;
  margin-left: 1rem;
  margin-right: 2rem;
  background-image: linear-gradient(to bottom, transparent 45%, #f0f2f5 45%),
    linear-gradient(
      to right,
      transparent 45%,
      ${props => (props.completed ? '#973425' : '#ddd')} 45%,
      ${props => (props.completed ? '#973425' : '#ddd')} 55%,
      transparent 55%
    );
  svg.flag {
    transform: translateX(2rem) translateY(-2rem);
    animation: 1.5s ${flagAnimation} linear infinite;
  }
`;

export const Content = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-grow: 1;
  margin-bottom: 2rem;
`;
