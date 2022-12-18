const express = require('express')
const dotevn = require('dotenv')
const morgan = require('morgan')
const path = require('path')


const bodyparser = require("body-parser") 

const app = express()

dotevn.config({path: 'config.env'})


app.use(morgan('tiny'))

app.use(bodyparser.urlencoded({extended: true}))


app.use('/js',express.static(path.resolve(__dirname, "assets/js")))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`);})