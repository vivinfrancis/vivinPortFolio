import React from 'react'
import './Intro.scss'


const Intro = () => {
    return (
        <div className="intro">
            <img style={{height:"100%", borderRadius:"20%"}} src="assets/vivin.jpg" alt="placeholder"/>
            <div className="intro__info">
                <div className="name">Alankara Vivin F</div> 
                <div className="aka">Software Developer</div>
                <div className="nickname">Kapiital Kapslock</div>
            </div>   
        </div>
    )
}

export default Intro
