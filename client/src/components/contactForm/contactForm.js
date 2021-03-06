import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function ContactForm() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xo7dqsn",
        "template_12028rt",
        e.target,
        "user_h2B4Q5dBdcSMEw95x0ZBL",
        this
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form
      className="contact-form"
      enctype="multipart/form-data"
      method="post"
      onSubmit={sendEmail}
    >
      <input type="hidden" name="contact_number" />
      <label>First Name</label>
      <input type="text" name="firstName" />
      <label>Last Name</label>
      <input type="text" name="lastName" />
      <br></br>
      <br></br>
      <label>Email</label>
      <input type="email" name="email" />
      <br></br>
      <br></br>
      <label>Phone Number</label>
      <input type="text" placeholder="(xxx)xxx-xxxx" name="phoneNumber" />
      <br></br>
      <br></br>
      <label>Any questions?</label>
      <br></br>
      <textarea name="message" />
      <br></br>
      <br></br>
      <label>Start Date</label>
      <input type="date" name="startDate"></input>
      <br></br>
      <label>Return Date</label>
      <input type="date" name="returnDate"></input>
      <br></br>
      <input
        type="submit"
        value="Send"
        onSubmit={sendEmail}
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1>
          {" "}
          your form has been submitted! Please be patient while we get back to
          you as soon as possible.
        </h1>
        <button onClick={closeModal}> close </button>
      </Modal>
    </form>
  );
}

export default ContactForm;
