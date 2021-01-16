import React from 'react';
import background from '../assets/img/placeholder.jpg'
// import '../assets/stylesheets/banner.css';

export default function Banner(){
    const mainHeading='UNLIMITED CODE WORKS';
    return(
        <section className="hero">
            <div className="background-image" style={{backgroundImage:`url(${background})`}}></div>
                <div className="hero-content-area">
                <h1> {mainHeading} </h1>
                {/* <h3>I am the source of my code</h3> */}
                {/* <!-- <a href="#" class="btn">Contact Us Now</a> --> */}
            </div>
            <div id='about' className='hero-content-area'>
                    <h3>Hi, my name is Kartikeya, I'm a fullstack web developer. Welcome to my website.</h3>
            </div>
        </section>
    )
}