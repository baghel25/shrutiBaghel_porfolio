import React from 'react'

import shrutifavIcon from "../../images/shrutiLogo.png";
export default function WorkPageBody() {
  return (
    <div className="p-body-container">
        <div className="first-col icon-info" >
        <img src={shrutifavIcon}></img>

        </div>
        <div className="second-col second-col shadow p-3 mb-5 rounded shadow p-3 mb-5 rounded info-card">
                
        <div className="text-wrapper m-l-20">
                <div className="m-title">Software Engineer</div>
                <div className="s-description">
            Deltecs Infotech pvt ltd September 2020 - Present

            Created procedures for system monitoring, recovery, backup and optimization.
            Worked with software development and testing team members to design and develop robust solutions to meet.
            Checked client code for bugs and weaknesses using approved troubleshooting methods.</div>
            </div>
              
        </div>
        {/* <div className="third-col">
            <div className="td-row-first">
                    <div className="text-wrapper">
                        <div className="m-title">&lt;Coder&gt;</div>
                        <div className="s-description">Front-End Developer focuses on writing elegant and efferent code.</div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/Ellipse-pc.svg"}/>
            </div>
            <div className="text-wrapper" >
                <div className="m-title">Designer</div>
                <div className="s-description">UI/UX Designer Designed and implemented functional digital experiences.</div>
            </div>
        </div> */}
   </div>
  )
}
