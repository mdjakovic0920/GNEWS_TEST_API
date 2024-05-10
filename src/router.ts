import express from "express";
import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();
const router = express.Router();

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const GNEWS_API_URL = process.env.GNEWS_API_URL;

router.get('/gnews', async (req, res) => {
    try {
        const { data } = await axios.get(`${GNEWS_API_URL}/top-headlines`, {
            params: {
                token: GNEWS_API_KEY,
                lang: 'en',
                max: req.query.max || 10,
            },
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/gnews/search/:search', async (req, res) => {
    try {
        const { data } = await axios.get(`${GNEWS_API_URL}/search`, {
            params: {
                token: GNEWS_API_KEY,
                q: req.query.keyword,
                lang: 'en',
            },
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/gnews/title/:title', async (req, res) => {
    try {
        const { data } = await axios.get(`${GNEWS_API_URL}/search`, {
            params: {
                token: GNEWS_API_KEY,
                q: req.query.title,
                in: "title",
                lang: 'en',
            },
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;