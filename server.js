// Import Express.js
const { error } = require('console');
const express = require('express');

let noteUpdate = '';

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
const PORT = process.env.PORT || 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, 'db/db.json'));

  // do a fs readfile
//   fs.readFile('./db/db.json', 'utf8',(err, data) =>
//   {

//       if(err){
//           console.error(err);
//       }else
//       {
          // Converting the string into an JSON obj
          //currentNotes = JSON.parse(data);
         // console.log('data:', data);
        //  console.log('data string:', currentNotes);

          // Now lets add additional note from user input
        //   currentNotes.push(noteUpdate);

        //   console.log('update file', currentNotes);
//       }
//     }
// )



});

app.post('/api/notes',(req, res) => {
    // console.log("POST Request is working"),
    // console.log("Method",req.method),
    // console.log("body",req.body)
    const {title, text} = req.body;

    console.log('title',title);
    console.log('text', text);

    if(title && text){
        noteUpdate = {
            title: title,
            text: text
        }
    }

    fs.readFile('./db/db.json', 'utf8',(err, data) =>
    {

        if(err){
            console.error(err);
        }else
        {
            // Converting the string into an JSON obj
            currentNotes = JSON.parse(data);
            console.log('data:', data);
            console.log('data string:', currentNotes);

            // Now lets add additional note from user input
            currentNotes.push(noteUpdate);

            console.log('update file', currentNotes);
        }
    
        
            // converting string back to JSON notation and writing it to the db.json file
            fs.writeFile('./db/db.json',JSON.stringify(currentNotes), (err) =>
            err
                ? console.error(err)
                : console.log(`Review for ${noteUpdate} has been written to JSON`)
            );
       
    
    })
});


app.delete('/api/notes',(req, res) => {

    console.log('delete section is working');
});

function readJsonFile()
{
     fs.readFile('./db/db.json', 'utf8',(err, data) =>
    {
        console.log('Reading JSON file again');

        if(err){
            console.error(err);
        }
    })

}


// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
