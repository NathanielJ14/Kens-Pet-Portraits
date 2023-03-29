import React from 'react'
import cat from '../images/Cat.PNG'
import dog1 from '../images/Black Pitbull.PNG'
import dog2 from '../images/SmallDog.JPG'

const Home = () => {
    return (
        <div className='top' id='home'>
            <h2 className='homeTitle' >Keeping the memory of your pet alive for years to come.</h2>
            <div className='homeDiv' >
                <img className='homeIMG' src={cat} alt="A cat drawing" />
                <img className='homeIMG' src={dog1} alt="A black dog drawing" />
                <img className='homeIMG' src={dog2} alt="A cat drawing" />
            </div>
        </div>
    )
}

export default Home