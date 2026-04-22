import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomeCom from './Components/HomeCom';
// import AboutCom from './Components/AboutCom';
// import ContactCom from './Components/ContactCom';
// import PageNotFount from './Components/PageNotFount';

// nested route code
import Navbar from './Nested-Route/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Nested-Route/Home';
import About from './Nested-Route/About';
import Contact from './Nested-Route/Contact';
import AboutMe from './Nested-Route/AboutMe';
import TechSkill from './Nested-Route/TechSkill';
import Project from './Nested-Route/Project';

function App() {
  return (
    <div className="App">

      {/* simple routing */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeCom />}></Route>
          <Route path='/about' element={<AboutCom />}></Route>
          <Route path='/contact' element={<ContactCom />}></Route>
          <Route path='*' element={<PageNotFount />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* ------------------------------------------------------------------------------------------------------- */}

      {/* Nested Routing */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}>

            {/* nested route */}

            <Route index path='' element={<AboutMe />}></Route>

              {/* reletive path */}
            <Route path='/about/tech-skill' element={<TechSkill />}></Route>
            
            <Route path='/about/project' element={<Project />}></Route>

          </Route>
          <Route path='/contact' element={<Contact />}></Route>


        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
