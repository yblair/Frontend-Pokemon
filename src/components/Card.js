import React from 'react';
import  '../styles/Card.css'

export default function Card({name, image, types}){
    return(
        <div className='card'>
            <h2 className='title_name'>{name}</h2>
            <h3 className='title_name'>{types}</h3>
            <div className='card_content'>
                <img src={image} className='card_image' alt='carg-imagen'/>
            </div>
        </div>
    )
}