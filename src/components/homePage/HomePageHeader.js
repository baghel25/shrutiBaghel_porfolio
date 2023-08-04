import React from 'react'

export default function HomePageHeader() {
  return (
    <>
        <div className="page-h-container">
            <div className="header-title">Home</div>
            <div className="header-title">Work</div>
            <div className="header-title">About</div>
            <div className="header-title">Contact</div>
        </div>     
        <div className="page-h-container-icon">
            <div className="header-title"><i className="fa fa-home" aria-hidden="true"></i></div>
            <div className="header-title"><i className="fa fa-briefcase" aria-hidden="true"></i></div>
            <div className="header-title"><i className="fa fa-user" aria-hidden="true"></i></div>
            <div className="header-title"><i className="fa fa-address-book" aria-hidden="true"></i></div>
        </div> 
    </>
  )
}
