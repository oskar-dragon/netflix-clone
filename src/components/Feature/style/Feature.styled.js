import styled from "styled-components";

export const Container = styled.section`
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 85%;
  max-width: 700px;
  padding: 13em 0;
  text-align: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 500;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 1.5em;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
