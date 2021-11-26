import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none`}
  }
`;

export const Frame = styled.div`
  display: flex;
  margin: 2em 3.5em;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 2em 1.875em;
  }
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1.875em;
  font-weight: ${({ active }) => (active === "true" ? 700 : "normal")};
  cursor: pointer;

  &:hover,
  &:focus {
    font-weight: 700;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  padding: 0.5333em 1.1333em;
  background: #e50914;
  color: white;
  font-size: 0.9375rem;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 120px;

  @media (max-width: 1000px) {
    width: 100px;
  }
`;
