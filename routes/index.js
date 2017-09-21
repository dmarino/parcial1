var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser');

//var mongodb = require('mongodb').MongoClient;
//var db;
//var url= "mongodb://localhost:27017/test";

var GitHubApi = require("github");

//openMongo();
//function openMongo(){
//	mongodb.connect(url, (err, dbs) =>{
//		if(err){
//			throw err;
//		}
//		console.log("abierto");
//		db = dbs;
//	});
//}


router.get('/followers/:user', function(req, resp) {

    var github = new GitHubApi({});
	var user = req.params.user;
	console.log(user);

    github.users.getFollowingForUser({
        username: user
    }, function(err, res) {
    	resp.json(res);
    });
});

module.exports = router;