
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import User from './Pages/User';
import Admin from './Pages/Admin';
import OneFood from './Food/OneFood';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProtectedRoute2 from '../src/Main/ProtectedRoute2';
import Orderinglist from './Pages/Orderinglist';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Card from './Pages/Card';
function App() {
  const [mode , setMode]=useState(true);   /* this state for changing the colors (white for home and black for others) */
  return (
    <div className="App" mode={mode.toString()}>  {/* to string to update the CSS */}
      <Navbar setMode={setMode} mode={mode} /> {/* the same navbar in all pages just the colors change from home */}
      <ToastContainer/>
        <div className="main-content" style={{paddingBottom:"500px"}}>
          <Routes>
             <Route path='/register' element={<Register setMode={setMode}/>}/>
             <Route path='/login' element={<Login setMode={setMode}/>}/>
             <Route  path='/Home' element={<Home setMode={setMode} mode={mode}/>}  />{/* to go to Home page */}
             <Route  path='/Menu' element={<Menu setMode={setMode} mode={mode}/>} /> {/* to go to Menu page */}
             <Route element={<ProtectedRoute2/>}>
             <Route path='/Menu/:id' element={<OneFood/>} />
             
             <Route  path='/User' element={<User setMode={setMode} mode={mode}/>} /> {/* to go to User page */}
           
            
             </Route>
             <Route  path='/Orderinglist' element={<Orderinglist  setMode={setMode}/>} /> {/* it must be inside the protect route */}
             <Route  path='/Admin' element={  <Admin setMode={setMode}/>} /> {/* to go to Admin page */}
             <Route  path='/card' element={  <Card setMode={setMode}/>} /> {/* to go to Admin page */}

          </Routes>
        </div>
      <Footer mode={mode} />
    

    </div> 
  );
}
export default App;
