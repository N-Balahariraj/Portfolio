import Section from "../components/common/Section";
import Address from "../components/contact/Address";
import ContactForm from "../components/contact/ContactForm";
import StayUpToDate from "../components/contact/StayUpToDate";

export default function Contact() {
  return (
    <main id="contact">
      <Section
        title="Stay up to date"
        desc="It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable"
      >
        <StayUpToDate/>
      </Section>
      <Section 
        title="Contact"
        desc="It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable"
      >
        <ContactForm/>
        <Address/>
      </Section>
    </main>
  );
}
