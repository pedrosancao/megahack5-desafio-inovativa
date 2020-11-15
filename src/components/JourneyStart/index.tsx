import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFlag } from '@fortawesome/free-solid-svg-icons';

import { Badge, Content, Container } from './styles';

const JourneyStart: React.FC = () => {
  return (
    <Container>
      <Badge>
        <span className="fa-layers fa-fw fa-6x">
          <FontAwesomeIcon icon={faCircle} color="#ddd" />
          <FontAwesomeIcon icon={faFlag} color="#359749" transform="shrink-8" />
        </span>
      </Badge>
      <Content>
        <p>Aqui começa sua jornada rumo à aceleração.</p>
      </Content>
    </Container>
  );
};

export default JourneyStart;
