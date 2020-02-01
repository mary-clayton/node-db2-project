// IMPORTS
const express = require('express');
const db = require('./data/db-config.js');

// ROUTER
const router = express.Router();

// GET
router.get('/', async (req, res) => {
    try {
        const cars = await db('cars')
        res.json(cars)
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve car information' })
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const car = await db('cars').where('id', id)
        res.json(car)
    } catch (err) {
        res.status(500).json({ message: 'Failed to get car information by specific id' })
    }
})

// POST
router.post('/', async (req, res) => {
    const carData = req.body
    try {
        const car = await db('cars').insert(carData);
        res.status(201).json(car)
    } catch (err) {
        res.status(500).json({ message: 'Failed to create car information' })
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const carUpdated = await db('cars').where('id', id).update(req.body);
        res.status(200).json({ updated: carUpdated })
    } catch (err) {
        res.status(500).json({ message: 'Failed to update car information' })
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const carDeleted = await db('cars').where('id', id).del()
        res.json({ deleted: carDeleted })
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete car information' })
    }
})

// EXPORTS
module.exports = router;