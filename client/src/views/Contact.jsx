import React from 'react'
import { ContactUs } from '../components/ContactForm'


const Contact = () => {
    return (
        <div>
            <h2 className='contactTitle'>Contact</h2>

            <div>
                <p className='signup' >Send me an email if you are interested or have any questions.</p>

                <ContactUs/>

                <p className='signup'>Or you can contact me on any of the following.</p>
                <div className='socials'>
                    <a className='links' href='https://www.instagram.com/kennpearl.art/' >Instagram</a>
                    <a className='links' href='https://www.etsy.com/shop/PencilPawsPortraits?ref=l2-about-shopname' >Etsy</a>
                    <a className='links' href='https://www.mercari.com/u/517693251/?sv=0' >Mercari</a>
                </div>
            </div>
        </div>
    )
}

export default Contact