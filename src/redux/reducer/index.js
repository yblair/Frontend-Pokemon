const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    allTypes: [],
    details: [],
    allDetails: []

}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload, 
                allPokemons: action.payload
            }
        case 'GET_TYPES':
            return{
                ...state,
                types: action.payload,
                allTypes: action.payload
            }
         case 'FILTER_BY_NAME':
            const allPokemons = state.allPokemons
            const ordenAlfabetico = action.payload === 'asc' ?
            allPokemons.sort(function( a , b ) {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1 
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1
                }
                return 0
            }) : allPokemons.sort(function( a , b ) {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()){
                    return 1
                }
                return 0
            })
            return{
                ...state,
                pokemons: ordenAlfabetico
            }

         case 'FILTER_STRENGTH':
                 const allPokemonsStrength = state.allPokemons
                const strength = action.payload === 'min' ? 
                allPokemonsStrength.sort(function(a,b){
                    if(a.attack > b.attack){
                        return 1
                    }
                    if(b.attack > a.attack){
                        return -1
                    }
                    return 0
                }) : allPokemonsStrength.sort(function(a,b){
                    if(a.attack > b.attack){
                        return -1
                    }
                    if(b.attack > a.attack){
                        return 1
                    }
                    return 0
                })
                return{
                    ...state,
                    pokemons: strength
                }

        case 'FILTER_SOURCE':          
            const allPokemonsSource = state.allPokemons            
            const filterSour = action.payload === 'created' ? allPokemonsSource.filter(e => e.id.length > 5) : allPokemonsSource.filter(e => !e.id.length )
            return{
                ...state,
                pokemons: action.payload === 'all' ? state.allPokemons : filterSour
            }

        case 'FILTER_TYPE':
            const allPokemonsType = state.allPokemons
            const allPokemonsType2 = state.allPokemons
            const findByType = allPokemonsType.filter((p)=>p.types.includes(action.payload))
            const findByType2 = allPokemonsType2.filter((p) => p.types.map(e => e.name).includes(action.payload))
            const total = findByType.concat(findByType2)

                return{
                    ...state,
                    pokemons: action.payload === 'all' ? state.allPokemons : total
                }

        case 'SEARCH_NAME':
            return{
                ...state,
                pokemons: action.payload
            }

        case 'POST_POKEMONS':
            return{
                ...state
            }

        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload
            }

            default : 
            return state
    }

}

export default rootReducer






