const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.static('views'))
app.use('/css', express.static(__dirname + 'public/css'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('languageSelect')
})

app.get('/spanishForm', (req, res) => {
    res.render('spaForm')
})

app.get('/englishForm', (req, res) => {
    res.render('engForm')
})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})