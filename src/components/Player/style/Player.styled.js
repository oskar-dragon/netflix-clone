import styled from "styled-components";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0 0.5);
  margin: 0 1.25em;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.a`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 25px;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  padding: 0.8em 1.5em;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 1.125rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;
