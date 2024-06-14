import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config()
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('This is a stack overflow api');
});

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5500;

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL)
    .then(() => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message));