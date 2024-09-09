import React from "react"
import styled from "styled-components";
import Button from "../styles/Button"
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()

  return (
    <Wrapper>
      <h2 className="common-heading">CONTACT PAGE</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974471.4646561412!2d77.16712627812502!3d17.434369300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972fe66d4711%3A0x7f2d27691ca15313!2sInorbit%20Mall%20Cyberabad!5e0!3m2!1sen!2sin!4v1693990742029!5m2!1sen!2sin"
        width="70%"
        height="450"
        title="InorbitMall"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xjvqrpvn" method="POST" className="contact-inputs">
            <input
            type="text"
            placeholder="username"
            name="username"
            value={isAuthenticated ? user.name : name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            />
            <input
            type="email"
            placeholder="Email"
            name="Email"
            value={isAuthenticated ? user.email : email}
            onChange={(e) => setEmail(e.target.value)} 
            autoComplete="off"
            required
            />
            <textarea name="textarea" id="" cols="30" rows="10" placeholder="Enter your Message"></textarea>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.pureBlack};

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 11px solid ${({ theme }) => theme.colors.yellow};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
