import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'


const EmailListForm = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        if (data.result !== 'error') {
          alert(data.msg);
        }
        if (data.result === 'error') {
          alert(data.msg);
        }
      })
      .catch((error) => {
        
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className="EmailListForm">
      <h2>Subscribe to my email list!</h2>
      <div className="Wrapper">
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailListForm;