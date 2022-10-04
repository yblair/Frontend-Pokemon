import React from 'react';
import { useState, useEffect } from 'react';
import{ useDispatch, useSelector} from 'react-redux';
import { filterByName, filterSource, filterStrength, filterType, getPokemons, getTypes } from '../redux/actions';
import { Link } from 'react-router-dom';
import  Card  from './Card';
import Paginado from './Paginado';
import SearchBar from './Searchbar';
import '../styles/Home.css'
import b from '../assets/img/b.png'

export default function Home(){

    const dispatch = useDispatch(); 
    const allPokemons = useSelector((state) => state.pokemons); 
    const allTypes = useSelector((state) => state.types);


    //PAGINACION
    const [currentPage, setCurrentPage] = useState(1)//guarda la pag actual
    const [pokemonPerPage, setPokemonPerPage] = useState(12)//guarda los pokemon q quiero por pag
    const indexOfLast = currentPage * pokemonPerPage
    const indexOfFirst = indexOfLast - pokemonPerPage
    const currentPokemon = allPokemons.slice(indexOfFirst, indexOfLast)//los pokemon de la pag actual
    const paginado = (pageNumber) => setCurrentPage(pageNumber)
    
    const [order,setOrder] = useState("")
    
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        dispatch(getPokemons())//
    }, [dispatch])

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
    }
    
    function handleFilterByName(e){
        dispatch(filterByName(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
        e.preventDefault();
    }

    function handleStrength(e){
        dispatch(filterStrength(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
        e.preventDefault();
    }

    function handleSource(e){
        dispatch(filterSource(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
        e.preventDefault()
    }

    function handleType(e){
        dispatch(filterType(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
        e.preventDefault()
    }

     function toggleMenu(){
        setMenu(!menu)
    } 



    return(
        <div>

            <div className="cabecera">
                <h1 className="cabecera-h1">
                <Link className="link_create" to='/pokemons'>Create Pokemon</Link>
                </h1>

                <button onClick={toggleMenu} className="cabecera-button">
                <svg className="cabecera-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>

                <nav className={`cabecera-nav ${ menu ? 'isactive' : ''}`}>
                    <ul className="cabecera-ul">
                        <li className="cabecera-li">
                        <button className="btn_reload" onClick={e => {handleClick(e)}}>Refresh</button>
                        </li>
                        <li className="cabecera-li">
                        <select onChange={(e) => {handleFilterByName(e)}}>
                             <option value=''>Order By Name</option>
                             <option value='asc'>A - Z</option>
                             <option value='desc'>Z - A</option>
                        </select>
                        </li>
                        <li className="cabecera-li">
                        <select onChange={(e) => {handleType(e)}}>
                    <option>Filter By Type</option>
                    <option value='all'>All</option>
                    {allTypes?.map((e) => {
                        return(
                            <option value={e} key={e.id}>{e}</option>
                        )
                    })}
                </select>
                        </li>
                        <li className="cabecera-li">
                        <select onChange={(e) => {handleSource(e)}}>
                    <option>Filter By Source</option>
                    <option value='all'>All</option>
                    <option value='api'>API</option>
                    <option value='created'>Created</option>
                </select>
                        </li>
                        <li className="cabecera-li">
                        <select onChange={(e) => {handleStrength(e)}}>
                    <option value=''>Order By Strength</option>
                    <option value='max'>Higher</option>
                    <option value='min'>Lower</option>
                    
                </select> 
                        </li>
                        <li>
                        <SearchBar
                        page = {paginado}
                        />
                        </li>
                    </ul>
                </nav>
            </div>






        <div className="top_nav">
            <img className='img_pokemon' src={b} alt="header-pokemon"/>
            </div>  
   
            <div className="cards">

            {
                currentPokemon?.map((e) => {
                    return(
                        <fragment >
                            <Link   className="text_frag" to={`/pokemons/${e.id}`}>
                            <Card name={e.name} 
                                  image={e.image}
                                  types={e.types[0].name ?  e.types.map(e => e.name + ' ') :e.types.map(t => t + ' ')}/>
                            </Link>
                        </fragment>
                        )
                    })
                }
                
                </div>
                    <Paginado
                    pokemonPerPage={pokemonPerPage}
                    allPokemons={allPokemons.length}
                    paginado={paginado}
                    />
                </div>
    )
}