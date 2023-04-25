const express = require('express');
const router = express.Router();
const dishesController = require('../controllers/dishes');

require('dotenv').config();
const apiKey = process.env.API_KEY;

// Function to check if API key is valid
function checkApiKey(req, res, next) {
    const incommingAPIkey = req.headers['x-api-key'];
    if (incommingAPIkey === apiKey) {
        next();
    } else {
        res.status(401).json({ message: 'Invalid API key' });
    }
}

const path = require('path');

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/dishes', dishesController.getAllDishes);
router.post('/dishes', checkApiKey, dishesController.createDish);
router.put('/dishes/:id', checkApiKey, dishesController.updateDish);
router.delete('/dishes/:id', checkApiKey, dishesController.deleteDish);

module.exports = router;