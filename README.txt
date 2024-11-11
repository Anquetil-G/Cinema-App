Fausse app de streaming
API utilisé : The Movie Database

Liste des films triés par popularité : https://api.themoviedb.org/3/discover/movie?api_key=[API_KEY]&include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc

Liste des films triés par notes : https://api.themoviedb.org/3/discover/movie?api_key=[API_KEY]&include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200

Liste des films contenant un string dans le titre : https://api.themoviedb.org/3/search/movie?api_key=[API_KEY]&query=[STRING]&include_adult=false&language=fr-FR

Films similaire à un autre : https://api.themoviedb.org/3/movie?api_key=[API_KEY]&include_adult=false/[MOVIE_ID]/similar
https://api.themoviedb.org/3/movie/{movie_id}/similar

Charger image : https://image.tmdb.org/t/p/original/[POSTER_ID]


https://api.themoviedb.org/3/search/movie?api_key=7a087d527d2893fe582fb748ab938ae8&query=maison&include_adult=false&language=fr-FR