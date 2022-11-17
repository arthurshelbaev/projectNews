const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(require('./routes/news.route'))
app.use(require('./routes/categories.route'))

mongoose.connect("mongodb+srv://arthurshelbaev:arthur123@cluster0.nkb13ye.mongodb.net/news?retryWrites=true&w=majority", () => {
    console.log('Server has been activated')
    app.listen(3000, () => {
        console.log('Host activated')
    })
})
