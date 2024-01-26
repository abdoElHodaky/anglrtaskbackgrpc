
import "reflect-metadata";
import application from "express"
import { json,urlencoded } from "express";
import cors from "cors";
import { AppDataSource } from "./_datasource";
import { apiv1 } from "./routes";
const app=application();
const port = process.env.PORT||3000
/*setInterval(function (){
if(AppDataSource.isConnected==false)
{
  AppDataSource.connect().then(e=>{
  console.log("connected")
  }).catch(console.log)
}

},500000)
*/

app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())
app.use(apiv1)

app.use((error:any, req:any, res:any, next:any) => {
  console.log(error)
  console.log("Error Handling Middleware called")
  console.log('Path: ', req.path)
  next() // (optional) invoking next middleware
})

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

app.get("/",(req,res)=>{
    res.redirect("endpoints")
})
app.use('/endpoints', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
