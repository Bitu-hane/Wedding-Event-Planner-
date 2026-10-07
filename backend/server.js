const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/guests', require('./routes/guestRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/budget', require('./routes/budgetRoutes'));
app.use('/api/vendors', require('./routes/vendorRoutes'));
app.use('/api/event', require('./routes/eventRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Wedding Event Planner API is running' });
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
