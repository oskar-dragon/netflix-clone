import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import { ToggleContextProvider } from "../context/useToggle";

export function FAQsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(item => (
        <ToggleContextProvider>
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        </ToggleContextProvider>
      ))}
    </Accordion>
  );
}
