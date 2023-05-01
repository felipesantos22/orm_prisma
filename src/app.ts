import express from 'express';

const app = express();

app.use(express.json());

// Rota test
app.get('/', (req, res) => {
    return res.json({ hello: 'Hello Word' })
})

export default app;