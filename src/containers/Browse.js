import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/AuthContext";
import { SelectProfileContainer } from "./Profiles";
import { FooterContainer } from "./Footer";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const user = {
    displayName: "Oskar",
    photoURL: "images/users/2.png",
  };

  return profile.displayName ? (
    <>
      <p>Browse</p>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
