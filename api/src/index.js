const express = require('express');
const sequelize = require('./config/database');
const initModels = require('./models/init-models');
const indexRoutes = require('./admin/routes/index');

const app = express();
app.use(express.json());
const Models = initModels(sequelize);
// Database connection




sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ', err));

  // Sync models



// sirf ek baar development mein

  // sequelize.sync({ force: true })
  //   .then(() => console.log('Models synced'));




app.use('/api', indexRoutes);

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
