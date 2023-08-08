import React from 'react'

export default function WorkPageStudy() {
  return (
      <div className="p-body-container educational">
        <div className="first-col justifiy-start">
          <div className="text-wrapper width-auto">
              <div className="m-title">Education:-</div>
              <div className="s-description white-spc-pre-line">
                  <div className="m-title  title-white m-t-20" >Bansal Institute Of Science &amp; Technology</div>
                        Bachelore Of Engineering - 8.5 CGPA
                        (Computer Science)
                        (2016-2020)
                  <div className="m-title  title-white m-t-20">ACC Higher Secondary School </div>
                        12th - 83%
                        (2015-2016)
                  <div className="m-title  title-white m-t-20">ACC Higher Secondary School  </div>
                        10th - 86%
                        (2013-2014)
              </div>
          </div>
        </div>
        <div className="second-col justifiy-end"></div>
        <div className="third-col">
            <div className="td-row-first">
            <img className = "education-img"src={process.env.PUBLIC_URL + "/education-step.png"} /></div>
        </div>
      </div>
  )
}
