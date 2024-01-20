import React from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home  from './Pages/Home'
import ExcerciseDetails  from './Pages/ExcerciseDetails'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'

import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExcerciseDetails />}/>
        </Routes>
        <Footer />
    </Box>
  )
}

export default App