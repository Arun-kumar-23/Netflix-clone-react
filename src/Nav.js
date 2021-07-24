import React,{useState, useEffect} from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState('')

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{
            window.removeEventListener("scroll")
        }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/0/08/20160220053054%21Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
              <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
            
        </div>
    )
}

export default Nav