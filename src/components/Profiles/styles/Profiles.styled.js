import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  max-width: 95%;
  margin: 8em auto;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const List = styled.ul`
  margin: 4em 0;

  display: flex;
  justify-content: center;
  gap: 5em;

  @media (max-width: 640px) {
    gap: 2em;
    justify-content: center;
  }
`;

export const User = styled.li`
  cursor: pointer;

  &:hover,
  &:focus {
    font-weight: 700;
    color: #fff;
  }
`;

export const Picture = styled.img`
  width: 150px;
  height: auto;

  &:hover,
  &:focus {
    border: 2px solid #fff;
  }

  @media (max-width: 640px) {
    width: 100px;
  }
`;

export const Name = styled.p`
  text-align: center;
`;
