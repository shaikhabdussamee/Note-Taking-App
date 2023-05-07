import React from "react";
import "./Content.css";
import submit from "../../assets/submit.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function Content() {
  return (
    <>
      <div className="content-header"></div>
      <div className="content-main">dd</div>
      <div className="content-input">
        <input type="text" placeholder="Enter your text here..........." />
        <img src={submit} alt="send" />
      </div>
    </>
  );
}

export default Content;
