import React from "react";
import { Contact } from "../components/Contact";
import GoToTop from "../components/Utils/GoToTop";

export const ContactPage: React.FC = () => {
  document.title = "MidstreamAI | Contact us";

  return (
    <>
      <Contact /> <GoToTop />
    </>
  );
};
