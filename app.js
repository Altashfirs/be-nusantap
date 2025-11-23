const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors({ origin: '*' })); // Adjust for production
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/donations', require('./routes/donationRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/funds', require('./routes/fundsRoutes'));
app.use('/api/pages', require('./routes/pageRoutes'));
app.use('/api/stats', require('./routes/statsRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

sequelize.authenticate().then(() => {
  console.log('DB connected');
  sequelize.sync({ alter: true }); // For dev; use migrate in prod
  app.listen(process.env.PORT || 3000, () => console.log('Server on port 3000'));
}).catch(err => console.error('DB error:', err));

sequelize.authenticate()
  .then(() => console.log('Database connected →', process.env.DATABASE_URL ? 'Neon (PostgreSQL)' : 'MySQL Lokal'))
  .catch(err => console.error('DB Connection Error:', err));

sequelize.sync({ alter: false }); // { alter: true } hanya di dev