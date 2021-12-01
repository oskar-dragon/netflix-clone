import React from "react";
import {
  Spinner,
  Lockbody,
  ReleaseBody,
  Picture,
} from "./style/Loading.styled";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <Lockbody />
      <Picture src={src} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
