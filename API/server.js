const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({path:'config.env'});

app.listen(process.env.PORT,()=>{
    console.log(`server is up and running at port ${process.env.PORT}`);
})

