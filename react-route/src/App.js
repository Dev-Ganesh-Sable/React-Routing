import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeCom from './Components/HomeCom';
import AboutCom from './Components/AboutCom';
import ContactCom from './Components/ContactCom';
import PageNotFount from './Components/PageNotFount';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeCom />}></Route>
          <Route path='/about' element={<AboutCom />}></Route>
          <Route path='/contact' element={<ContactCom />}></Route>
          <Route path='*' element={<PageNotFount />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
