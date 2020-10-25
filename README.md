# The Note Taker

![Note Taker]\(groceries.png)

## Table of Contents
1. [Goals](#Goals)
2. [Process](#Process)
3. [Technology Used](#Technology-used)
4. [Issues](#Issues)

## Goals
The goal of this project was to create a simple note taking page that takes the input of a user and allows them to come back later and view their notes. If they don't need the notes anymore, they can then just delete them.

## Process
In order to achieve this, the only thing I really had to code was the server.js file. Ultimately, I needed to be able to read and write to a file called db.json which would take the user input and push it back to the live page. I also had to code individual ids to each input so that when you wanted to delete a note, only that note would disappear.

## Technology Used
- Express
- Node.js
- fs
- path
- json database

## Issues
The biggest roadblock was definitely trying to create an id for these elements within the db.json array. 
