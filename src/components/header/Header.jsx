import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { User } from "./User";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <header className="header">
        <div className="headerFlex">
          <h1 class="logo">ReactBlog</h1>
          <div className="account">
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
