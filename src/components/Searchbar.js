import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchName } from '../redux/actions';
import '../styles/Searchbar.css';

export default function SearchBar({page}){

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    
    function handleInput(e){
        e.preventDefault();
        setName(e.target.value)
        page(1)
    }
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchName(name))
        setName('')
       

    }

    return(
        <div className='search_bar'>
            <input type= 'text' placeholder='Search' onChange={(e) => handleInput(e)}
            />
            <button className='btn_search' type= 'submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}