import React from 'react';

import { Container, Nav } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Nav to="jornada">minha jornada</Nav>
      <Nav to="mentoria">mentoria</Nav>
      <Nav to="admin">admin</Nav>
    </Container>
  );
};

export default Menu;
