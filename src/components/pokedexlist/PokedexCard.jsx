import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const PokedexCard = ({pokemon, loading, infoPokemon}) => {
  return (
    <>
        {
            loading ? <h1>loading...</h1> :
            pokemon.map((item)=>{
                return(
                    <>
                        <div className='hcard col-sm-2 border p-2 m-1' key={item.id} onClick={()=>infoPokemon(item)}>

                            <Link to={`/PokemonInfo/${item.id}`} className='text-decoration-none linka'>
                                <div className='hcard_img'>
                                    <img className='border' src={item.sprites.front_default} alt={item.name}/>
                                </div>
                                <div className='hcard_text d-flex'>
                                    <p className='align-items-start border py-2 px-3 m-2'>{item.id}</p>
                                    <p className='align-items-end fw-bold mt-3'>{item.name}</p>
                                </div>
                            </Link>

                        </div>
                    </>
                )
            })
        }
    </>
  )
}

export default PokedexCard