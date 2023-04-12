# 11 Express.js: Note Taker

## My Task

This project modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. I will build the back end, connect the two, and then deploy the entire application to Heroku.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```




## Getting Started

On the back end, the application will include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` will return the `notes.html` file.

* `GET *` will return the `index.html` file.

The following other API routes created:

* `GET /api/notes` reads the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## Images
* `GET /notes` will return the `notes.html` file.<br>
![notes.html Image](./public/assets/images/noteTaker_forwardSlashNotes.png)

* `GET *` will return the `index.html` file.<br>
![index.html Image *](./public/assets/images/noteTaker_forwardSlashAnything.png)

* `GET /api/notes` will return the json file.<br>
![notes.html Image](./public/assets/images/noteTaker_forwardSlashAPI_Notes.png)

* `GET /` will return the `index.html` file.<br>
![notes.html Image](./public/assets/images/noteTaker_forwardSlash.png)


- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

