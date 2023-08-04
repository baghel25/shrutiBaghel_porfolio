import React from 'react'
import HomePageHeader from '../homePage/HomePageHeader'
import WorkPageBody from './WorkPageBody'
import WorkPageStudy from './WorkPageStudy'
import WorkPageProject from './WorkPageProject'
export default function WorkPage(pageData) {
  return (
    <div className='work-container'>
      <div className="page-header">
          <HomePageHeader></HomePageHeader>
      </div>
      <div className='wrapper'>
      <svg  className ="background-stroke" width="550" height="1500" viewBox="0 0 617 2256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_123_45)">
        <path d="M254.533 1C275.277 67.2902 295.779 109.263 315.31 133.475M315.31 133.475C373.371 205.454 422.843 120.464 444.541 50.7631C385.216 15.9095 337.94 82.182 315.31 133.475ZM315.31 133.475C312.091 140.77 309.371 147.762 307.186 154.117C252.701 277.377 361.556 467.05 422.793 546.48M422.793 546.48L436.529 594.329M422.793 546.48L388.454 646.006M436.529 594.329L464 623.039L388.454 646.006M436.529 594.329L388.454 646.006M388.454 646.006C372.038 652.508 356.369 655.749 341.525 656.4M341.525 656.4C261.975 659.885 206.112 588.955 185.855 546.48C300.318 523.512 337.328 610.19 341.525 656.4ZM341.525 656.4C322.295 793.546 251.099 844.421 217.904 852.714C128.165 866.495 107.257 927.359 108.02 956.069V1053.68C108.02 1085.84 117.94 1092.6 122.9 1091.96H185.855C206.916 1086.6 207.221 1064.21 204.741 1053.68V956.069C198.331 931.57 186.046 931.825 180.704 935.015H177.27L147.123 984.778M147.123 984.778L132.629 1008.7M147.123 984.778L159.528 1002.96L171.547 984.778L165.251 977.122H185.855V1002.96L178.987 998.176L159.528 1024.97L147.123 1008.7L136.063 1024.97L129.768 1046.02M129.768 1046.02V1062.29H185.855V1046.02H129.768ZM129.768 1046.02C124.274 974.06 133.965 945.861 139.497 940.757C211.38 902.478 242.705 920.979 249.382 935.015C255.987 954.136 260.747 971.382 264.066 986.804M264.066 986.804C276.165 1043.01 269.132 1075 262.545 1085.26C252.731 1046.97 256.298 1012.9 264.066 986.804ZM264.066 986.804C270.433 965.415 279.622 949.378 286.582 940.757M285 941.729C403.543 853.716 501.975 867.337 536.374 885.149C563.671 924.587 543.184 972.43 530.015 1016.96M530.015 1016.96C505.398 1100.19 451.992 1179.16 401.426 1221.48C426.828 1053 490.472 1015.91 530.015 1016.96ZM530.015 1016.96C604.458 1072.28 586.024 1230.7 567.502 1303M296.847 1656.41L351.233 1599.61L327.397 1620.01C322.558 1616.66 323.603 1612.26 324.73 1610.48L351.09 1584.74C443.013 1575.36 500.188 1677.46 517.285 1729.68C517.334 1730.77 517.373 1731.84 517.404 1732.89M517.404 1732.89C520.135 1827.05 451.832 1776.61 416.952 1739.14C440.309 1675.7 481.911 1695.19 517.404 1732.89ZM517.404 1732.89C535.804 1752.44 552.563 1776.88 564.285 1797.19C448.071 1922.33 208.459 1836.72 103.18 1778.27L13.0635 1779.13C5.57631 1786 5.496 1795.49 6.39174 1799.37L7.33245 1897.05C10.2425 1914.02 17.2502 1916.78 20.3903 1916.04L88.1921 1915.39C97.8045 1915.3 98.961 1904.67 98.3377 1899.36L98.0719 1871.76L53.4428 1872.19L84.9731 1848.52L19.7461 1849.15L84.8197 1832.6L19.5927 1833.22L84.6562 1815.61L19.4291 1816.24L84.5437 1803.93L18.4379 1802.44L94.7302 1792.15L95.3846 1860.1L97.9594 1860.08C370.026 1946.65 539.187 2072.8 589.759 2125.05M589.759 2125.05L506.856 2072.76L424.975 2126.64L507.95 2186.37L589.759 2125.05ZM589.759 2125.05L590.342 2185.57M551.721 2185.94L551.997 2214.61L508.513 2244.76L463.597 2215.46L463.321 2186.8M567.2 1303L550.653 1324.61C517.171 1307.32 504.258 1326.27 501.987 1337.91L465.973 1354.53L524.373 1421.01L536.053 1387.77C567.979 1423.67 583.098 1424.89 586.667 1421.01H608.08V1452.59H586.667L580.827 1439.3C535.926 1482.92 532.202 1500.59 535.986 1504.06M535.986 1504.06C536.008 1504.08 536.031 1504.1 536.053 1504.12M535.986 1504.06C534.018 1502.55 517.294 1506.11 465 1532.38V1549H611V1532.38C610.351 1529.05 594.453 1518.75 536.053 1504.12M535.986 1504.06C536.011 1504.08 536.033 1504.1 536.053 1504.12M496.01 1410.91C470.097 1434.18 464.557 1407.33 465.027 1391M465.386 1389.87C378.649 1436.43 359.008 1549.77 360.029 1600.62L360.689 1604.7C369.53 1602.78 365.459 1613.71 362.319 1619.41C358.37 1630.3 353.761 1635.13 351.951 1636.18L302.982 1682.59L286.375 1685.55C284.661 1680.82 286.318 1677.83 287.36 1676.92L297.069 1656.06" stroke="white" strokeWidth="2" shapeRendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_d_123_45" x="0.00588989" y="0.402588" width="616.994" height="2254.77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_123_45"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_123_45" result="shape"/>
        </filter>
        </defs>
      </svg>
        <div className={`page-container ${pageData.pageType}`} data-page-type ={pageData.pageType}>
            <div className="page-body">
              <WorkPageBody></WorkPageBody>
            </div>
            <div className="page-footer">
                    
          </div>
          
          {/* <div className="page-v-container p-absolute"> </div> */}
          <div className="page-h-container p-absolute"> </div>
            {/* <div className="page-large-circle p-absolute"> </div>
            <div className="page-large-circle-ring p-absolute"> </div>
            <div className="page-small-circle p-absolute"> </div>
            <div className="page-small-circle-ring p-absolute"> </div> */}
            
        </div>
        <div className={`page-container ${pageData.pageType}`} data-page-type ={pageData.pageType}>
            <div className="page-body">
              <WorkPageProject></WorkPageProject>
            </div>
            {/* <div className="page-v-container p-absolute"> </div> */}
            <div className="page-h-container p-absolute"> </div>
            
        </div>
        <div className={`page-container ${pageData.pageType}`} data-page-type ={pageData.pageType}>
            <div className="page-body">
              <WorkPageStudy></WorkPageStudy>             
          </div>
            {/* <div className="page-v-container p-absolute"> </div> */}
            <div className="page-h-container p-absolute"> </div>
            
        </div>
      </div>
      
      <div className="page-v-container p-absolute"> </div>
      {/* <div className="page-h-container p-absolute"> </div> */}
    </div>
  )
}
