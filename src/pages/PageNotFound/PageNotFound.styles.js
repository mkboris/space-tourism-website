import styled from "styled-components";

export const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--clr-cinder);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Box = styled.div`
  background-color: hsl(227 31.82% 9.07%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 3rem;

  & h1 {
    text-align: center;
  }
`;

export const Button = styled.button`
  font-family: var(--ff-bellfair);
  font-weight: var(--fw-400);
  font-size: var(--fs-sm-mob);
  text-align: center;
  text-transform: uppercase;
  color: var(--clr-white);
  border: 2px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  border-radius: 1rem;
  padding: 0.5em 1em;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border: 2px solid var(--clr-white);
  }
`;
