const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Age?',
      name: 'age',
    },
    {
      type: 'input',
      message: 'Height?',
      name: 'height',
    },
  ])
  .then((response) => {
      console.log(response);
  })

    const generateHTML = (response) => {
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node Mini Project</title>
        </head>
        <body>
            <h1>${response.name}</h1>
            <h1>${response.age}</h1>
            <h1>${response.height}</h1>
            <script src="/assets/js/index.js"></script>
        </body>
        </html>
        `
    }


  fs.writeToFile('index.html', generateHTML(response), error => {
    error ? console.log(error) : "File Created"
})