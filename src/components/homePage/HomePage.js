import React from 'react'
import PropTypes from 'prop-types'

import HomePageHeader from "./HomePageHeader";
import HomePageBody from './HomePageBody'
export default function HomePage(pageData) {
  return (
    <div className={`page-container ${pageData.pageType}`} data-page-type ={pageData.pageType}>
        
        <div className="page-body">
             <HomePageBody/>
        </div>
        <div className="page-footer">
                
        </div>
        <div className="page-v-container p-absolute"> </div>
        <div className="page-h-container p-absolute"> </div>
        <div className="page-large-circle p-absolute"> </div>
        <div className="page-large-circle-ring p-absolute"> </div>
        <div className="page-small-circle p-absolute"> </div>
        <div className="page-small-circle-ring p-absolute"> </div>
        
    </div>
  )
}
HomePage.propTypes = {
  pageType: PropTypes.string
};
