import styled from "styled-components";

export const Title = styled.h2`
  font-size: 1.6rem;
  color: #e5e5e5;
  font-weight: 700;
  margin-top: 0;
  margin-left: 2.333em;
  margin-right: 2.333em;

  @media (max-width: 1000px) {
    margin-left: 1.5em;
    font-size: 1.3rem;
  }

  @media (max-width: 720px) {
    margin-left: 1.8em;
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  @media (max-width: 1000px) {
    margin-bottom: 1.5em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

export const SubTitle = styled.h3`
  font-size: 0.75rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  font-size: 0.625rem;
  margin-top: 0.5em;
  margin-bottom: 0;
  color: #fff;
  user-select: none;
  display: none;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4em;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 1em;
  background-color: #0000008f;
`;

export const Image = styled.img`
  border: none;
  width: 100%;
  height: auto;
  max-width: 305px;
  cursor: pointer;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 0.2;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 3.5em;

    @media (max-width: 1000px) {
      margin-left: 1.875em;
    }
  }

  &:last-of-type {
    margin-right: 3.5em;

    @media (max-width: 1000px) {
      margin-right: 1.875em;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 1.125rem;
  color: #fff;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #000;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
  }

  ${Title} {
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin-bottom: 0.5em;

    @media (max-width: 1000px) {
      font-size: 1.1rem;
    }
  }

  ${FeatureText} {
    font-size: 0.8rem;
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.p`
  margin: 3.5em;
  max-width: 500px;

  @media (max-width: 1000px) {
    margin: 1.875em;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  font-size: 0.75rem;
  text-align: center;
  font-weight: 700;
  color: #fff;
  border-radius: 15px;
  padding: 0.4166em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 0.8333em;
`;
