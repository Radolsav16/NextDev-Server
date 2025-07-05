import express from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import cors from 'cors';

dotenv.config()

const PORT = process.env.PORT || 3030;


const app = express();
app.use(express.json())

app.use(authRouter)

app.use(cors())




app.listen(PORT,()=>console.log(`Server is running on PORT ${PORT}`))