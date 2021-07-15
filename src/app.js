const path = require('path')
const express = require('express')
const hbs = require('hbs')
const dataFeed = require('./utils/vinter-connection.js')
const ethConnection = require('./utils/ethereumConnection.js')

const app = express()
const port = process.env.PORT || 3000

// define path for express config
const publicDirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../views')

// setup handlebars view engine and location
app.set('view engine', 'hbs')
app.set('views', viewPath)

// setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Metamask Connection'
    })
})

app.get('/datafeed', (req, res) => {
    dataFeed('xdc-usd-p-d', (error, data) => {
        if (error) {
            return res.send(error)
        }
        res.send(data)
    })
})


app.listen(port, () => {
    console.log('Express server listening on port',port)
})