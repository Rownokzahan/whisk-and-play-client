# Whisk & Play

## Description

This project is a web application for Whisk & Play, where users can explore and purchase cooking toys for kids. The application offers various features such as user authentication, toy listing, toy details, adding toys, and managing user-specific toy listings.

## Live Demo

You can visit the live website at: [Whisk & Play](https://whiskandplay.web.app/)

## Features

- User Registration and Login
- Toy Listing with Picture, Name, Price, Rating
- Toy Details with Seller Information, Price, Rating, Availability
- User-Specific Toy Management (Add, Update and Delete)
- Sorting Toys by Price, Category
- Search Functionality to Find Toys by Name
- Responsive Design for Mobile and Desktop
- Blog Section with Informative Articles
- Google Sign-in Option for Convenient Authentication
- Error Handling for Invalid Login/Registration Attempts
- 404  Error Page
- Environment Variable Configuration for Secure Deployment

## Technologies Used

- Front-end: React.js, HTML, CSS, Tailwind CSS
- Authentication: Firebase Authentication
- Deployment: Firebase Hosting

## Installation

1. Clone the repository:

    git clone <https://github.com/Rownokzahan/whisk-and-play>

2. Install the dependencies:

    cd client
    npm install

    cd ../server
    npm install

3. Set up environment variables:

    - Create a `.env` file in the `server` directory.
    - Add the necessary environment variables (e.g., Firebase config keys, MongoDB credentials).

4. Start the development server:

    cd client
    npm start

    cd ../server
    npm start
  
5. Open the application in your browser:

    <http://localhost:3000>
