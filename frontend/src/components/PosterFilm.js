import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PosterFilm = (props) => {

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // axios.get(`https://image.tmdb.org/t/p/original${props.film_data.backdrop_path}`)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err))
      
  }

  return (
    <div id='PosterFilmComponent'>
      <div className='posterContainer'>
        <img src={`https://image.tmdb.org/t/p/original${props.film_data.backdrop_path}`} alt=""/>
        {/* <p>{props.film_data.overview}</p> */}
        {/* <div className='addToFavoriteButton'></div> */}
      </div>
      <h1>{props.film_data.title}</h1>
    </div>
  )
}

export default PosterFilm