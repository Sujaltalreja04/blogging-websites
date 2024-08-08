import React from "react";
import "./footer.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className="box">
        <div className="container flex">
          <p>© Joshua Entrata</p>
          <div className="social">
            <div className="socialbtns">
              <a href="" className="socialbtn github">
                <BsGithub />
              </a>
              <a href="" className="socialbtn linkedin">
                <BsLinkedin />
              </a>
              <a href="" className="socialbtn facebook">
                <BsFacebook />
              </a>
              <a href="" className="socialbtn instagram">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
