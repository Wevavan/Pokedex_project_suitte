import React, { useEffect, useState } from 'react';
import PokedexCard from './PokedexCard';
import axios from 'axios';
import PokedexInfo from '../pokedexinfo/PokedexInfo';

const PokedexList = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();
    const [pokedex, setPokedex] = useState();

    const FunctionPokemon = async()=>{
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data.results);
        setNextUrl(res.data.next);
        setPreviousUrl(res.data.previous);
        getPokemons(res.data.results);
        // console.log(pokeData);
        setLoading(false);
    }

    const getPokemons = async(res)=>{
        res.map(async(item)=>{
            const result = await axios.get(item.url);
            // console.log(result.data);
            setPokeData(state=>{
                state=[...state,result.data];
                return state;
            })
        })
    }

    useEffect(() => {
        FunctionPokemon();
    }, [url]);
    


  return (
    <div className='container mt-5'>
        <div className='row'>
            <PokedexCard pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokedex(poke)}/>
            <div className='btn-group'>
                {previousUrl && <button onClick={()=> 
                    {
                        setPokeData([]) 
                        setUrl(previousUrl)
                    }
                }>
                    Previous
                </button>}
                {nextUrl && <button onClick={()=>
                    {
                        setPokeData([]) 
                        setUrl(nextUrl)
                    }
                }>
                    Next
                </button>}
            </div>
        </div>
    </div>
  )
}

export default PokedexList