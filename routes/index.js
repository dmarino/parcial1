var express = require('express');
var router = express.Router();

var mongodb = require('mongodb').MongoClient;
var db;
//es el usuario de hector porque por alguna razon no coge mis credenciales
var url= "mongodb://hector:mongo@ds139884.mlab.com:39884/mordorplanet";


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

	db.collection('parcial').insert({"user":user});


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