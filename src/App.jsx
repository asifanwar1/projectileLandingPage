import React, { useState } from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import './App.css'
import Home from './pages/Home'

function App() {


  return (
    <>
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
