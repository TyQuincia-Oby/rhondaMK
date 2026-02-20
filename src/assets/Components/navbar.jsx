import { useState } from 'react';
import { ShoppingCart, Rose, Handbag, List, UserRoundPlus } from 'lucide-react';
import { AboutMe } from '../Pages/AboutMe';
import { Products } from '../Pages/Products';
import { NewAccount} from '../Pages/newaccount'
import { Home } from '../Pages/home';
import { WishList } from './wishlist';
import { Cart } from '../Pages/cart'



export function NavBar(){
    const [page, setPage] = useState('home')

    function goToHome() {
        console.log("Going to Home Page")
        setPage('home')
    }

    function goToAboutMe() {
        console.log("Going to About Me")
        setPage('aboutMe')
    }

    function goToCart() {
        console.log("Going to Cart")
        setPage('cart')
    }

    function goToWishList() {
        console.log("Going to Wish List")
        setPage('wishlist')
    }

    function goToNewAccount() {
        console.log("Going to New Account")
        setPage('newAccount')
    }

    function goToProducts() {
        console.log("Going to Products")
        setPage('products')
    }

    let pageContent = <Home />
    
    if (page === 'home' ) {
        pageContent = <Home />
    } else if (page === 'aboutMe') {
        pageContent = <AboutMe />
    } else if (page === 'cart') {
        pageContent = <Cart />
    } else if (page === 'products') {
        pageContent = <Products />
    } else if (page === 'newAccount') {
        pageContent = <NewAccount />
    } else if (page === 'wishlist') {
        pageContent = <WishList />
    }

    return (
        <>
            <menu type="toolbar" className='nav'>
                <li>
                    <button className='nav-text' onClick={goToHome}>Home</button>
                </li>
                <li>
                    <button className='nav-text' onClick={goToAboutMe}><Rose /> About Me</button>
                </li>
                <li>
                    <button className='nav-text' onClick={goToProducts}><Handbag /> Products</button>
                </li>
                <li>
                    <button className='nav-text' onClick={goToCart}><ShoppingCart /> Cart</button>
                </li>
                <li>
                    <button className='nav-text' onClick={goToWishList}><List /> Wish List</button>
                </li>
                <li>
                    <button className='nav-text' onClick={goToNewAccount}><UserRoundPlus /> New Account</button>
                </li>
            </menu>
            {pageContent}
        </>
        )
}