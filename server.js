
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const app = express();

dotenv.config();
app.use(express.json());
connectDB()

// Routes
app.use('/api/auth', authRoutes);

app.get('/api',(req,res)=>{
    res.send('API is running........');
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
