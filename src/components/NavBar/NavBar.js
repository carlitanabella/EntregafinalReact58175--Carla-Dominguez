import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logotipo/Logo"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography'; 

import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navBar' >
            <h1 className='logo' >
                <Link to='/'>
                <Logo />
                </Link>
            </h1>
           
            <ul className='ulNavBar' >
            <Breadcrumbs separator="/"  maxItems={2} aria-label="breadcrumb">
                <NavLink  to={'./category/muebles'} underline="hover" className="textNavBar" >Muebles</NavLink>
                <NavLink to={`./category/blanco`} underline="hover" className="textNavBar">Linea Blanco</NavLink>
                <NavLink to={`./category/alfombras`} underline="hover" className="textNavBar">Alfombras</NavLink>
                <NavLink to={`./category/almohadones`}  underline="hover" className="textNavBar">Almohadones</NavLink>
            </Breadcrumbs>

            
            </ul>
            <h1 className='Carrito' >
            <Link to={`./cart`}>
                <CartWidget />
            </Link>
            </h1>
            
            
        </nav>
    )
}

export default NavBar;