import { useEffect } from 'react';
import './Navbar.css'

import { NavLink } from 'react-router-dom';

function Navbar() {


    useEffect(()=>{
        const handleScroll = ()=>{
            const navbar = document.querySelector('nav');
            if(window.scrollY > 1){
                navbar.classList.add('tsgheer')
            }
            else{
                navbar.classList.remove('tsgheer')
            }

           
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])








    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-header text-uppercase" href="#">Start Framework</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <NavLink to="about" className="nav-link" aria-current="page">ABOUT</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="portfolio" className="nav-link ">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink to="contact" className="nav-link ">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;