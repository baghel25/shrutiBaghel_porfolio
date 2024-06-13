import React from "react";
import about  from "../../Assets/about.png"

export default function WorkPageProject() {
  return (
    <div className="p-body-container project">
      <div className="first-col justifiy-center shadow p-3 mb-5 rounded info-card">
        <div className="td-row-first">
          {/* <img src={process.env.PUBLIC_URL + "/Ellipse-study.svg"} /> */}
          <div className="text-wrapper">
          <div className="m-title">Designer</div>
          <div className="s-description">
            UI/UX Designer Designed and implemented functional digital
            experiences.
          </div>
        </div>
        </div>
      </div>
      <div className="second-col justifiy-end">
        {/* <div className="td-row-first">
          <img src={process.env.PUBLIC_URL + "/Ellipse-pc.svg"} />
        </div> */}
        <img src={about} />
        
        {/* <div className="text-wrapper">
            <div className="m-title">Projects:-</div>
            <div className="s-description">
                <div className="m-title  title-white m-t-10">Portfolio:-</div>
                The entire portfolio was designed using Figma.While using React, I implemented the portfolio and deployed it to a GitHub account that is live hosted.<div className="m-title  title-white m-t-20">Medi-Geine:-</div>
                A web application for purchasing medicines.
                <div className="m-title  title-white m-t-20">Student Inquiry:-</div>
                This web application provides all the information of any educational institute to students&nbsp; and fulfill there inquiries.
            </div>
        </div> */}
      </div>
    </div>
  );
}
