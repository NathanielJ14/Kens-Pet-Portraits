import React from 'react'


const Contact = () => {
    return (
        <div>
            <h2 className='contactTitle'>Contact</h2>

            <div>
                <p className='signup' >Send me an email if you are interested or have any questions.</p>

                <form className='emailSignup'>
                    <label for="name" className='label' >Your Name</label>
                    <input type="text" for="name" className='input'/>
                    <label for="email" className='label' >Your Email</label>
                    <input type="email" for="email" className='input' />
                    <label for="message" className='label' >Message</label>
                    <textarea className='message' rows="6" cols="10" name='message'></textarea>
                    <button className='emailButton' >Send Email</button>
                </form>

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