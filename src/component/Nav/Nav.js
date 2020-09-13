import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2000px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img className="nav__avatar" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Netflix Logo" />
        </div>
    )
}

export default Nav
