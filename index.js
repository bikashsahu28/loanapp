import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connectdb.js';
// import cors from 'cors';
import router from './routes/routes.js';
const app = express();
dotenv.config();
// app.use(cors());
app.use(express.json());
app.use('/api', router);
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});