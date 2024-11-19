import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

//Get index.html path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(morgan("combined"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(customMiddleware);

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log(req.body);
  res.send(`<h1>Your band name is: ${req.body.street}${req.body.pet}</h1>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function customMiddleware(req, res, next)
{
  console.log("Request method: ", req.method);
    console.log("Request URL: ", req.url);
    console.log("Request time: ", Date(Date.now()).toString());
    next();
}
