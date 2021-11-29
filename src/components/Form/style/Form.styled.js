import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  margin-bottom: 12em;
`;

export const Error = styled.div`
  background: #e87c03;
  color: #fff;
  text-align: center;
  font-weight: 500;
  padding: 0.8em;
  border-radius: 5px;
  margin-bottom: 1em;
`;

export const Base = styled.form`
  margin: 0 auto;
  width: 95%;
  max-width: 450px;

  background: rgba(0, 0, 0, 0.75);
  padding: 4em;
  display: flex;
  flex-direction: column;

  font-size: 1rem;

  input + input {
    margin-top: 1em;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: 700;
  margin: 0 0 0.8em;
`;

export const Input = styled.input`
  background: #333;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  padding: 1em;
  color: #fff;
`;

export const Submit = styled.button`
  margin: 2.2em 0 0;
  padding: 1em;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #e50914;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background: #f40612;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
`;

export const TextSmall = styled.p`
  font-size: 0.8rem;
`;

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
