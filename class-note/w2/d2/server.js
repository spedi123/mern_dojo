const port = 8000;
const { application } = require('express');
const express = require('express')
const app = express()
app.use(express.json())


app.get('/api/cities', (req, res) => {
    const cities = [
        {
            id : 1,
            name : 'Aogashima',
            population : 170,
        },
        {
            id : 2,
            name : 'Seoul',
            population : 2222,
        },
        {
            id : 3,
            name : 'Las Vegas',
            population : 230,
        },
    ]
    return res.json(cities)
})

app.put('/api/cities/:id', (req, res) => {
    const {id} = req.params;
    return res.json({
        status: "success",
        msg: `Updated city id: ${id}`,
        updatedCity: req.body
    })
})

app.get('/api/city/:id', (req, res) => {
    const {id} = req.params;
    const cities = [
        {
            id : 1,
            name : 'Aogashima',
            population : 170,
        },
        {
            id : 2,
            name : 'Seoul',
            population : 2222,
        },
        {
            id : 3,
            name : 'Las Vegas',
            population : 230,
        },
    ]
    const cityToBeReturned = cities.filter((city) => city.id === parseInt(id))
    return res.json({
        status: "success",
        city : cityToBeReturned
    })
})

app.delete("/api/cities/:id", (req, res) => {
    const {id} =req.params;
    return res.json({
        status : "success",
        msg : `Deleted city id: ${id}`
    })
})

app.post('/api/cities', (req, res) => {
    console.log(req.body);
    return res.json({
        status : "success",
        city : req.body
    })
})

app.get('/api/', (req, res) => {
    return res.json({hello:"world"})
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})