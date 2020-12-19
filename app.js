const app = require('./server');
const connectToDatabase = require('./database');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

connectToDatabase();

app.listen(PORT);
