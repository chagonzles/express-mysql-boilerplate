const express = require('express');
const router = express.Router();

// GET users
router.get('/', (req, res) => {
    res.send('GET users');
})

// GET specific user
router.get('/:id', (req, res) => {
    res.send('GET user ' + req.params.id);
})

// POST user
router.post('/', (req, res) => {
    res.json(req.body);
})

// PUT user
router.put('/:id', (req, res) => {
    res.json(req.body);
})

// DELETE user
router.delete('/:id', (req, res) => {
    res.send('DELETE user ' + req.params.id);
})

module.exports = router;