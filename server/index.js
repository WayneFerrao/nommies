const express = require('express');
require('dotenv').config();
let cors = require('cors');
const app = express();
let axios = require('axios');

app.use(cors());
let API_KEY = process.env.MOVIE_API_KEY;
app.get('/', (req, res) => {
    res.json({"BOIII": "YUHHH"});
});

app.get('/getMovies', (req, res)=> {
    let title = req.query.movie;
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
    .then(response =>{
        let refined = response.data.Search.filter(result =>result.Type == "movie")
        res.json(refined);
    }).catch(err =>{
        console.log(err);
    });
});

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });

}
const PORT = process.env.PORT || 5000;
app.listen(5000);