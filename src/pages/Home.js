import React from "react";
import { JumbotronContainer } from "../containers/Jumbotron";
import { FooterContainer } from "../containers/Footer";
import { FAQsContainer } from "../containers/FAQs";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
        <FAQsContainer />
      <FooterContainer />
    </>
  );
}
