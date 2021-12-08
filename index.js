const express = require('express')
const app = express()
const port = 5000
const engine = require('express-handlebars').engine
app.engine('handlebars', engine())

app.use(express.urlencoded({extended : true}))

app.listen(port,() => {
    console.log(`serveur start on port ${port}`)
})