const express = require('express');
const app = express()
import { initiateBattle, charactersInActiveParty, changeToDowned, continueBattle } from './priority.js';
import { stringify } from 'querystring';

app.use(express.static('public'));

app.set('view engine', 'ejs')

initiateBattle(1);
let characterArray = charactersInActiveParty();

app.get('/', function (req, res) {
    res.render('index', { characters: characterArray })
})

app.post('/character/:name/update/downed', function(req, res) {
    changeToDowned(req.params.name);
    res.send('it works');
})

app.get('/character/load', function(req, res) {
    continueBattle();
    res.send(charactersInActiveParty());
})

app.listen(3000, () => console.log('BattleRole app listening on port 3000!'))