var express = require('express');

var routes = function(Book){
var bookRouter = express.Router();

bookRouter.route('/')
     .post(function(req, res){
         //var book = new Book();
         console.log(req.body);
         var book = new Book(req.body);
         console.log(book);
         res.send(book);
     })
    .get(function(req, res) {
        var query = {};
        if(req.query.title)
        {
            query.title = req.query.title;
        }
        
        if(query.title == req.query.title)
        {
            Book.find({title: query.title}, function(err, data){
            if(err)
            {
                res.status(500).send(err);
            }
            else
            {
                res.status(200).json(data);
            }
        })
        }
        else
        {
            Book.find(function(err, data){
                if(err)
                {
                    res.status(500).send(err);
                }
                else
                {
                    res.status(200).json(data);
                }
            })
        };
        //var response = {name: 'shishir'};
        //res.json(response);
    });

bookRouter.route('/:id')
    .get(function(req, res) {
        Book.findById(req.params.id, function(err, data){
            if(err)
            {
                res.status(500).send(err);
            }
            else
            {
                res.status(200).json(data);
            }
        });
        //var response = {name: 'shishir'};
        //res.json(response);
    });
}

module.exports = routes;