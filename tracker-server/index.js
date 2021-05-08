require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Welcome ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});