const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(express.static('public'));
// Import routes
const productRoutes = require('./routes/productRoutes');

// Use routes
app.use('/api/products', productRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Inventory Management API is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
