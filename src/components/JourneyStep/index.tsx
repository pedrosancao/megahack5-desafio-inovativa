import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faCircle,
  faMedal,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { Badge, Button, Content, Container, Completed } from './styles';

interface JourneStepParams {
  id: number;
  title: string;
  content: string;
  completed: Boolean;
  toggleCallback(stepId: number, value: Boolean): void;
}

const JourneyStep: React.FC<JourneStepParams> = ({
  id,
  title,
  content,
  completed = false,
  toggleCallback,
}: JourneStepParams) => {
  const clickHandler = () => {
    toggleCallback(id, !completed);
  };

  return (
    <Container>
      <Badge completed={completed}>
        <span className="fa-layers fa-fw fa-6x">
          {completed ? (
            <>
              <FontAwesomeIcon
                icon={faCertificate}
                color="#a8a9ad"
                className="pulse"
              />
              <FontAwesomeIcon
                icon={faMedal}
                color="blue"
                transform="shrink-8"
              />
              <FontAwesomeIcon
                icon={faCircle}
                color="#ffdf00"
                transform={{ size: 6, y: 1.25 }}
                enableBackground="red"
              />
              <FontAwesomeIcon
                icon={faStar}
                color="#d4af37"
                transform={{ size: 3, y: 1 }}
                enableBackground="red"
              />
            </>
          ) : (
            <FontAwesomeIcon icon={faCertificate} color="#ccc" />
          )}
        </span>
      </Badge>
      <Content>
        <h3>
          <span dangerouslySetInnerHTML={{ __html: title }} />
          {completed && <Completed>Concluído!</Completed>}
        </h3>
        <span dangerouslySetInnerHTML={{ __html: content }} />
        {!completed && (
          <Button type="button" onClick={clickHandler}>
            Enviar desafio
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default JourneyStep;
