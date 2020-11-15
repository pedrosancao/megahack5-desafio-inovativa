import React, { useEffect, useState } from 'react';

import Header from 'src/components/Header';
import JourneyEnd from 'src/components/JourneyEnd';
import JourneyStart from 'src/components/JourneyStart';
import JourneyStep from 'src/components/JourneyStep';

import { Container, CompanyCard, Steps } from './styles';

interface JourneyStepData {
  id: number;
  title: string;
  content: string;
  completed: Boolean;
}

const Journey: React.FC = () => {
  const [company] = useState('Sanção Co.');
  const [steps, setSteps] = useState<JourneyStepData[]>([]);
  const [journeyCompleted, setJourneyCompleted] = useState(false);

  useEffect(() => {
    // simula carregamento de fonte externa
    setSteps([
      {
        id: 1,
        title: 'Plano de negócio',
        content: '<p>O SEBRAE pode ajudar a criar o plano de negócio.</p>',
        completed: true,
      },
      {
        id: 2,
        title: 'Pesquisa de demanda',
        content: '<p>Faça uma pesquisa com potenciais clientes.</p>',
        completed: true,
      },
      {
        id: 3,
        title: 'Abertura de CNPJ',
        content: '<p>Abra um CNPJ junto aos orgãos reguladores.</p>',
        completed: true,
      },
      {
        id: 4,
        title: 'Validação da ideia',
        content: '<p>Faça a validação da ideia.</p>',
        completed: true,
      },
      {
        id: 5,
        title: 'Balanço financeiro',
        content:
          '<p>Tenha a documentação com o balanço financeiro de últimos 3 meses.</p>',
        completed: true,
      },
      {
        id: 6,
        title: 'Apresentação para o <i>pitch</i>',
        content:
          '<p>Crie uma apresentação e se prepare para o <i>pitch</i></p>',
        completed: false,
      },
      {
        id: 7,
        title: 'Avaliação Inovativa Brasil',
        content: '<p>Solicite uma avaliação com a Inovativa Brasil</p>',
        completed: false,
      },
    ]);
  }, []);
  useEffect(() => {
    const completed = steps.filter(step => step.completed).length;
    setJourneyCompleted(completed === steps.length);
  }, [steps]);
  const completeToggleHandler = (stepId: number, value: Boolean) => {
    setSteps(
      steps.map(step => {
        const { id, title, content } = step;
        const completed = id === stepId ? value : step.completed;
        return { id, title, completed, content };
      }),
    );
  };

  return (
    <>
      <Header />
      <Container>
        <CompanyCard>
          <img
            src={`https://ui-avatars.com/api/?background=random&rounded=true&size=192&name=${encodeURIComponent(
              company,
            )}.`}
            alt="logo da empresa"
          />
          <h2>{company}</h2>
        </CompanyCard>
        <Steps>
          <JourneyStart />
          {steps.map(step => (
            <JourneyStep
              key={step.id}
              {...step}
              toggleCallback={completeToggleHandler}
            />
          ))}
          <JourneyEnd completed={journeyCompleted} />
        </Steps>
      </Container>
    </>
  );
};

export default Journey;
