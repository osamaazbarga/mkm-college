import React from 'react'
import './App.css';
import { Route } from 'react-router';

import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar'
import { BrowserRouter , Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import BusCourse from './components/Pages/busCourse/busCourse';
import TruckCourse from './components/Pages/trucksCoruse/truckCourse';
import SendMsg from './components/SendMsg/SendMsg';
import AboutUs from './components/AboutUs/AboutUs';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/buscourse' element={<BusCourse/>} />
              <Route exact path='/truckcourse' element={<TruckCourse/>} />
              <Route exact path='/sendmsg' element={<SendMsg/>} />
              <Route exact path='/aboutus' element={<AboutUs/>} />
          </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and aaaaaaaasave to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
