import { useState } from 'react'
import './App.css'
import { NavBar } from './assets/Components/navbar'
import { Footer } from './assets/Components/footer'

function App() {
  

  return (
    <>
      <div className='container-fluid'>
        <NavBar />
        <Footer />
      </div>
      <p className="attribute">Facebook Icon by FreePik</p>
      <p className="attribute">Instagram Icon by Grow Studio</p>
    </>
  )
}

export default App
