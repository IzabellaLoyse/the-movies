import styled from 'styled-components';
import { IStyleProps } from '../../interfaces/styleProps';

export const CardContainer = styled.article`
  background-color: var(--color-black-900);
  border-radius: var(--border-radius-global);
  display: flex;
  flex-direction: column;
  height: 28rem;
  width: 18.75rem;
`;

export const CardImage = styled.div`
  align-items: center;
  border-top-left-radius: var(--border-radius-global);
  border-top-right-radius: var(--border-radius-global);
  display: flex;
  flex: 5;
  justify-content: center;
  overflow: hidden;

  img {
    max-height: 110%;
    width: 20rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  padding: 1rem;

  a {
    align-items: center;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid var(--color-blue-500);
    color: var(--color-sky-50);
    display: inline-flex;
    font-size: 1.1rem;
    font-weight: 700;
    height: 2rem;
    justify-content: center;
    margin-top: 1rem;
    max-width: 100%;
    transition: 200ms ease-in-out;

    &:hover {
      background-color: var(--color-blue-600);
      color: var(--color-sky-50);
    }
  }
`;

export const CardTitle = styled.h3<IStyleProps>`
  font-size: ${(props) => (props.isBigTitle ? '1.5rem' : '1.2rem')};
  font-weight: 700;
  padding-bottom: 0.5rem;
  text-align: ${(props) => props.isBigTitle && 'center'};
`;

export const CardPopularity = styled.span`
  padding-bottom: 0.5rem;
  color: var(--color-blue-500);
  font-weight: 500;

  strong {
    color: var(--color-sky-50);
  }
`;

export const CardStar = styled.p<IStyleProps>`
  align-items: flex-start;
  display: inline-flex;
  gap: 0.2rem;
  justify-content: ${(props) => props.hasAlignment && 'center'};
`;
