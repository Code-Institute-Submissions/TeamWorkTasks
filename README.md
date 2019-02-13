# TeamWorkTasks
This repository contains the code for an API driven, client-side application. It utilizes the [TeamWork.com Projects API](https://developer.teamwork.com).

# UX
#### The application makes use of jQuery and DOM manipulation in order to provide a "single-page" experience to the user.
- On larger screen sizes, the page is divided in 3 vertical divs.
    - The SideMenu div: contains the main navigation links for different task sets.
    - The Middle div: which displays the task sets as selected from the SideMenu.
    - The Right div: which displays a form allowing users to add a task.

- On mobile devices, the user only sees one of the above divs at a time depending on which they select from the navigation. The idea here was to replicate a native app experience in the browser.
    - The navigation on mobile devices is located at the bottom of the device and scrolls horizontally, allowing the user to select the different task sets, add a task and logout.

#### User stories
- As a first-time user I want to be able to authenticate via my my Teamwork.com credentials.

- As an authenticated user, I should be able redirected to overview page.

-  As a user who provides incorrect authentication information, I should  an appropriate alert to the problem.

- As an authenticated user, I want to be able to select a project for which view tasks for.

- As an authenticated user I want to be able to view All Tasks as available across all Task Lists.

- As an authenticated user I want to be able to view a dashboard displaying an overview of my tasks.

- As an authenticated user, if I wish to add a task, I will need to fill out a form which will allow me enter task details such as:
    - title,
    - description,
    - task list, 
    - due date


- As an authenticated user, if I add a task that is successfully submitted, I should see a confirmation message.

- As an authenticated user, if there are tasks present, these should be presented in reverse-chronological order, beginning with the newest available task.

- As an authenticated user, if there are no tasks present in my account, I should be alerted to this and prompted to add a task.

- As authenticated user I want to be able to view Today’s Tasks available across all Task Lists.

- As authenticated user I want to be able to view Today’s Tasks, if there are none, then I should see a message alerting me of this.

- As authenticated user I want to be able to view Tomorrow’s Tasks, if there are none, then I should see a message alerting me of this.

- As authenticated user I want to be able to view Tomorrow’s Tasks, if there are none, then I should see a message alerting me of this.

- As authenticated user I want to be able to view Overdue Tasks, if there are none, then I should see a message alerting me of this.

- As authenticated user I want to be able to view Overdue Tasks, if there are none, then I should see a message alerting me of this.

- As an authenticated user, I should be able to see a list of all task lists available.

#### Task options
- Edit task title.

- Delete task.

- Alter due date.

## Technologies
- [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [jQuery](https://jquery.com/) - for DOM manipulation.
- [Twitter bootstrap](https://www.getbootstrap.com) - for responsive, mobile-first layouts.
- [Axios](https://github.com/axios/axios) - a Promise-based HTTP client for JS.
- [Netlify](https://netlify.com) - build, deploy, and manage modern web projects


## Version control
- Git and GitHub were utilized for **version control.** As additions and edits were being made, files were committed to branches and merged to the master branch.

## Deployment
- The project is deployed on the [Netlify](https://netlify.com) platform.
- This enabled deployments to be triggered from pushes to a dev branch of the repository on GitHub.
- Once changes to dev were tested and approved, theses were merged to the master branch and made publicly available on a subdomain of my personal site - [here](https://todo.daveodea.com) .

## Local deployment
This project can run locally using Python webserver:
```python
python -m SimpleHTTPServer
```

## Testing
- The site was tested on all modern desktop and mobile browsers to ensure cross compatibility and functionality.
- The site was tested to be responsive and to ensure it would be correctly displayed across mobile devices.

## Performance
To ensure the website responded and loaded quickly for the user, audits were carried out in CHrome dev tools:

![performance](/assets/img/readme-assets/perform1.png)

## Credits
### Third-party:
- [Horizontal scrolling nav](https://iamsteve.me/blog/entry/horizontal-scrolling-responsive-menu) - Used for mobile view.

#### Media:
TeamWork.com logos were obtained from their [press kit site](https://www.teamwork.com/press-media-kit) .

**************************************************************

# Project idea: 
"TeamWorkTasks" - a one-page task manager application. It utilizes the TeamWork.com API (https://developer.teamwork.com).

# Demo:
A development(subject to current dev changes) demo of this app can be viewed [here](https://agitated-noether-613123.netlify.com).


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


# Credits:
- [Horizontal scrolling nav](https://iamsteve.me/blog/entry/horizontal-scrolling-responsive-menu) - Used for mobile view.





