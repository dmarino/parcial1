var express = require('express');
var router = express.Router();
const path = require('path');

var mongodb = require('mongodb').MongoClient;
var db;
//es el usuario de hector porque por alguna razon no coge mis credenciales
var url= "mongodb://hector:mongo2@ds139884.mlab.com:39884/mordorplanet";

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

router.get('/info/:user', function(req, resp) {

    var github = new GitHubApi({});
	var userName = req.params.user;

	var user = {};
	var followers = []; 

    github.users.getForUser({
        username: userName
    }, function(err, res) {

        if(res){
            user = res.data;
            github.users.getFollowersForUser({
                username: userName
            }, function(err2, res2) {
                followers = res2.data;
                resp.json({user: user, followers: followers});
            });           
        }
        else{
            resp.status(404).send("no user");
        }
    });

});

router.post('/consultas', function(req, res) {
    var consultas = req.body.consultas;
    var hora = new Date();
    db.collection('parcial').insert({"hora":hora,"consultas":consultas});
});



router.get('/consultas', function(req, res) {
	db.collection('parcial').find().toArray(function(err, results) {
        res.json(results);        
    })
});

router.get('/consultas/:id', function(req, res) {
    db.collection('parcial').find({"_id": req.params.id}).toArray(function(err, results) {
        res.json(results);        
    })
});


module.exports = router;