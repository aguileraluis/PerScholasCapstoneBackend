<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Effective Task Manager

Effective Task Manager is more than just a to-do application. This fully functional full stack application built using the MERN stack (MongoDB, Express, React, Node.js) is the powerhorse you've been waiting on to manage all of your to-do's. The application allows you to log-in and view the dashboard. You are able to create tasks, add users, edit tasks, edit users, create sub tasks and receive notifications when you get assigned to a new task. 

<p align="center">
  <img src="https://i.postimg.cc/VkBXQW2b/taskmanagerperscholas.png" width="350" title="hover text">
</p>

# Features:

* <b>User Authentication:</b> Secure login for users. 
* <b>Tasks Listing:</b> Display tasks, filter through them, search, sort, update, read, delete and duplicate functionalities
* <b>Admin Dashboard:</b> View all tasks, users, deleted tasks and update or delete any of them. You can deactivate and activate user accounts. 
* <b>User Dashboard:</b> View dashboard where all tasks are, filter through tasks, assign tasks, create sub tasks, add comments and update your information
* <b>Trash - Deleted Items:</b> View all tasks that have been trashed and restore or permanently delete them

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

# Frontend

* React
* Tailwind CSS
* Redux Toolkit for State Management 
* Sonner for alerts 
* Moment for dates
* Firebase for file management 
* React Icons
* Recharts for chart
* Clsx for dynamic css styles
* HeadlessUI for cusom designs

# Backend

* Node.js
* MongoDB
* Express
* JavaScript
* Morgan for http requests 
* Mongoose 
* Cookie-Parser
* Bcrypt
* JsonWebToken


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Live Sites 

* Frontend Live Site: <a href="https://mern-perscholas-capstone-taskmanager.netlify.app/">Effective Task Manager - Frontend</a>
* Backend Live API: <a href="https://perscholascapstonebackend.onrender.com/"> Effective Task Manager - Backend API</a>

<!-- GETTING STARTED -->
## Getting Started

You need to make sure that you have the .env file in the front end with
  * VITE_APP_BASE_URL
  * VITE_APP_FIREBASE_API_KEY

In your backend you need to provide the following in the .env file 
  * NODE_ENV
  * MONGO_URI
  * JWT_SECRET
  * PORT

### Prerequisites

In the client folder, you need to run
* npm
  ```sh
  npm install
  ```
* npm
  ```sh
  npm run dev
  ```

In the server folder, you need to run
* npm
  ```sh
  npm install
  ```
* npm
  ```sh
  npm start
  ```


### Installation

_If you want to run the local version on your machine, you will need to go to firebase and create an account and get a key_

1. Get a free API Key from Firebase at [https://firebase.google.com/](https://firebase.google.com/)
2. Clone the repo
   ```sh
   git clone 'repo name'
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create your .env files and add your keys there
   ```js
   const VITE_APP_BASE_URL = 'frontend website url link';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The idea for this applicatio arose from a constant lack of organization when doing full stack projects for clients. When beginning a project it's important to collect data, images, files, and notes. In addition, you need to have somewhere where you can track all of the micro tasks that are involved in developing and deploying a full stack application. This is where Effective Task Manager came to help. Not only can you create and edit tasks, but you can also asign people to certain tasks, while tracking their progress and you can track your own progress. The goal is to make building full stack software applications effortless. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Luis Aguilera Garcia - www.linkedin.com/in/luis-aguilera-garcia-1b7753308

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project could not had been possible without the help of CodeWaveWithAsante on YouTube

* https://www.youtube.com/@CodeWaveWithAsante 

<p align="right">(<a href="#readme-top">back to top</a>)</p>
