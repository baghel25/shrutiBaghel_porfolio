import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageHeader() {
  return (
    <>
        <div className="page-h-container">
            <Link to={'/home'} className="header-title">Home</Link>
            <Link to ={'/work'} className="header-title">Work</Link>
            <Link to ={'/about'} className="header-title">About</Link>
            <Link to ={'/contact'} className="header-title">Contact</Link>
        </div>     
        <div className="page-h-container-icon">
            <Link to ={'/home'} className="header-title"><i className="fa fa-home" aria-hidden="true"></i></Link>
            <Link to ={'/work'} className="header-title"><i className="fa fa-briefcase" aria-hidden="true"></i></Link>
            <Link to ={'/about'} className="header-title"><i className="fa fa-user" aria-hidden="true"></i></Link>
            <Link to ={'/contact'} className="header-title"><i className="fa fa-address-book" aria-hidden="true"></i></Link>
        </div> 
    </>
  )
}
