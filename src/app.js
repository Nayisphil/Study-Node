const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/echo', function (req, res) {
    console.log(req.body)
    res.json(req.body)
})

app.post('/add', (req, res) => {
    const { x, y } = req.body
    res.json({ result: x + y })
})

app.listen(3000, () => console.log('Serving on :3000'))
