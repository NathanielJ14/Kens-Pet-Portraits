import React from 'react'


const Contact = () => {
    return (
        <div>
            <h2 className='contactTitle'>Contact</h2>

            <div>
                <p className='signup' >Sign up for updates on deals and more.</p>
                <form className='emailSignup'>
                    <input type="email" for="email" className='emailInput' placeholder='Your Email' />
                    <button className='emailButton' >Sign Up</button>
                </form>
                <p className='signup'>Send me a message on any of the following if interested in a portrait.</p>
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