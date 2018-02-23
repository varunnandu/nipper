# Nipper

Below I am providing steps for running the code base for my Assessment locally. 


# Requirements:

  - Node version v8.1.3
  - npm version 5.4.1
  - MongoDB version v3.4.9

# Assumptions:

Make sure to have node and mongo setup in environment variables so that they can be accessed from anywhere in the terminal. 

For mongo my local host assumes the following connection string **mongodb://127.0.0.1:27017/nipper** where **nipper** is the name of the database in which all the given data resides. Please edit the connection string based on the local machine it is being tested on and make sure there is a data base nipper created. Also the data from statues.json should reside in our database **nipper** with collection name **statues**.

In order to create the database and add entries to it run the following commands from the terminal or command line:

```sh
 $ mongo
 > use nipper
 > db.createCollection('statues')
 > db.statues.insert({"name":"Second Chances", "artist":"Bob Anderson", "address":"3 Oakland Ave", "path":"/assets/second_chances.jpg"}) 
```
- Similarly enter all the data in database

Edit the connection string in **app.js** where the project files are extracted.

**There is an app.js in public folder as well which should not be changed**

**It is important to make sure that the connection String is properly written to create a connection with the database.**

# Steps to run the codebase:

- Extract the codebase on the local machine
- From the command line or terminal navigate to the folder where data was extracted.
- Run the following command **npm install** to install all dependencies.
- Run **mongod** to open a connection to  data base server.
- Type in **node server.js** to start the server. Note that this command should be executed in a different terminal or command prompt window.
- Browse to **localhost:4000** on any browser to see and test the app.

The commands will look somthing like this:

```sh
$ cd {path to directory where data is extracted}/varun-nandu-02-22-18
$ npm install
$ mongod
$ node server.js (Run this in a different command prompt or terminal window).
```
I have hosted my app on heroku and the app can be [viewed and tested here](https://nipper.herokuapp.com/#/).

I have created a mock database of the data u provided so no unnecessary steps are required.
