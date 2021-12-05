import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `/images/misc/${src}.jpg` : "/images/misc/home-bg.jpg"})
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

export const Group = styled.div`
  display: flex;
  align-items: center;
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
  margin-right: 2.5em;

  @media (max-width: 1000px) {
    width: 100px;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1.375rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Feature = styled.div`
  width: 95%;
  max-width: 650px;
  padding: 11em 0 20em 3.5em;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  margin: 0;
  font-size: 3.125rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  padding: 0.5em 2.2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background: #ff1e1e;
    color: #fff;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background: #44444459;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 1px;
  transition: width 500ms ease-in-out;
  height: 30px;
  font-size: 0.9rem;
  padding-left: 0.5em;
  margin-left: ${({ active }) => (active === true ? "0.7142em" : "0")};
  padding: ${({ active }) => (active === true ? "0 0.7142em" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0")};

  &::placeholder {
    color: #b4b4b4;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 150px;
  top: 32px;
  right: 0px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;
