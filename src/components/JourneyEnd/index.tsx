import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';

import { Badge, Content, Container } from './styles';

interface JourneEndParams {
  completed?: Boolean;
}

const JourneyEnd: React.FC<JourneEndParams> = ({
  completed,
}: JourneEndParams) => {
  const flagAttributes = completed
    ? {
        className: 'flag',
        transform: {
          size: 15,
          x: -3,
          y: 5,
        },
      }
    : {
        transform: {
          size: 12,
        },
      };

  return (
    <Container>
      <Badge completed={completed}>
        <span className="fa-layers fa-fw fa-6x">
          <FontAwesomeIcon
            icon={faCircle}
            color="#ddd"
            transform={{ size: 25 }}
          />
          <FontAwesomeIcon
            icon={faFlagCheckered}
            color="#000"
            {...flagAttributes}
          />
        </span>
      </Badge>
      <Content>
        {completed ? (
          <>
            <p>Parabéns!</p>
            <p>
              Sua empresa está pronta para participar do ciclo de aceleração.
            </p>
          </>
        ) : (
          <p>Continue trabalhando!</p>
        )}
      </Content>
    </Container>
  );
};

export default JourneyEnd;
