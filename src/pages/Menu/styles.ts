import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 1rem auto 3rem;
  padding: 0 1rem;
`;
export const Nav = styled(NavLink)`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px #666 solid;
  text-decoration: none;
  text-align: center;
  color: #333;
  font-size: 2rem;
  &:hover {
    background-color: #ccc;
  }
  & + & {
    margin-top: 1rem;
  }
`;
