/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'animal_app',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

var path = require('path');

var express = require('express')
var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/animals', function(req,res) {
	pgClient.query("SELECT * FROM animals", (err, results) => {
		res.json(results.rows);
	})
})

router.get('/api/reptilia', function(req,res) {
	pgClient.query("SELECT * FROM animals WHERE class='Reptilia'", (err, results) => {
		res.json(results.rows);
	})
})

router.get('/api/amphibia', (req,res) => {
	pgClient.query("SELECT * FROM animals WHERE class='Amphibia'", (err, results) => {
		res.json(results.rows);
	})
})

router.get('/api/arachnida', (req,res) => {
	pgClient.query("SELECT * FROM animals WHERE class='Arachnida'", (err, results) => {
		res.json(results.rows);
	})
})

module.exports = router;