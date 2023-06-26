import React, { useState } from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Element className="contact">
      <div className="contact-container">
        <h1 className="con-head">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="con-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact_icons">
        <a href="https://github.com/Rajeswari92">
          <IconButton className="icon">
            <GitHub />
          </IconButton>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100035613662469&mibextid=ZbWKwL">
          <IconButton className="icon">
            <Facebook />
          </IconButton>
        </a>
        <a href="https://instagram.com/raji_vishnu_?igshid=MzNlNGNkZWQ4Mg==">
          <IconButton className="icon">
            <Instagram />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/rajeswari-narayanan-496760197/">
          <IconButton className="icon">
            <LinkedIn />
          </IconButton>
        </a>
      </div>
    </Element>
  );
};

export default Contact;
