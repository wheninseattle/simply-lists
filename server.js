const express = require('express');
const connectDB = require('./config/db');

// Initialize Express
const app = express();


// Conenct with database
connectDB();

app.get('/', (req,res) => res.json({msg:'Welcome to the Just Lists API...'}))

// Define API routes
app.use('/api/users', require('./routes/users'));
app.use('/api/lists', require('./routes/lists'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));