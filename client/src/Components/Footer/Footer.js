import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Personally Newsletter</h1>
            <p className='newsletter'>
                A bi-weekly newsletter of design inspiration, resources and
                anything related to career development.
            </p>
            <div className='email-button'>
                <input type="text" placeholder='Email address' />
                <button>Subscribe</button>
            </div>

            <p className='copyright'>Copyright 2021 - Elikem Daniels</p>
        </div>
    )
}

export default Footer