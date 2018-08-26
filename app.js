const express = require('express');
const app = express()
import {
    initiateBattle,
    charactersInActiveParty,
    changeToDowned,
    allCharacters,
    changeToGroup,
    changeFromDowned
} from './priority.js';

app.use(express.static('public'));

app.set('view engine', 'ejs')

initiateBattle(1);

app.get('/', function (req, res) {
    res.render('index', {
        characters: charactersInActiveParty(),
        allCharacters: allCharacters
    })
})

app.post('/character/:name/update/downed', function (req, res) {
    changeToDowned(req.params.name);
    res.send('it works');
})

app.post('/character/:name/update/added', function (req, res) {
    changeFromDowned(req.params.name);
    changeToGroup(req.params.name);
    res.send(req.params.name);
})

app.get('/character/load', function (req, res) {
    res.send(charactersInActiveParty());
})

app.listen(3000, () => console.log('BattleRole app listening on port 3000!'))