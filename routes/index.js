var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser');

var mongodb = require('mongodb').MongoClient;
var db;
var url= "mongodb://dmarino:gabo1234@ds139884.mlab.com:39884/mordorplanet";

var GitHubApi = require("github");

openMongo();
function openMongo(){
	mongodb.connect(url, (err, dbs) =>{
		if(err){
			throw err;
		}
		console.log("abierto");
		db = dbs;
	});
}


router.get('/followers/:user', function(req, resp) {

    var github = new GitHubApi({});
	var user = req.params.user;


    github.users.getFollowingForUser({
        username: user
    }, function(err, res) {
    	resp.json(res);
    });
});


router.get('/consultas', function(req, res) {
	db.collection('parcial').find().toArray(function(err, results) {
        res.json(results);        
    })
});


module.exports = router;