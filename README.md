# flower-delivery-website
# Express and MongoDB Flower API


## Table of Contents

- [Project Overview](#Project-Overview)

  - [Features](#Features)

  - [Prerequisites](#Prerequisites)

  - [Installation](#Installation)

  - [Project Structure](#Project-Structure)

  - [Implementation Details](#Implementation-Details)

  - [Server Configuration](#Server-Configuration)

  - [API Endpoints](#API-Endpoints)

  - [Notes](#Notes)

  - [License](#license)

  - [Author(s)](#authors)

## Project Overview

This project involves creating an Express.js application connected to a MongoDB Atlas database. It serves as a backend for managing a flower collection, complete with CRUD operations and image handling. The application is modularized into separate components for models, routes, and controllers for maintainability and scalability.

## Features

- **Environment Variable Management:** Sensitive information such as PORT_NUMBER and MONGODB_URI is stored securely in a .env file.
- **Database Integration:** MongoDB Atlas is used to store and manage the flower data.
- **Image Uploads:** Multer is used for handling image uploads
- **RESTfu API:** Routes are created for getting, adding, and deleting flower records.
- **CORS Support:** Cross-Origin Resource Sharing (CORS) middleware is integrated.
 - **Structured Codebase:** Organized into models, routes, and controllers.

## Prerequisites

- **Node.js (v16 or higher):**
- **MongoDB Atlas account:**
- **Postman :**
  

## Setup and Installation

 follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
cd <flower-delivery-website>
   
2. **Install Dependencies:**

   npm install
   
3. **Set up MongoDB Atlas:**

   Create a MongoDB Atlas account and set up a cluster.
  Obtain the connection string from MongoDB Atlas and store it in the .env file as MONGODB_URI.

4. **Set up Environment Variables:**
   MONGODB_URI=<your-mongodb-connection-string>
   PORT_NUMBER=3000
   
 **The server will be running on http://localhost:3000.**

  **Project Structure**
/flower-delivery-website
│
├── /controllers
│   ├── flowerController.js      # Handles logic for flower-related API endpoints
│
├── /models
│   ├── flowerModel.js           # Mongoose schema for flowers
│
├── /routes
│   ├── flowerRoutes.js          # Defines the routes for flower-related operations
│
├── /uploads                     # Folder to store uploaded flower images
│
├── .env                         # Stores sensitive environment variables
├── app.js                       # Main server file
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation

  **Project implement**

- **Mongoose Models:** A flower schema is defined using Mongoose to structure the data in MongoDB.
- **Controllers:** Logic for handling flower CRUD operations is implemented in the controller, which interacts with the models..
- **Routes:** Express routes are defined for the CRUD operations, and API calls are handled here.
- **Multer Middleware:** For handling image uploads and storing them in the uploads/ folder.

   **Server Configuration**
  The server is configured to run on the port specified in the .env file or defaults to port 5000 if not set. MongoDB Atlas is used for database management, with connection details stored securely in environment variables.

  **API Endpoints**
  - **GET /flowers - Fetch all flowers.** 
- **POST /flowers - Add a new flower.** 
- **DELETE /flowers/:id - Delete a flower by its ID** 
- **GET /flowers/:id - Get a specific flower by ID.**

-   **Notes**
-   This application is designed as the backend of a flower delivery service.
    Multer is used for image handling, and images are stored locally in the uploads folder.
    CORS middleware is used to ensure that the API can be accessed from different origins.
     
## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Author(s)
If you have any questions or feedback, feel free to contact:

**Name:** Fatima Abubakar 

**Email:** fatimammcy@gmail.com 

**GitHub:**  Flower delivery Website Repository
feature-1


**website:** https://flower-delivery-website.onrender.com

**watch my loom video** https://www.loom.com/share/b4f5b687e2314e308de1a2f2eeb40c14













