const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

app.get('/musicians', async (req, res) => {
    try {
        const musicians = await Musician.findAll();
        res.json(musicians);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching musicians' });
    }
});

app.get('/musicians/:id', async (req, res) => {
    try {
        const musician = await Musician.findByPk(req.params.id);
        if (musician) {
            res.json(musician);
        } else {
            res.status(404).json({ error: 'Musician not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching musician' });
    }
});

app.get('/bands', async (req, res) => {
    try {
        const bands = await Band.findAll();
        res.json(bands);
    } catch (error) {
        console.error('Error fetching bands:', error);
        res.status(500).json({ error: 'An error occurred while fetching bands' });
    }
});

app.get('/bands/:id', async (req, res) => {
    try {
        const band = await Band.findByPk(req.params.id);
        if (band) {
            res.json(band);
        } else {
            res.status(404).json({ error: 'Band not found' });
        }
    } catch (error) {
        console.error('Error fetching band:', error);
        res.status(500).json({ error: 'An error occurred while fetching band' });
    }
});

module.exports = app;