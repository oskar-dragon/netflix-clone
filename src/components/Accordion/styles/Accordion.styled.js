import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4.375em 2.8125em;
  flex-direction: column;
  max-width: 815px;
  margin: 0 auto;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 0.625rem;

  &:first-of-type {
    margin-top: 1em;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.625rem;
  margin-top: 0;
  margin-bottom: 0.0384em;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Body = styled.p`
  max-width: 1000px;
  font-size: 1.5rem;
  background: #303030;
  padding: 0.8em 1.2em;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.375em;
  }
`;
