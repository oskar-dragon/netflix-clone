import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 4.375em 3.5em;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 4.375em 2em;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  font-size: 0.8125rem;
  margin-bottom: 1.538em;
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 2.5em;
`;

export const Text = styled.p`
  font-size: 0.8125rem;
  color: #757575;
  margin-bottom: 3.0769em;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
