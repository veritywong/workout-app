const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) =>{
    res.json({mssg: 'GET a single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({messg: 'POST a new workout'})
})

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({messg: 'DELETE a new workout'})
})

//UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({messg: 'UPDATE a workout'})
})

module.exports = router