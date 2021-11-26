import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import { Background, Frame, Logo, ButtonLink } from "./styles/Header.styled";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}> {children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to} {...restProps}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
