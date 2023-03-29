import React from 'react'
import dog1 from '../images/Black Pitbull.PNG'
import dog2 from '../images/Shepard.PNG'
import dog3 from '../images/Pitbull.JPG'
import dog4 from '../images/SmallDog.JPG'
import dog5 from '../images/IMG_9099.JPG'
import dog6 from '../images/IMG_9100.JPG'
import dog7 from '../images/longHairedDog.PNG'
import dog9 from '../images/GoldenRetriever.PNG'
import cat1 from '../images/Cat.PNG'


const Gallery = () => {
    return (
        <div>
            <h2 className='galleryTitle' >Gallery</h2>

            <div>
                <div className='row'>
                    <div className='content'>
                        <img className='galleryIMG' src={dog2}  alt="Black pitbull drawing" />
                    </div>

                    <div className='content'>
                        <img className='galleryIMG' src={dog1}  alt="German Shepard drawing" />
                    </div>

                    <div className='content'>
                        <img className='galleryIMG' src={dog3}  alt="Small Dog drawing" />
                    </div>
                </div>

                <div className='row'>
                    <div className='content'>
                        <img className='galleryIMG' src={dog4}  alt="Black pitbull drawing" />
                    </div>

                    <div className='content'>
                        <img className='galleryIMG' src={cat1}  alt="German Shepard drawing" />
                    </div>

                    <div className='content'>
                        <img className='galleryIMG' src={dog9}  alt="Small Dog drawing" />
                    </div>
                </div>

                <div className='row'>
                    <div className='content'>
                        <img className='galleryIMG' src={dog7}  alt="Black pitbull drawing" />
                    </div>

                    <div className='content'>
                        <img className='galleryIMG' src={dog6}  alt="German Shepard drawing" />
                    </div>

                    <div className='content'>
                        <img className='galleryIMG' src={dog5}  alt="Small Dog drawing" />
                    </div>
                </div>
            </div>

            
                
            
        </div>
    )
}

export default Gallery