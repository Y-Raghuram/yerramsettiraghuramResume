import React, { useEffect, useState } from 'react'
import './Homepage.css'
const Fader = () => {
    const [show, setShow] = useState(true)
    
    const controlNavbar = () => {
        if (window.scrollY > 100) {

            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])




    return (
        <div>
            
           
        <div className={`nav1 ${show || 'aaa'}`}>
           
        Hi! I am Raghuram
        
        </div>

        
        </div>
    )
}

export default Fader