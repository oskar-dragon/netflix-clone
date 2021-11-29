import React from "react";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";

export function SelectProfileContainer({ user, setProfile }) {
  //TODO: Look for the best method to pass props
  function handleClick() {
    setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  }
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix Logo"
          />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>

        <Profiles.List>
          <Profiles.User onClick={handleClick}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
          <Profiles.User onClick={handleClick}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
          <Profiles.User onClick={handleClick}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
