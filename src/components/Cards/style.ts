import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  max-width: 70rem;
  padding: 1rem;
`;
