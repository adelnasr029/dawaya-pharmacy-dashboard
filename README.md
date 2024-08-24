# Dawya Pharmacy-Dashboard MVP 
Starter code that gives each pharmacy the ability to create an account adding all of its defining data through the Sign-Up form. <bra> 
Data like(Phamacy Name, mail, address, Location, License Number and password)

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 
 Have fun testing and improving it! 😎
## How It's Made:

**Tech used for Backend:** Node.js, Express, mongoose for connecting with MongoDB Atlas database server, passport for authenication, express-session and connect-mongo for storing session on DB, method-override for enabling us to make PUT and DELETE request via html forms as form's method attribute by default accepts just POST and GET as a value, express-flash for displaying alert messages to user if he/she enters invalid data into forms inputs by user, bycrypt pakcage for password hashing(encrypting)
**Tech used for Front-end:** EJS templating language to generate html dynamically inserting data into those elements, CSS
**Middlwares:** multer package that in case of we wanna upload files it enables us to make some validation before uploading that file if we wanted to add some contraints like fo e.g accepting pdf files only or others.

**DEV dependencies:** nodemon automatically restarts the server after saving each change made during developing, morgan for displaying the type of request made by user into the terminal console when experimenting stuff during dev

Here's where you can go to town on how you actually built this thing. Write as much as you can here, it's totally fine if it's not too much just make sure you write *something*. If you don't have too much experience on your resume working on the front end that's totally fine. This is where you can really show off your passion and make up for that ten fold.

## Optimizations
Adding React instead of EJS to provide much UI and UX
