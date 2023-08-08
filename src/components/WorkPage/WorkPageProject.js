import React from 'react'

export default function WorkPageProject() {
  return (
    <div className="p-body-container project"><div className="first-col justifiy-center">
        
    <div className="td-row-first">
        <img src={process.env.PUBLIC_URL + "/Ellipse-study.svg"} />
    </div>
</div><div className="second-col justifiy-end"></div>
<div className="third-col" >
    <div className="text-wrapper">
            <div className="m-title">Projects:-</div>
            <div className="s-description">
                <div className="m-title  title-white m-t-10">Portfolio:-</div>
                The entire portfolio was designed using Figma.While using React, I implemented the portfolio and deployed it to a GitHub account that is live hosted.<div className="m-title  title-white m-t-20">Medi-Geine:-</div>
                A web application for purchasing medicines.
                <div className="m-title  title-white m-t-20">Student Inquiry:-</div>
                This web application provides all the information of any educational institute to students&nbsp; and fulfill there inquiries.
            </div>
        </div>
  </div>
</div>
  )
}
