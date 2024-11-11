import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PosterFilm from '../components/PosterFilm';

const Home = () => {
  const [popularFilmsData, setPopularFilmsData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc`)
      .then((res) => setPopularFilmsData(res.data.results))
      .catch((err) => console.error(err))
      
  }

  return (
    <div id='HomePage'>
      <h1>Nom de l'app</h1>

      <div className='popularFilmsList'>
        {popularFilmsData ? popularFilmsData.map((popularFilm, i) => (
          <PosterFilm key={i} film_data={popularFilm} />
        )) : <></>}
      </div>
    </div>
  )
}

export default Home