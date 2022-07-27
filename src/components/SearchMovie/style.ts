import styled from 'styled-components';

export const ContainerSearch = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  margin-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
`;

export const FormInput = styled.input`
  border-radius: var(--border-radius-global);
  border: none;
  color: var(--color-neutral-900);
  height: 2rem;
  max-width: 100%;
  padding: 0.8rem;
  width: 20rem;
`;

export const Button = styled.button`
  background-color: var(--color-blue-500);
  border-radius: var(--border-radius-global);
  border: none;
  cursor: pointer;
  height: 2rem;
  transition: 200ms ease-in-out;
  width: 3rem;

  &:hover {
    background-color: var(--color-blue-600);
  }
`;
