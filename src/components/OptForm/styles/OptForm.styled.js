import styled from "styled-components";

export const Container = styled.div`
  margin: 1.25em auto 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 1.5em 0.5em;
`;

export const Button = styled.button`
  padding: 1em 1.5em;
  background: #e50914;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 690px) {
    font-size: 1rem;
    margin-top: 1.25em;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;
