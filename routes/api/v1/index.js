const router = require('express').Router()
const foods = require('../../../data/foods.json')
const events = require('../../../data/events.json')

router.get('/events', (__, response) => {
    const event = events.map(eventItem => {
        const { id, name, location, date, time } = eventItem
        return { id, name, location, date, time }
    })
    response.send(event)
})
router.get ('/events/:id', (request, response) => {
    const { id } = request.params
    const found = events.find(event => event.id.toString() === id)
    if (found) return response.send(found)
       else {response.status(400).send({ error: `Could not find the event item ${id}`})}
})

router.post('/event', (request, response) => {
    const { name, location, date, time } = request.body
    const id = events.length + 1
    const newEvent = {id, name, location, date, time}
    events.push({name, location, date, time})
    response.send(newEvent)
})

router.get('/menu', (__, response) => {
    const menu = foods.map(menuItem => {
        const {id, name, description, price, url} = menuItem
        return {id, name, description, price, url}

    }) 
    response.send(menu)
})

router.get ('/menu/:id', (request, response) => {
    const { id } = request.params
    const found = foods.find(food => food.id.toString() === id)
    if (found) return response.send(found)
       else {response.status(400).send({ error: `Could not find the menu item ${id}`})}
})
router.post('/menu', (request, response) => {
	const { name, description, price, url } = request.body
	const id = foods.length + 1
	const newFood = { id, name, description, price, url }
	foods.push(newFood)
	response.send(newFood)
})


module.exports = router