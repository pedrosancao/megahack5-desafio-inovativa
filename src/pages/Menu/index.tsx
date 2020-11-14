import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <NavLink to="jornada">minha jornada</NavLink>
      <NavLink to="mentoria">mentoria</NavLink>
      <NavLink to="admin">admin</NavLink>
    </Container>
  );
};

export default Menu;
