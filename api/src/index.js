const express = require('express');
const sequelize = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const initModels = require('./models/init-models');
const indexRoutes = require('./admin/routes/index');
const clientRoutes = require('./client/routes/index');

const app = express();
app.use(express.json());
app.use(cookieParser('aapkaSecretKey'));
const Models = initModels(sequelize);
// Database connection





const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:7700',
  'http://localhost:3000',
  'http://localhost:5000',
  'http://0.0.0.0:5173',
  'http://192.168.43.1:5173',
  "100.74.13.20:5173",
  "100.74.13.20:5174",
  "192.168.43.1",
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));















sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ', err));

// Sync models



// sirf ek baar development mein

// sequelize.sync({ force: true })
//   .then(() => console.log('Models synced'));


app.use("/uploads", express.static("uploads"));

app.use('/api/admin', indexRoutes);
app.use("/api/client", clientRoutes)









app.get('/x', async (req, res) => {
  try {

    const { messages } = Models;
    const allmessages = await messages.findAll();
    res.json(allmessages);
  } catch (err) {
    console.error('Error fetching pages:', err);
    res.status(500).json({ error: err.message });
  }
});







// // Routes
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post('/users', async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const user = await User.create({ name, email });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
