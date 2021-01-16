import React from 'react';
import '../assets/stylesheets/card.css'
import Buttons from './Buttons'

export default function Project(props){
    const {title,text,url,thumbnail,more}=props;
    return(
        <div className="card" style={{backgroundImage:`url(${thumbnail})`}}>
            <img src={thumbnail} className="card-img" alt="..."></img>
            <div className="card-img-overlay d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
                <Buttons url={url} more={more} />
            </div>
        </div>
    )
}