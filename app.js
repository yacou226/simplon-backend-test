const  express =   require('express');
const cors =  require('cors');
const routerClient =  require('./routes/Client');


const app= express();
const bodyParser = require('body-parser');

// middlewares
app.use(cors({
  origin:"*"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})

//routes
app.use('/api/v1/',routerClient);

app.get('/',(req,res)=>{
  console.log('test');
})

module.exports = app;
