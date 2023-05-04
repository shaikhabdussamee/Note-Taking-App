import React from "react";
import "./RightSection.css";
import Front from "../../assets/Front.png";
import lock from "../../assets/lock.png";

function RightSection() {
  return (
    <div className="bg-custom">
      <div className="front-img">
        <img className="mt-img-custom mt-5" src={Front} alt="img" />

        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <div className="d-flex  justify-content-center custom-img encry pt-2 ms-3">
          <img src={lock} alt="" />
          <p>end-to-end encrypted</p>
         </div>
      </div>
    </div>

    //Onclick handler

  );
}

export default RightSection;
