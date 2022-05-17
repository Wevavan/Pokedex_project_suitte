import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../style.css';

const PokedexInfo = ({}) => {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const getPokemon = async() =>{
          const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          setPokemon(data);
          console.log(data);
        }
        getPokemon();
    }, [id]);

  return (
    <div className='pokedetail container d-flex justify-content-center align-items-center'>
        <div className='hcard col-sm-2 border p-2 m-1 linka'>
            <div className='hcard_img'>
                <img className='border' src='' alt=''/>
            </div>
            <div className='hcard_text d-flex'>
                <p className='align-items-center fw-bold mt-3'>{pokemon.name}</p>
            </div>
            <div className='abilities'>
                <div className='group'>Blaze</div>
            </div>
            <div className='base-stat'>
                <h3 className='finalh3'>Hp : 30</h3>
            </div>
        </div>
    </div>
  )
}

export default PokedexInfo