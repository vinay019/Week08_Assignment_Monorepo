# Project name: Build a Client & Server app, deployed on Render (Week 08 Assignment)

### Render link (if applicable):

Client: https://week08-assignment-monorepo.onrender.com

Server: https://week08-assignment-monorepo-server.onrender.com

### Live Github Pages link(if applicable): N.A.

### Team members (if in a group project): N.A.

## Project description:

To create a “monorepo” project, which contains a client and a server which successfully communicate with each other, and get it successfully deployed and working on Render!

## Problem domain:

HTTP Methods: Get
HTTP Methods: Post
Node.js: Express servers, routing
JavaScript: Events, Fetch, DOM Manipulation, Async/Await Functions
Server-side Packages: Express, CORS
Vite: Modern Frontend Tooling for JavaScript
Render

## User stories:

**Web Fundamentals:**

🐿️ As a Developer, I want to set up a ‘monorepo’ project with a client and server folder, so that I can manage and separate my code.

🐿️ As a Developer, I want to deploy both my client and server code to Render.

**Programming Logic:**

🐿️ As a Developer, I should have at least one GET route on my server which returns data.

🐿️ As a Developer, I should make sure my client can interact with server and also display the data from my server.

🐿️ As a User, I should be able to interact with the web page and see some kind of result from my interactions.

**Stretch User Stories**

**Web Fundamentals:**

🐿️ As a Developer, I should ensure that the app looks great on multiple screen sizes and the design/style changes meaningfully depending on that.

🐿️ As a User, I should find the app engaging/meaningful/useful in some way, so that I’m encouraged to visit and use it.

🐿️ As a Developer, I should plan my app with excellence, so that my understanding of what I’m creating is stronger and so I can demonstrate it to others.

**Programming Logic:**

🐿️ As a Developer, I should write DRY code so that my app is easier to maintain.

🐿️ As a User, I can interact in multiple ways with the app to get different results.

🐿️ As a Developer, I have integrated an API with my server, to give the app enhanced functionality.

## Wireframe(s): N.A.

## A list of any libraries, frameworks, or packages that your application requires in order to properly function:

NPM packages used: Vite, Express and CORS

## Instructions on how to run your app:

Please visit https://week08-assignment-monorepo.onrender.com and click on the Get a new quote button to view the quotes pulled from the server.

## Lighthouse report: N.A.

## Reflections:

Please mention the requirements you met and which goals you achieved for this assignment.

### 🎯 What requirements did you achieve?

Met all the basic requirements and also a few stretch goals.

### 🎯 Were there any requirements or goals that you were not quite able to achieve?

If I'm being critical, I would say the planning went for a toss. I also did not acheive the stretch goal of having a feature so that the user can interact with the app in various other ways.

### 🎯 If so, could you please tell us what was it that you found difficult about these tasks?

Did not spend more time on it as I'm already behind.

### What went really well and what could have gone better?

I believe I have achieved all the requirements and also a couple of stretch goals. The app looks okay and invites the user to click and view the 50 quotes that are available.

### Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials):

For the styling I used https://cssgradient.io/ for the gradient background and also got the code for the button that I have on there from the site. I also used ChatGPT to tweak and fine tune the look I was aiming for.

### Describing errors or bugs you encountered while completing your assignment:

let quotesArray = [];
let currentIndex = 0;

I had initially assigned them as const variables and it didn't work. Had to change them to let as they were global and only had a value assigned once the function ran. And each time the button was clicked, the variable changed, therefore the const didn't work. Figured this out with the help of ChatGPT.

### References:

Background and button: https://cssgradient.io/
Quotes: https://zenquotes.io/api/quotes/random
CSS fine-tuning: used Open AI's Chat GPT
