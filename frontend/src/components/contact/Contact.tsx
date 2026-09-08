import React from "react";

export default function Contact() {
  return (
    <form action="">
      <input type="text" placeholder="Name" id="name" name="name" />
      <input type="email" placeholder="Email" id="email" name="email" />
      <textarea placeholder="Message" id="message" name="message" />
      <button type="submit">Submit</button>
    </form>
  );
}
