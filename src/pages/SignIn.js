import React, { useState, useEffect } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import { SIGN_UP } from "../constants/routes";

export default function SignIn() {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    emailAddress: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (userData.emailAddress !== "" && userData.password !== "")
      setIsInvalid(false);
  }, [userData.emailAddress, userData.password]);

  function handleSignIn(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(userData);
    setUserData(prevUserData => ({ ...prevUserData, [name]: value }));
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Title>Sign In</Form.Title>
            <Form.Input
              type="email"
              name="emailAddress"
              placeholder="Email address"
              value={userData.emailAddress}
              onChange={handleChange}
            />
            <Form.Input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to={SIGN_UP}>Sign up now</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
