# HR Application

This repository contains the frontend files of the HR application. Previously, I had another repository where the files were organized step-by-step from Step 1 to Step 6. However, due to some issues with that repository, I was forced to delete it, and now I have pushed all the files together into the current repository.

- [hrApp live project](https://hr-app-frontend-react.vercel.app/)
- [hrApp backend server](http://localhost:3001/employees)
- [GitHub repo of backend files](https://github.com/Bayezidtanmay/hrApp-backend-react)

# Project description and personal reflection about this project

## Project description

This project was divided into 6 parts, and in each phase, we added new functionalities and faced new challenges 😃. I'm trying to briefly highlight each step.

### Step-1

In this step, first we had to set up the React environment on our local machine 💻. We created the Header, Footer, and Person components and styled them using CSS. We also created a GitHub repository and pushed our Step 1 code to GitHub.

### Step-2

We created an array of employee objects in this step. We added .map() in PersonList component to go through the employee array. In the PersonCard component, we calculated how many years the person has worked by using JavaScript Date object. Also we added some conditional reminders and person’s favorite animal 🐻‍❄️ as an emoji.

### Step-3

We added 3 more pages (About.jsx, PersonList.jsx, AddEmployee.jsx) in our hrApp in this step. Users can easily add employees by filling a form from AddEmployee.jsx. This also updates our backend database 📈. About.jsx contains a short description about our project. We Added links to the pages in the Header component.

### Step-4

In this step, we created a file called db.json and moved our current employee array into this file under a key called employees. We Installed the json-server package and created a script to run it on port 3001. The server starts immedietly with "npm run server"🕸️.

### Step-5

This is the most interesting part of our app 🤩. Users can edit and save employee data (salary, location, department, skills) - also update in database. When not editing, the app show the values normally. If the user clicks cancel, the app exits edit mode and reset input values to their original values from props.

### Step-6

I use a custom hook (useAxios) in this step. Though it was a optional task, I did it cause I needed practice with hooks also I want to become a really good developer 😄. I Used this hook in App, PersonCard, and AddEmployee instead of repeating axios logic. Also I revised my whole application, deployment and GitHub things.


## Personal reflection

It has been a very rewarding experience for me to work on this project, both technically and personally. The project was divided into six well-defined steps and I was able to approach each part with focus and clarity. I noticed significant improvement in my understanding of components, mapping logics, useState, patch requests and hooks. I also gained practical experience with json-server and backend services.

Rebuilding the project in a new repository taught me to be more careful with version control and backups. I have discovered that building even a modest project can offer deep learning when done step by step. I'm proud with my progress and eager to see where my development path will take me next 😊.