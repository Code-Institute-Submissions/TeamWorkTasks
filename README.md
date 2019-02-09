# Project Goal:
Create a Single-Page Application (SPA).
Incorporate links or buttons to allow your user to navigate the site and reset/control the site functionality.
Whenever possible, strive to use semantic HTML5 elements to structure your HTML code better.

Make sure your site is as responsive as possible. You can test this by checking the site on different screen sizes and browsers. Please note that if you are building a data dashboard, only your chart containers are expected to be responsive. Charts using D3.js are not responsive as they are designed for desktop or large-screen viewing.

We advise that you write down user stories and create wireframes/mockups before embarking on full-blown development.
The site can also make use of CSS frameworks such as Bootstrap, just make sure you maintain a clear separation between the library code and your code.
You should conduct and document tests to ensure that all of your website’s functionality works well.

Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.

Deploy the final version of your code to a hosting platform such as GitHub Pages.

# Project idea: 
"TeamworkToDo" - a one-page task manager application. It utilizes the TeamWork.com API (https://developer.teamwork.com).

# Demo:
A development(subject to current dev changes) demo of this app can be viewed [here](https://agitated-noether-613123.netlify.com).

# Technology stack:
- HTML & CSS
- JavaScript
- Twitter bootstrap framework
- jQuery
- [Axios](https://github.com/axios/axios), a Promise-based HTTP client for JS.
- [Jasmine](https://jasmine.github.io/), a behavior-driven development framework for testing JS.
- [Netlify](https://netlify.com), build, deploy, and manage modern web projects

# UX:
- The user is first asked to authenticate with their Teamwork Projects credentials.
- Once authenticated, the user is shown a list of their Teamwork projects gathered from a call to the API - they choose one.
- Task overview displayed with counters.
- Side menu to navigate to relevant task due date ranges i.e Today, Tomorrow, Overdue and Completed.
- An add task form comprising of title, description, due-date and task list to which it should be added displayed on the right most div.
- Each task may be marked as complete.
- Each task may also be edited to update any of the form fields.

# Version control
- Git and GitHub were utilized for version control. As additions and edits were being made, files were committed to branches and merged to the master branch.

# Deploy
- Production app is deployed on the [Netlify](https://netlify.com) platform.
- This enabled deployments to be triggered from GitHub commits to a selected branch.

# Current issues:
- Teamwork credentials from login form are currently being stored in browser local-storage. This is not ideal as poses security risk for Cross-site scripting (XSS) vulnerabilities. Need to implement [Teamwork's app login flow](https://developer.teamwork.com/projects/authentication-questions/how-to-authenticate-via-app-login-flow) or similar.

# Further features:

## User stories (functionality):

- [x]
As a first-time user I want to be able to authenticate via my my Teamwork.com credentials.

- [x]
As an authenticated user, I should be able redirected to overview page.

- [x] 
As a user who provides incorrect authentication information, I should  an appropriate alert to the problem.

- [x]
As an authenticated user, I want to be able to select a project for which view tasks for.

- [x]
As an authenticated user I want to be able to view All Tasks as available across all Task Lists.

- [x]
As an authenticated user I want to be able to view a dashboard displaying an overview of my tasks.

- [x]
As an authenticated user, if I wish to add a task, I will need to fill out a form which will allow me enter task details such as:
    - [x] title,
    - [x] description,
    - [x] task list, 
    - [x] due date

- [x]
As an authenticated user, if I add a task that is successfully submitted, I should see a confirmation message.

- [x]
As an authenticated user, if there are tasks present, these should be presented in reverse-chronological order, beginning with the newest available task.

- [ ]
As an authenticated user, if there are no tasks present in my account, I should be alerted to this and prompted to add a task.

- [x]
As authenticated user I want to be able to view Today’s Tasks available across all Task Lists.

- [ ]
As authenticated user I want to be able to view Today’s Tasks, if there are none, then I should see a message alerting me of this.

- [ ]
As authenticated user I want to be able to view Tomorrow’s Tasks, if there are none, then I should see a message alerting me of this.

- [ ]
As authenticated user I want to be able to view Tomorrow’s Tasks, if there are none, then I should see a message alerting me of this.

- [ ]
As authenticated user I want to be able to view Overdue Tasks, if there are none, then I should see a message alerting me of this.

- [ ]
As authenticated user I want to be able to view Overdue Tasks, if there are none, then I should see a message alerting me of this.

- [x]
As an authenticated user, I should be able to see a list of all task lists available.

#### Task options
**To alter each task**
- [x]
Edit task title.

- [x]
Delete task.

- [x]
Alter due date.


#### Other tasks:
- [ ] Implement Jasmine tests.


# Credits:
- [Horizontal scrolling nav](https://iamsteve.me/blog/entry/horizontal-scrolling-responsive-menu) - Used for mobile view.





