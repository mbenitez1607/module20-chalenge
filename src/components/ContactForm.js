import React, { useState } from 'react';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      name: name,
      email: email,
      msg: msg,
    });

    setInput('');
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          name="name"
          className="name-input"
          onChange={handleName}
        ></input>
        <input
          type="text"
          placeholder="Enter your email address"
          value={email}
          name="email"
          className="email-input"
          onChange={handleEmail}
        ></input>
        <input
          type="text"
          placeholder="Enter your message"
          value={msg}
          name="msg"
          className="msg-input"
          onChange={handleMsg}
        ></input>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;