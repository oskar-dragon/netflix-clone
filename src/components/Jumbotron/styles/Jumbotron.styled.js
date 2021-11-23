import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction}; // Props
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  background: black;

  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 3.125rem; // 50px
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem; // 50px
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1.38rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.625rem; // 26px
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.125rem; // 18px
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
