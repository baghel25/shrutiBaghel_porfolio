// import logo from './logo.svg';
// import women_destop from './womenWithDesktop.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Portfolio.css';
import './Style/StandardClass.css';
import './Style/animation.css';

import "bootstrap/dist/css/bootstrap.min.css";

import WorkPage from './components/WorkPage/WorkPage';
import AboutPage from './components/AboutPage/AboutPage'
import HomePage from './components/homePage/HomePage'
import HomePageHeader from "./components/homePage/HomePageHeader";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="page-header">
        <HomePageHeader></HomePageHeader>
    </div>
    <Routes> 
          <Route path='/' element={<HomePage pageType="home"/>} />
          <Route path='/home' element={<HomePage pageType="home"/>} />
          <Route path='/about' element={<AboutPage pageType="about"/>} />
          <Route path='/work' element={<WorkPage pageType="work"/>} />
          <Route path='/project' element={<Projects pageType="project"/>} />
          {/* <Route path='/home' element={<HomePage/>} /> */}
    </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
