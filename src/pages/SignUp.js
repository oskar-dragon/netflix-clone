import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import { Form } from "../components";
import { AuthContext } from "../context/AuthContext";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signUp } = useContext(AuthContext);

  function handleSignUp(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    signUp(userData.email, userData.password)
      .then(res => {
        res.user
          .updateProfile({
            displayName: userData.firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setUserData({ firstName: "", email: "", password: "" });
            navigate(ROUTES.SIGN_IN);
          });
      })
      .catch(error => {
        setError("Failed to create an account");
      });

    setLoading(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData(prevData => ({ ...prevData, [name]: value }));
  }

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
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

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

            <Form.Submit disabled={isInvalid ? true : loading ? true : false}>
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in</Form.Link>
              .
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
