var nunjucks = require('nunjucks');

var express = require('express');

var app = express();

const data = require('../data');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    const rechome = data.slice(0,6);

    res.render('index.njk', {data: rechome});
});

app.get('/sobre', function (req, res) {
    res.render('pages/sobre/index.njk');
});

app.get('/receitas', function (req, res) {
    res.render('pages/receitas/index.njk', {data: data});
});

app.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = data[recipeIndex];
  
    res.render('pages/inforeceitas/index.njk', recipe);
  })
  

app.listen(3000, function () {
    console.log('App listening on port 3000!');
  });