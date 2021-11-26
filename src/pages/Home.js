import React from "react";
import { OptForm } from "../components";
import { JumbotronContainer } from "../containers/Jumbotron";
import { FooterContainer } from "../containers/Footer";
import { FAQsContainer } from "../containers/FAQs";
import { HeaderContainer } from "../containers/Header";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
