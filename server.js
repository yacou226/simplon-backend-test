const app = require('./app')
require('dotenv').config();
const connectDatabase = require('./config/database');

// database
connectDatabase();
// serveur 
app.listen(process.env.port || process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.port}`);
})