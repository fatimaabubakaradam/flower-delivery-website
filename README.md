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
   ```

2. **Install Dependencies:**

3. **Setup Environment Variables::**
4.**Ignore Sensitive Files:**


##Project Structure

project-folder
├── controllers
│   └── flowerControllers.js
├── models
│   └── flowerModel.js
├── routes
│   └── flowerRoutes.js
├── node_modules
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md


**License**
This project is licensed under the MIT License. See the LICENSE file for more details.

**Author(s)**
If you have any questions or need further assistance, feel free to reach out:

**Name:** Fatima Abubakar

**Email:** fatimammcy@gmail.com

**GitHub:** https://github.com/fatimaabubakaradam

**Website:** https://hotel-website-xpa2.onrender.com
Thank you for visiting the Hotel Website repository. We hope you find it useful and enjoy contributing to the project!






