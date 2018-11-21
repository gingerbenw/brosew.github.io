import React from 'react';
import styled from 'styled-components';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      loading: false,
      success: false,
      error: null,
    };
  }

	// form handlers
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
		this.setState({ loading: true });
		
    // submit netlify form
    // TODO: Swap this out for a decent email service
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => this.setState({ success: true, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  };

  render() {
    const { name, email, message, success, error, loading } = this.state;

    return (
      <ContactWrapper id="contact" className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 conForm">
              <h5>Get in touch</h5>
              <p>
                We are more than happy to talk you through any potential
                projects or answer any questions.
              </p>
              <div id="message" />
              <form onSubmit={this.handleSubmit}>
                <input
                  name="name"
                  type="text"
                  className="col-12"
                  value={name}
                  placeholder="Your name..."
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className="col-12 noMarr"
                  placeholder="Email Address..."
                  onChange={this.handleChange}
                />
                <textarea
                  name="message"
                  id="message"
                  cols=""
                  rows=""
                  value={message}
                  className="col-12"
                  placeholder="Project Details..."
                  onChange={this.handleChange}
                />
                <SubmitButton
                  type="submit"
                  className="submitBnt"
                  success={success}
                  loading={loading}
                >
                  {loading
                    ? 'Sending...'
                    : success
                    ? 'Success'
                    : 'Send message'}
                </SubmitButton>
                {error && <div id="simple-msg">Error</div>}
              </form>
            </div>
          </div>
        </div>
      </ContactWrapper>
    );
  }
}

export default Contact;

const SubmitButton = styled.button`
  transition: background-color 0.3s ease;
  background-color: #3bc492;
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
    background-color: #3d3d3d;
    color: #fff;
  }

  /* do not allow multiple submissions */
  pointer-events: ${(props) =>
    props.success || props.loading ? 'none' : 'default'};
`;

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
