[![Netlify Status](https://api.netlify.com/api/v1/badges/d5bba725-bc6c-4ece-901c-69ce850698fc/deploy-status)](https://app.netlify.com/sites/agitated-noether-613123/deploys)
# TeamWorkTasks
This repository contains the code for an API driven, client-side application. It utilizes the [TeamWork.com Projects API](https://developer.teamwork.com).

## UX
#### The application makes use of jQuery and DOM manipulation in order to provide a "single-page" experience to the user.
- On larger screen sizes, the page is divided in 3 vertical divs.
    - The SideMenu div: contains the main navigation links for different task sets.
    - The Middle div: which displays the task sets as selected from the SideMenu.
    - The Right div: which displays a form allowing users to add a task.

- On mobile devices, the user only sees one of the above divs at a time depending on which they select from the navigation. The idea here was to replicate a native app experience in the browser.
    - The navigation on mobile devices is located at the bottom of the device and scrolls horizontally, allowing the user to select the different task sets, add a task and logout.

#### User stories
- As a first-time user I want to be able to authenticate via my my Teamwork.com credentials.


- As a user who provides incorrect authentication information, I should  an appropriate alert to the problem.

- As an authenticated user, I should be directed to choose a project with which to work from.

- As an authenticated user I want to be able to view All Tasks available on the selected project list.

- As an authenticated user, I should be able see an overview section summarising the task sections i.e. Today, Tomorrow, Overdue etc.

- As an authenticated user I want to asked to create a task list if none exists already.

- As an authenticated user I want to be able to view a dashboard displaying an overview of my tasks.

- As an authenticated user, if I wish to add a task, I will fill out a form which will allow me enter task details such as:
    - title,
    - description,
    - due date,
    - task list.


- As an authenticated user, if I add a task that is successfully submitted, I should see a confirmation message.

- As an authenticated user, if there are tasks present, these should be presented in reverse-chronological order, beginning with the newest available task.

- As an authenticated user, if there are no tasks present in my account, I should be alerted to this and prompted to add a task.

- As authenticated user I want to be able to view Today’s Tasks.

- As authenticated user I want to be able to view Today’s Tasks.

- As authenticated user I want to be able to view Tomorrow’s Tasks.

- As authenticated user I want to be able to view Tomorrow’s Tasks.

- As authenticated user I want to be able to view Overdue Tasks.

- As authenticated user I want to be able to view Overdue Tasks.

- As an authenticated user I want to be able to mark tasks as complete.

- As an authenticated user I want to be able to delete completed tasks.

- As an authenticated user I want to be able to edit each task as follows:

    - Edit task title,
    - Delete task,
    - Alter due date.


## Challenges
###  - API user authentication.
Initially, I had the Teamwork credentials from  a login form being stored in browser local-storage. This was not ideal as it posed a security risk for Cross-site scripting (XSS) vulnerabilities. 
- Solution: Implemented Teamwork's [app login flow](https://developer.teamwork.com/projects/authentication-questions/how-to-authenticate-via-app-login-flow) .
    - The user is asked to authenticate with their TeamWork credentials by directing the user to their auth page, with callback URI for this application.
    - Once user has authenticated there is a code query parameter that is appended to the URI containing the temporary authentication token.
    - I then had to take this code and make an HTTP POST request to their API and the resulting payload contained a permanent access token.
    - I stored this token and then passed it as a Header in API calls made by the user to authenticate the user.

### - CORS (Cross-origin resource sharing).
As this is a client-side app, all requests made to the TeamWork Projects API are originating from a domain different to that of the API server. 

If [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) support is not enabled on the user's account with TeamWork.com - which is not by default then there will be no `Access-Control-Allow-Origin` header set, therefore, the browser will allow requests made from the application.
- Solution - Proxy server:
    - I built a reverse proxy with the [Apigee](https://apigee.com/api-management/#/homepage) platform to process requests from the app.
    - CORS issues do not arise from server-to-server communication. Therefore, as the proxy is built as a nodejs webserver, it accepts calls from the application and then communicates with the TeamWork API, adding CORS headers to the response on the way back to the user's browser. 

### Tracking user activity.
As the user makes use of the app, it is neccessary to track certain decisions taken by the user. For example, the app needs to be aware of which project the user is working on, which task list etc.
With this in mind, I decdided to store certai variables in the browser's local storage, for example:
`authToken` - stores the token rceived from app login flow

`currentProjectID` - stores which project the user is currently working with so that they only see tasks, lists etc. for that project.

`selectedTaskListID` - stores the tasklist for which new tasks will be added to, This value is obtained from click events on the list of task lists.

`taskCount` - stores how many tasks are tasks exist for the set project.

`taskListCount` - stores how many task lists exists for the set project.




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

![performance](/assets/img/readme-assets/perform1.PNG)

## Credits
### Third-party:
- [Horizontal scrolling nav](https://iamsteve.me/blog/entry/horizontal-scrolling-responsive-menu) - Used for mobile view.

#### Media:
TeamWork.com logos were obtained from their [press kit site](https://www.teamwork.com/press-media-kit) .






