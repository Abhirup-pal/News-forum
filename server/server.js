const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace with your own MongoDB connection string)
mongoose.connect('mongodb://127.0.0.1:27017/newsletter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const subscriberSchema = new mongoose.Schema({
  email :String
})

const Subscriber = mongoose.model('Subscriber',subscriberSchema);

// Serve React static files (build)
app.use(express.static(path.join(__dirname, '../news-forum/build')));

// All other routes should be handled by React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../news-forum/build', 'index.html'));
});

// Handle newsletter subscription form submissions
app.post('/subscribe', async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    // Check if the email already exists in the database.
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({ok : false, message: 'Email already subscribed.' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.json({ok : true, message: 'Subscribed successfully!' });
  } catch (error) {
    res.status(500).json({ok : false, message: 'Server error' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
