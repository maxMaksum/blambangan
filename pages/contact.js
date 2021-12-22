import React, { useContext } from "react";
import ContactForm from "../components/card/ContactForm";
import Header from "../components/header/Header";
import { UserContext } from "../components/card/Layout";

function Contact() {
  const { smallMenu, setSmallMenu } = useContext(UserContext);

  return (
    <div>
      <main onClick= {() => setSmallMenu(false)}>
        {/* <Header /> */}
        <ContactForm />
      </main>
    </div>
  );
}

export default Contact;
