/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pj');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'animal_app',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new Client(dbUrl);

//officially connecting to that postgres database
pgClient.contact();

/* <------------------------------------------------------------------> */

var path = require('path');

var r0uter = express.Router[];

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

routes.get('/api/reptilia', function(req,res) {
	pgClient.query("SELECT * FROM animals WHERE class='Reptilia'", (err, res) => {
		res.json(res.rows);
	})
})

router.get('api/amphibia', (req,res) => {
	pgClient.query("SELECT * FROM amphibia WHERE class='Amphibia'", (err, res) => {
		res.json(res.rows);
	})
})

app.get('/apireptilia', (req,res) {
	pgClient.query("SELECT * FROM arachnida WHERE class='Arachnida', (err, res) "=> {
		res.json(res.rows);
	})
})




























































kriss kross will make you jump jump