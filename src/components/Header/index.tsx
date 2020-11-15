import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';

import { Background, Container, Content, UserMenu } from './styles';

const Header: React.FC = () => (
  <Background>
    <Container>
      <Content>Inovativa Brasil</Content>
      <UserMenu>
        <FontAwesomeIcon icon={faUser} />
        &nbsp;
        <FontAwesomeIcon icon={faCaretDown} />
      </UserMenu>
    </Container>
  </Background>
);

export default Header;
