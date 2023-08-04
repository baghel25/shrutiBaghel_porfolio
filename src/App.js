// import logo from './logo.svg';
// import women_destop from './womenWithDesktop.png'
import './App.css';
import './Portfolio.css';
import WorkPage from './components/WorkPage/WorkPage';
import AboutPage from './components/AboutPage/AboutPage'
import HomePage from './components/homePage/HomePage'

function App() {
  return (
    <div className="App">
      <HomePage pageType="home"></HomePage>
      {/* <WorkPage pageType="work"></WorkPage> */}
      {/* <AboutPage pageType="about"></AboutPage> */}
    </div>
  );
}

export default App;
