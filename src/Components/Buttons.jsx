import React from 'react';

export default function Buttons(props){
    const {url,more}=props;
    if(url===''){
        return(
            <div className='buttons'>
                <a href={more} className="btn btn-warning">Read More</a>
            </div>
        )
    }
    else if(more===''){
        return(
            <div className='buttons'>
                <a href={url} className="btn btn-primary">Demo</a>
            </div>
        )
    }
    else{
        return(
            <div className='buttons'>
                <a href={url} className="btn btn-primary">Demo</a>
                <a href={more} className="btn btn-info">Read More</a>
            </div>
        )
    }
}