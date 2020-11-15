import styled from 'styled-components';

export const Background = styled.div`
  background-color: rgba(196, 196, 196, 0.48);
  box-shadow: 0 0 0.25rem #666;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;
export const Content = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;
export const UserMenu = styled.div`
  padding: 1rem;
  img {
    border-radius: 50%;
    border: 1px black solid;
  }
`;
