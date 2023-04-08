// Import Express.js
const { error } = require('console');
const express = require('express');

// Import file system so i can update other files with data
const fs = require('fs');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// use the following to handle parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'db/db.json'))
);

app.post('/api/notes',(req, res)=>{
    console.log("POST Request is working"),
    console.log("Method",req.method),
    console.log("body",req.body)
    const {title, text} = req.body;

    console.log('title',title);
    console.log('text', text);


    // if(title && text){
    //     const noteUpdate = {
    //         title: title,
    //         text: text
    //     }

    //     fs.writeFile('./db/db.json',JSON.stringify(noteUpdate), (err) =>
    //     err
    //         ? console.error(err)
    //         : console.log(`Review for ${noteUpdate} has been written to JSON`)
    //     );
    //}
});

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
