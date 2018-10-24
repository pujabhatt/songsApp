import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

//parse incoming data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all songs
app.get('/api/songs', (req, res) => {
	
  res.status(200).send({
    success: 'true',
    message: 'songs retrieved successfully',
    songs: db
  })
});

// get all filtered songs
app.get('/api/songs/:searchText', (req, res) => {
	const searchText = req.params.searchText;
	
	const filterSongs = (searchText) => {
  return db.filter((el) =>
    el.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
  );
}
let songs=filterSongs(searchText);
  res.status(200).send({
    success: 'true',
    message: 'songs retrieved successfully',
    songs: songs
  })
});



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
