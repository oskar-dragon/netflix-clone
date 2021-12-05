import React, { useState, createContext } from "react";

const FeatureContext = createContext();

function FeatureProvider({ children }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  function openFeature(item) {
    setItemFeature(item);
    setShowFeature(true);
  }

  function closeFeature() {
    setShowFeature(false);
  }

  return (
    <FeatureContext.Provider
      value={{ openFeature, closeFeature, showFeature, itemFeature }}
    >
      {children}
    </FeatureContext.Provider>
  );
}

export { FeatureProvider, FeatureContext };
