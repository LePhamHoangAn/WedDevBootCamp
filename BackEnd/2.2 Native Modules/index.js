const fs = require('node:fs');

fs.writeFile("message.txt", "HeeHee Pls work", (err) => {
    if (err) throw err;
    console.log('successfully written message.txt');
  });

fs.readFile("message.txt",'utf8',(err, data) => { 
    if (err) throw err;
    console.log(data);
  }); 