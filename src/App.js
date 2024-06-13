// import logo from './logo.svg';
// import women_destop from './womenWithDesktop.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import './App.css';
import './Portfolio.css';
import './Style/StandardClass.css';
import './Style/animation.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import WorkPage from './components/WorkPage/WorkPage';
import AboutPage from './components/AboutPage/AboutPage'
import HomePage from './components/homePage/HomePage'
import HomePageHeader from "./components/homePage/HomePageHeader";
import Projects from "./components/Projects/Projects";
function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#030518",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  if (init) {
    return (
      <BrowserRouter>
        <div className="App">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          />
          <div class="alert alert-info aler-msg-play pt-4" role="alert">
            ✨ Click anywhere multiple times and move the cursor to play on screen! ✨🎮
            <button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
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


// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// // import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// const App = () => {
//   const [init, setInit] = useState(false);

//   // this should be run only once per application lifetime
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//       // starting from v2 you can add only the features you need reducing the bundle size
//       //await loadAll(engine);
//       //await loadFull(engine);
//       await loadSlim(engine);
//       //await loadBasic(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "#0d47a1",
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff",
//         },
//         links: {
//           color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: false,
//           speed: 6,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 80,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [],
//   );

//   if (init) {
//     return (
//       <Particles
//         id="tsparticles"
//         particlesLoaded={particlesLoaded}
//         options={options}
//       />
//     );
//   }

//   return <></>;
// };
