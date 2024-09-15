import Banner from "@/components/ContactUs/Banner/Banner";
import ContactForm from "@/components/ContactUs/ContactForm";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <Banner />
      <ContactForm />
    </main>
  );
};

export default page;
