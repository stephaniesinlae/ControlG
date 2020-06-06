import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="fondo colocar">
                <div className="footer margenA">
                    <p style={{ color: "white" }}>Made with <span role='img' aria-label='emoji'>♥</span> by
                    <a href="https://github.com/stephaniesinlae" target="_blank" without rel="noopener noreferrer" style={{ color: "white" }}> Ing. Stephanie Sandoval  </a>
                    </p>
                </div>
                <p className="copyright margenA" style={{ color: "white" }}>. © 2020</p>
            </div>
        </div>
    )
}

export default Footer
