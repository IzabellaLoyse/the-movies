import styled from 'styled-components';

export const MoviePage = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 37.5rem;
  padding-right: 2rem;
`;

export const Tagline = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Info = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    align-items: center;
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const InfoDescription = styled(Info)`
  p {
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.051em;
    line-height: 23px;
    max-width: 600px;
  }
`;
