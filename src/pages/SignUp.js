import React, { useState, useEffect } from "react";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import { Form } from "../components";
import { SIGN_IN } from "../constants/routes";

export default function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(true);
  const [error, setError] = useState(null);

  function handleSignUp(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData(prevData => ({ ...prevData, [name]: value }));
  }

  //TODO: use useEffect to listen to input values to change isInvalid state

  useEffect(() => {
    if (
      userData.email !== "" &&
      userData.password !== "" &&
      userData.firstName !== ""
    ) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }, [userData.firstName, userData.email, userData.password]);

  return (
    <>
      <HeaderContainer>
        <Form>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Title>Sign Up</Form.Title>
            <Form.Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={userData.firstName}
              onChange={handleChange}
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userData.email}
              onChange={handleChange}
            />
            <Form.Input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />

            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to={SIGN_IN}>Sign in</Form.Link>.
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
