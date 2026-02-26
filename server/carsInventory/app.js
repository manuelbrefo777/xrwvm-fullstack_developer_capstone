const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const Cars = require('./inventory');

const app = express();
const port = 3050;

app.use(cors());
app.use(express.json());

// 1. Retrieve data from car_records.json
const data = JSON.parse(fs.readFileSync('./data/car_records.json', 'utf8'));

// 2. Establish connection to MongoDB (using the service name 'mongo_db')
mongoose.connect('mongodb://mongo_db:27017/carsInventory');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');
    try {
        await Cars.deleteMany({});
        // The lab's car_records.json usually has a 'cars' root object
        await Cars.insertMany(data.cars);
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
});

// 3. Root API endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Mongoose API');
});

// i. Get cars by dealer ID
app.get('/cars/:id', async (req, res) => {
    try {
        const documents = await Cars.find({ dealer_id: req.params.id });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
    }
});

// ii. Get cars by dealer ID and car make
app.get('/carsbymake/:id/:make', async (req, res) => {
    try {
        const documents = await Cars.find({ dealer_id: req.params.id, make: req.params.make });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
    }
});

// iii. Get cars by dealer ID and car model
// Note: Lab description says 'carsbymake' but intent is 'carsbymodel'
app.get('/carsbymodel/:id/:model', async (req, res) => {
    try {
        const documents = await Cars.find({ dealer_id: req.params.id, model: req.params.model });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
    }
});

// iv. Get cars by dealer ID and mileage constraints
app.get('/carsbymaxmileage/:id/:mileage', async (req, res) => {
    try {
        let mileage = parseInt(req.params.mileage);
        let query = { dealer_id: req.params.id };
        if (mileage <= 50000) query.mileage = { $lte: 50000 };
        else if (mileage <= 100000) query.mileage = { $lte: 100000, $gt: 50000 };
        else if (mileage <= 150000) query.mileage = { $lte: 150000, $gt: 100000 };
        else if (mileage <= 200000) query.mileage = { $lte: 200000, $gt: 150000 };
        else query.mileage = { $gt: 200000 };
        
        const documents = await Cars.find(query);
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
    }
});

// v. Get cars by dealer ID and price constraints
app.get('/carsbyprice/:id/:price', async (req, res) => {
    try {
        let price = parseInt(req.params.price);
        let query = { dealer_id: req.params.id };
        if (price <= 20000) query.price = { $lte: 20000 };
        else if (price <= 40000) query.price = { $lte: 40000, $gt: 20000 };
        else if (price <= 60000) query.price = { $lte: 60000, $gt: 40000 };
        else if (price <= 80000) query.price = { $lte: 80000, $gt: 60000 };
        else query.price = { $gt: 80000 };
        
        const documents = await Cars.find(query);
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
    }
});

// vi. Get cars by dealer ID and minimum year constraint
// Note: Lab description says 'carsbymake' but intent is 'carsbyyear'
app.get('/carsbyyear/:id/:year', async (req, res) => {
    try {
        const documents = await Cars.find({ 
            dealer_id: req.params.id, 
            year: { $gte: req.params.year } 
        });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
    }
});

// 4. Start the server on port 3050
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});