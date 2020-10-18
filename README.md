
# SQL-TO-DO-LIST

## A SQL-DB BASED TO DO APP.

_Duration: 5 hour sprint_

This app allows a user to store to-do tasks in a database, mark tasks as completed, or reset a task to uncompleted. Users may also delete a task if they no longer wish to store it on the db. Users may add tasks from the DOM and they will be stored in the db. All tasks are displayed on the DOM and marked complete when the user finishes the task.




### Prerequisites



- [Node.js](https://nodejs.org/en/)
- express
- bodyParser
- pg

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. type your desired new task in the Name of Task input
2. click `add task`
3. When you complete a task from your list, click `change status` 
4. If you wish to reset a task to undone, click `change status` again.
5. To delete a task from your list, click `delete`


## Built With

VS Code, Postico, Postman


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to Casie S at Prime for all her guidance and support!

## Support
If you have suggestions or issues, please email me at [kellyanndanger@gmail.com](www.google.com)