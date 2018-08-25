const express = require('express');
const app = express()
import { initiateBattle, charactersInActiveParty, changeToDowned } from './priority.js';
import { stringify } from 'querystring';

app.use(express.static('public'));

app.set('view engine', 'ejs')

initiateBattle(1);
let characterArray = charactersInActiveParty();

app.get('/', function (req, res) {
    res.render('index', { characters: characterArray, message: 'Hello there!' })
})

app.post('/character/:name/update/downed', function(req, res) {
    // changeToDowned(req.params.name)
    console.log(req.params.name);
    res.send('it works');
})


app.listen(3000, () => console.log('BattleRole app listening on port 3000!'))