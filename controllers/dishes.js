const db = require('../services/db');

exports.getAllDishes = (req, res) => {
    const category = req.query.category;

    let query = 'SELECT * FROM dishes';
    let params = [];

    if (category) {
        query += ' WHERE category = ?';
        params.push(category);
    }

    db.query(query, params, (error, results) => {
        if (error) {
            console.error('Error retrieving dishes:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        res.status(200).json(results);
    });
};

exports.createDish = (req, res) => {
    const { name, category, price } = req.body;

    const query = 'INSERT INTO dishes (name, category, price) VALUES (?, ?, ?)';
    const params = [name, category, price];

    db.query(query, params, (error, results) => {
        if (error) {
            console.error('Error creating dish:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        console.log('Dish created successfully');
        res.status(201).json({ message: 'Dish created successfully' });
    });
};

exports.updateDish = (req, res) => {
    const dishId = req.params.id;
    const { name, category, price } = req.body;

    const query = 'UPDATE dishes SET name = ?, category = ?, price = ? WHERE id = ?';
    const params = [name, category, price, dishId];

    db.query(query, params, (error, results) => {
        if (error) {
            console.error('Error updating dish:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        if (results.affectedRows === 0) {
            res.status(404).json({ message: `Dish with id ${dishId} not found` });
            return;
        }

        console.log('Dish updated successfully');
        res.status(200).json({ message: 'Dish updated successfully' });
    });
};

exports.deleteDish = (req, res) => {
    const dishId = req.params.id;

    const query = 'DELETE FROM dishes WHERE id = ?';
    const params = [dishId];

    db.query(query, params, (error, results) => {
        if (error) {
            console.error('Error deleting dish:', error.stack);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        if (results.affectedRows === 0) {
            res.status(404).json({ message: `Dish with id ${dishId} not found` });
            return;
        }

        console.log('Dish deleted successfully');
        res.status(200).json({ message: 'Dish deleted successfully' });
    });
};