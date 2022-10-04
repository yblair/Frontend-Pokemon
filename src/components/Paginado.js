import React from 'react';
import '../styles/Paginado.css'


export default function Paginado({pokemonPerPage, allPokemons, paginado}){
    const pageNumbers = []
    for(let i=1; i<= Math.ceil(allPokemons/pokemonPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav >
            <ul className='paginado'>
                {pageNumbers && pageNumbers.map(number => (
                    <li className='li' key={number}>
                    <button  className='but' onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}