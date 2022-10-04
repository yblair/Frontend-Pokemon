import axios from 'axios';

export function getPokemons(){
    return async function(dispatch){
        let json = await axios('https://pokebackendbelen.herokuapp.com/pokemons');
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
}

export function getTypes(){
    return async function(dispatch){
        let jsonTypes = await axios('https://pokebackendbelen.herokuapp.com/types');
        return dispatch({
            type: 'GET_TYPES',
            payload: jsonTypes.data
        })
    }
}

export function postPokemon(payload){
    return async function(){
        let post = await axios.post('https://pokebackendbelen.herokuapp.com/pokemons', payload)
        return post
    } 
}

export function searchName(name){
    
        return async function(dispatch){
            let jsonName = await axios(`https://pokebackendbelen.herokuapp.com/pokemons?name=${name}`)
            return dispatch({
                type: 'SEARCH_NAME',
                payload: jsonName.data
            })
        }
    

}

export function getDetails(id){
    return async function(dispatch){
        let jsonId = await axios(`https://pokebackendbelen.herokuapp.com/pokemons/${id}`)
        return dispatch({
            type: 'GET_DETAILS',
            payload: jsonId.data
        })
    }
}

export function filterByName(payload){
    return{
        type: 'FILTER_BY_NAME',
        payload
    }
}

export function filterStrength(payload){
    return{
        type: 'FILTER_STRENGTH',
        payload
    }
}

export function filterSource(payload){
    return{
        type: 'FILTER_SOURCE',
        payload
    }
}

export function filterType(payload){
    return{
        type: 'FILTER_TYPE',
        payload
    }

}

    export function cleanDetails(){
        return({
            type: "CLEAN_DETAILS",
            
        }) }

