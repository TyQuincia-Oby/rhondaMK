import { useState } from 'react'
import './App.css'
import { NavBar } from './assets/Components/navbar'
import { Footer } from './assets/Components/footer'
import { Cart } from './assets/Pages/cart'
import { Home } from './assets/Pages/home'
import { AboutMe } from './assets/Pages/AboutMe'
import { WishList } from './assets/Components/wishlist'
import { Products } from './assets/Pages/Products'

function App() {
  

  return (
    <>
      <div className='container-fluid'>
        <NavBar />
        {/* <Home /> */}
        {/* <AboutMe />
        <Cart />
        <WishList />
        <Products /> */}
        <Footer />
      </div>
      <p className="attribute">Facebook Icon by FreePik</p>
      <p className="attribute">Instagram Icon by Grow Studio</p>
    </>
  )
}

export default App
