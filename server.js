const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

// Initialize Express
const app = express();

// Use cors
app.use(cors())

// Conenct with database
connectDB();

// Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req,res) => res.json({msg:'Welcome to the Just Lists API...'}))

// Define API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/lists', require('./routes/lists'));
app.use('/api/publicLists', require('./routes/publicLists'));
app.use('/api/listItems', require('./routes/listItems'));
app.use('/api/comments', require('./routes/comments'));


const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));