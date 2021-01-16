import React from 'react';
import mongo from '../assets/img/tech-icons/mongoDB.png';
import express from '../assets/img/tech-icons/expressjs.png';
import reactIcon from '../assets/img/tech-icons/react.png';
import nodeIcon from '../assets/img/tech-icons/nodejs.png';

export default function Skills(){
    return(
        <section className='packages'>
            <h3 className="title">Technologies I have worked with</h3>
            {/* <p>Here are the technologies I have worked with</p> */}
            <hr></hr>
            <ul className="grid">
                <li>
                    {/* <i class="fab fa-node-js fa-4x"></i> */}
                    <img className='img-fluid' src={mongo} alt='MongoDb'></img>
                    <h4>Mongo DB</h4>
                    {/* <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p> */}
                </li>
                <li>
                    {/* <i class="fab fa-react fa-4x"></i> */}
                    <img className='img-fluid' src={express} alt='Express.js'></img>
                    <h4>Express.js</h4>
                    {/* <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our mountain buses.</p> */}
                </li>
                <li>
                    {/* <i class="fa fa-bicycle fa-4x"></i> */}
                    <img className='img-fluid' src={reactIcon} alt='React'></img>
                    <h4>React</h4>
                    {/* <p>If bicycles are more your speed, consider taking a tour through one of our mountain bike paths. We'll provide the bikes, and lunch too!</p> */}
                </li>
                <li>
                    {/* <i class="fa fa-flag-checkered fa-4x"></i> */}
                    <img className='img-fluid' src={nodeIcon} alt='Nodejs'></img>
                    <h4>node</h4>
                    {/* <p>Got a competitive spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p> */}
                </li>                            
            </ul>
        </section>      
    )
}