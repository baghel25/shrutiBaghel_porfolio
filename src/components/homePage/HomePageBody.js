import React from "react";
import MovingLineDot from "../CommonComponents/MovingLineDot";
import logoImage from "../../images/shrutiLogoFavcon.png"
import Type from "./Type"
export default function HomePageBody() {
  return (
    <div className="p-body-container"> 
      <div className="into-title-wrapper">
        <Type text ={["Hello 👋🏻, \nI'm Shruti a Senior SoftWare Engineer"]}></Type>
      </div>

      <div className="laptop-container">
        <div className="laptop-screen-outer">
          <div className="laptop-screen-inner">
            <MovingLineDot></MovingLineDot>
          </div>
        </div>
        <div className="laptop-keyboard">
          <div className="laptop-keyboard-btn"></div>
        </div>
      </div>

      <div className="tablet-container">
        <div className="tablet-screen-outer">
          <div className="tablet-screen-camera"> </div>
          <div className="tablet-screen-inner">
            <div className="laptop-screen-text">
              <img src={logoImage}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
