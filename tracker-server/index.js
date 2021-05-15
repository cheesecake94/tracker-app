require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const authRoutes = require('./routes/auth-routes');
const trackRoutes = require('./routes/track-routes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

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

app.get('/', (req, res) => {
  res.send('Tracker App');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});