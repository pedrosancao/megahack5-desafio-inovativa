import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 1rem auto 3rem;
  padding: 0 1rem;
  @media (min-width: 700px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const CompanyCard = styled.div`
  max-width: 400px;
  margin: 0 auto 1rem;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0.25rem 0.25rem 0.5rem #ccc;
  @media (min-width: 700px) {
    width: 260px;
    margin-right: 1rem;
    position: sticky;
    top: 1rem;
  }
  img {
    margin: 0 auto;
  }
  h2 {
    margin-top: 1rem;
  }
`;

export const Steps = styled.div`
  flex-grow: 1;
`;
