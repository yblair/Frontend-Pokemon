import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, cleanDetails } from '../redux/actions';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../styles/Detail.css';


export default function Detail() {
    const dispatch = useDispatch();
    const params = useParams();


    useEffect(() => {
        dispatch(getDetails(params.id))
    }, [params.id, dispatch]);  
    
    const pokemon = useSelector((state) => state.details)

    useEffect(() => {
        return function (){
          dispatch(cleanDetails())
        }
      },[dispatch])

    return (
        <div className='div-details-container'>
            {
                pokemon.length > 0 ?
                <div className='details_container'>                   
                    <div className='left_details'>
                        <h1 className='name1'> {pokemon[0].name.toUpperCase()}</h1>
                        <img src={pokemon[0].image} alt="pokemon" width='380px' height='450px' />
                    </div>
                        <div className="right_details">
                        <h4>TYPES: {pokemon[0].types[0].name ?  pokemon[0].types.map(e => e.name + ' ') : pokemon[0].types.map(t => t + ' ')}</h4> 
                        <h4>HP: {pokemon[0].hp}</h4>
                        <h4>ATTACK: {pokemon[0].attack}</h4>
                        <h4>DEFENSE: {pokemon[0].defense}</h4>
                        <h4>SPEED: {pokemon[0].speed}</h4>
                        <h4>HEIGHT: {pokemon[0].height}</h4>
                        <h4>WEIGHT: {pokemon[0].weight}</h4>
                        <h3 className='id1'>ID <br /> {pokemon[0].id}</h3>
                    </div>
                    <div className="btn">
                        <Link to = '/home'>
                            <button className='btn_home'>Close</button>    
                        </Link>
                    </div>
                </div>
                :
                <div className="loading_container">
                        <h1 className="loading_title">Loading...</h1>
                        
                </div>
            }
            
        </div>
    )

}