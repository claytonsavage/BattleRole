const express = require('express');
const app = express()
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})


app.listen(3000, () => console.log('BattleRole app listening on port 3000!'))