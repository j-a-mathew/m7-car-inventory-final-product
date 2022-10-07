// installed @mui/x-data-grid; react-router-dom; @types/react-router-dom; react-hook-form; @mui/material @emotion/react @emotion/styled

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { Home, About, Contact, Dashboard } from './components';

let myTitle = "Car Inventory Dashboard"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" 
                    element={<Home title={myTitle}/>}>  
                </Route>
                <Route path='/dashboard' 
                    element={<Dashboard></Dashboard>}>
                </Route>
                <Route path='/about' 
                    element={<About></About>}>
                </Route>
                <Route path='/contact' 
                    element={<Contact></Contact>}>
                </Route>
            </Routes>
            
        </Router>
    </React.StrictMode>
);

