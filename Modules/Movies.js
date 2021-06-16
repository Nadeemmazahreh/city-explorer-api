const axios = require('axios');
function movieHandl(req, res) {
    let movie = req.query.moviename;
    console.log(movie);
    let key = process.env.MOVIEKEY;
    
    let movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movie}`;
        axios.get(movieUrl)
            .then(result => { const movieArr = result.data.results.map(movieItem => {
                    objMovie =  new Movie(movieItem);
                    console.log(objMovie);
                    return objMovie
                })
                res.send(movieArr);
            })
            .catch(err => {
                res.status(404).send(`Movie Not found ${err}`);
            })
    }
      

class Movie {
    constructor(item) {
        this.title = item.title;
        this.overview = item.overview;
        this.average_votes = item.vote_average;
        this.total_votes = item.vote_count;
        this.image_url = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        this.popularity = item.popularity;
        this.released_on = item.release_date;
    }
}

module.exports = movieHandl;