import React from 'react'
import dog1 from '../images/IMG_9083 (2).PNG'
import dog2 from '../images/IMG_9089 (2).PNG'

const About = () => {
    return (
        <div className='aboutSection'>
            <h2 className='aboutTitle'>About Me</h2>

            <div className='mainAbout'>
                <div className='leftSideAbout'>
                    <p className='about'>Hey! I'm Kennedy. I'm a current nursing student and aspiring artist. I have been creating art ever since I was young, and I've been fortunate enough to be able to turn this talent into a small business for myself. After losing my own dog, I began to draw him often. After years of drawing my own dog, I realized that I could use this skill to create portraits for others. Each portrait is drawn with care, as my goal is to be able to capture the likeness and personality of your pet on paper, keeping their memory alive for years to come.</p>
                </div>

                <div className='rightSideAbout'>
                    <img className='aboutIMG' src={dog2}  alt="Black dog drawing with big eyes" />
                    <img className='aboutIMG' src={dog1}  alt="Small dog drawing" />
                </div>
            </div>
        </div>
    )
}

export default About