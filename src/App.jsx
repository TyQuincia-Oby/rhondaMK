import { useState } from 'react'
import './App.css'
import { NavBar } from './assets/Components/navbar'
import { Footer } from './assets/Components/footer'
import { Cart } from './assets/Pages/cart'

function App() {
  

  return (
    <>
      <div className='container-fluid'>
        <NavBar />
        <Cart />
        <Footer />
      </div>
      <p className="attribute">Facebook Icon by FreePik</p>
      <p className="attribute">Instagram Icon by Grow Studio</p>
    </>
  )
}

export default App
