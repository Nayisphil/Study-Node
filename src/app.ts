import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/echo', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.post('/add', (req, res) => {
    const { x, y } = req.body
    res.json({ result: x + y })
})

app.listen(3000, () => console.log('Serving on :3000'))
