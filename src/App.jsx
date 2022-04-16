import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import About from './pages/About';
import Galery from './pages/Galery';


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/" element={<Galery />} />
            </Routes>
        </div>

    )
}

export default App