import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    
    res.render("index.ejs", 
        {
            
            dayname: req.body["dayname"],
            daytype: req.body["daytype"]
        }
    );
}
);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
