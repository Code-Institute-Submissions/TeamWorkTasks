## TeamworkToDo
This is a one-page task manager application. It utilizes the TeamWork.com API (https://developer.teamwork.com).

This app is using the technologies learned throughout Interactive Frontend Development module on CodeInstitute.net

## Technologies:
- This website uses
    - HTML & CSS
    - JavaScript
    - Twitter bootstrap
    - [Axios](https://github.com/axios/axios), a Promise-based HTTP client for JS.
    - [Jasmine](https://jasmine.github.io/), a behavior-driven development framework for testing JS.

## Version control
- Git and GitHub were utilized for **version control.** As additions and edits were being made, files were committed to branches and merged to the master branch.

## Deployment
- Production app is deployed on the [Netlify](https://netlify.com) platform.
- This enabled deployments to be triggered from **GitHub** commits to a selected branch.
    - Deployment available at: https://agitated-noether-613123.netlify.com/

## User stories (functionality):

- [x]
As first-time user I want to be able to authenticate via my my Teamwork.com credentials.

- [x]
As an autheticated user, I should be able redirected to overview page.

- [x] 
As a user who provides incorrect authentication information, I should see an error with an appropriate message alerting me of the problem.

- [x]
As an authenticated user I want to be able to view All Tasks as available across all Task Lists.

- [x]
As an authenticated user I want to be able to view a dashboard displaying an overview of my tasks.

- [x]
As an authenticated user, if I wish to add a task, I will need to fill out a form which will allow me enter task details such as:
    - [x] title,
    - [x] description, 
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

## Project guidelines:
- Create a Single Page Application that relies heavily on one or more APIs.

## Credits:
- [Horizontal scrolling nav](https://iamsteve.me/blog/entry/horizontal-scrolling-responsive-menu) - Used for mobile view.





