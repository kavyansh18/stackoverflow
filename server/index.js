import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
import userRoutes from './routes/users.js'
import questionRouter from './routes/Questions.js'

app.get('/', (req, res) => {
    res.send('This is a stack overflow api');
});

app.use('/user', userRoutes)
app.use('/questions', questionRouter)

const PORT = process.env.PORT || 5500;

const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow.w5cc0om.mongodb.net/?retryWrites=true&w=majority&appName=stack-overflow";

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message));