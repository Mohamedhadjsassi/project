import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import FoodContext from './context/FoodContext';
import Authcontext from './context/Authcontext';
import OrderContext from './context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <OrderContext>
      <FoodContext> {/*this used so to wrap the App and we use routes and goes from pages to pages in App */}
       <Authcontext>

         <App />
         </Authcontext>
      </FoodContext>
      </OrderContext>
   </BrowserRouter>
);
reportWebVitals();
