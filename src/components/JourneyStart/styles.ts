import styled from 'styled-components';

interface CompletedProps {
  completed?: Boolean;
}

export const Container = styled.div`
  display: flex;
  min-height: 130px;
  padding: 0 1rem;
`;

export const Badge = styled.div<CompletedProps>`
  margin-left: 1rem;
  margin-right: 2rem;
  background-image: linear-gradient(to bottom, #f0f2f5 45%, transparent 45%),
    linear-gradient(
      to right,
      transparent 45%,
      #359749 45%,
      #359749 55%,
      transparent 55%
    );
`;

export const Content = styled.h3`
  flex-grow: 1;
  margin-top: 2rem;
`;
