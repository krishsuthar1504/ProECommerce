const app = require("./app");
const dotenv = require("dotenv");


//config
dotenv.config({path:"backend/config/config.env"});


app.listen(process.env.PORT,()=>{
    console.log(`Server Started Running at http://localhost:${process.env.PORT}`);
})