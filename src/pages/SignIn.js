import React, { useState, useEffect, useContext } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import * as ROUTES from "../constants/routes";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function SignIn() {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    if (userData.email !== "" && userData.password !== "") {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }, [userData.email, userData.password]);

  function handleSignIn(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    signIn(userData.email, userData.password)
      .then(() => {
        navigate(state?.path || ROUTES.BROWSE);
      })
      .catch(error => {
        setUserData({ email: "", password: "" });
        setError("Failed to log in");
      });

    setLoading(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData(prevUserData => ({ ...prevUserData, [name]: value }));
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              type="email"
              name="email"
              placeholder="Email address"
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
            <Form.Submit disabled={isInvalid || loading}>Sign In</Form.Submit>

            <Form.Text>
              New to Netflix?
              <Form.Link to={ROUTES.SIGN_UP}> Sign up now</Form.Link>
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
