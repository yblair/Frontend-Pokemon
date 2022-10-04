import {React} from 'react';
import {Link} from 'react-router-dom';
import  '../styles/LandingPage.css';


export default function LandingPage(){

    return(
        <div className='container'>
            <Link to='/home'>
            <button className='boton'>Gotta catch'em all!</button>
            </Link>
        </div>

    )
}

