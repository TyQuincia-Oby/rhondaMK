import { ShoppingCart, Rose, Handbag, List, UserRoundPlus } from 'lucide-react';

export function NavBar(){
    return (
        <>
            <p>Hello from NavBar</p>
            <menu type="toolbar" className='nav'>
                <li>
                    <button className='nav-text'><Rose /> About Me</button>
                </li>
                <li>
                    <button className='nav-text'><Handbag /> Products</button>
                </li>
                <li>
                    <button className='nav-text'><ShoppingCart /> Cart</button>
                </li>
                <li>
                    <button className='nav-text'><List /> Wish List</button>
                </li>
                <li>
                    <button className='nav-text'><UserRoundPlus /> New Account</button>
                </li>
            </menu>
        </>
        )
}