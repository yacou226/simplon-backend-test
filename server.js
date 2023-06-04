const app = require('./app')
require('dotenv').config();
const connectDatabase = require('./config/database');

// database
connectDatabase();
const port = 5000;
// serveur 
app.listen(port || process.env.PORT,()=>{
  console.log(`server is running on port ${port}`);
})