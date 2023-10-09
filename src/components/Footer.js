import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to enter a new Era?</h3>
            <h3>Shop with us today</h3>
          </div>

          <div>
            <Button className="btn hireme-btn">
              <NavLink to="/" style={{ color: "black" }}>
                {" "}
                Get Started{" "}
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className="footer-heading">Ssyclr Clothing</h3>
            <p>
              Step into the realm of refined elegance. Elevate your style with
              timeless minimalism.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3 className="footer-heading">
              Subscribe to get important updates
            </h3>
            <form action="https://formspree.io/f/xaygjldr" method="POST">
              <input type="email" name="email" placeholder="E-mail" />

              <input
                type="submit"
                value="subscribe"
                style={{ backgroundColor: "yellow", color: "black" }}
              />
            </form>
          </div>
          <div className="footer-social">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://discord.com/users/600365423476867073"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/minimal_stores/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@SSENSE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3 className="footer-heading">Call Us</h3>
            <a href="tel:8090284072">
              <h3>+91 8090284072</h3>
            </a>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr color="black" />
          <div className="container grid grid-two-column ">
            <p className="footer-heading">
              @{new Date().getFullYear()} Ssyclr. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #161821;
    background-image: radial-gradient(
        at 47% 33%,
        hsl(150, 0%, 0%) 0,
        transparent 59%
      ),
      radial-gradient(at 82% 65%, hsl(240, 0%, 0%) 0, transparent 55%);
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 2rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 2.5rem 0;
    background-color: ${({ theme }) => theme.colors.pink};
    border-top: 1px solid rgba(255, 255, 255, 0.125);
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.pureBlack};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.pureBlack};
        background-color: black;

        .icons {
          color: ${({ theme }) => theme.colors.yellow};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-contact {
    a > h3 {
      color: ${({ theme }) => theme.colors.pureBlack};
    }
  }
  .footer-heading {
    font-weight: bold;
    color: white;
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default Footer;
