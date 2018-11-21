import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <ContactWrapper id="contact" className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 conForm">
          <h5>Get in touch</h5>
          <p>
            We are more than happy to talk you through any potential projects or
            answer any questions.
          </p>
          <div id="message" />
          <form method="post" name="contact" netlify>
            <input
              name="name"
              id="name"
              type="text"
              className="col-12"
              placeholder="Your name..."
            />
            <input
              type="email"
              id="email"
              name="email"
              className="col-12 noMarr"
              placeholder="Email Address..."
            />
            <textarea
              name="q5_typeA"
              id="message"
              cols=""
              rows=""
              className="col-12"
              placeholder="Project Details..."
            />
            <input
              type="submit"
              id="submit"
              name="send"
              className="submitBnt"
              value="Send your query"
            />
            <div id="simple-msg" />
          </form>
        </div>
      </div>
    </div>
  </ContactWrapper>
);

export default Contact;

const ContactWrapper = styled.section`
  .conForm {
    text-align: center;

    h5 {
      font-size: 30px;
    }

    p {
      text-align: center;
      margin: 7%;
    }

    input {
      color: #797979;
      padding: 15px 30px;
      border: none;
      margin-right: 3%;
      margin-bottom: 30px;
      outline: none;
      font-style: normal;
      border-bottom: #e0e0e0 1px solid;
      font-size: 15px;

      &.noMarr {
        margin-right: 0px;
      }
    }

    textarea {
      color: #797979;
      padding: 15px 30px;
      margin-bottom: 18px;
      outline: none;
      height: 150px;
      font-style: normal;
      resize: none;
      font-size: 15px;
      border: none;
      border-bottom: #e0e0e0 1px solid;
    }

    .submitBnt {
      background: #3bc492;
      color: #fff;
      margin-top: 30px;
      padding: 15px 30px 15px 30px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 5px;
      border: 0;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      display: inline-block;
      text-transform: uppercase;

      &:hover {
        background: #3d3d3d;
        color: #fff;
      }
    }
  }

  #success_page {
    color: #00bdbd;
    font-weight: 500;

    h3 {
      font-size: 17px;
      color: #5ed07b;
      font-weight: 700;
    }
  }

  .error_message {
    color: #ff675f;
    padding-bottom: 15px;
    font-weight: 500;
  }
`;
