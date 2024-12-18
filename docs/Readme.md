# Backend Documentation

## Overview

The backend is built using Node.js, Express, and MongoDB. It handles user authentication, data management for skills, courses, and jobs, and provides APIs for frontend interaction.

## Folder Structure

backend/
├── models/
│   ├── User.js
│   ├── Skill.js
│   ├── Course.js
│   └── Job.js
├── routes/
│   ├── userRoutes.js
│   ├── skillRoutes.js
│   ├── courseRoutes.js
│   └── jobRoutes.js
├── middleware/
│   └── auth.js
├── config/
│   └── db.js
├── server.js
└── .env

## API Endpoints

### User Authentication

#### POST /api/users/register

**Description:** Registers a new user.

**Body Parameters:**
- `name` (string, required)
- `email` (string, required, unique)
- `password` (string, required, min length 6)

**Response:**
- `201`: User registered successfully.
- `400`: User already exists.

#### POST /api/users/login

**Description:** Logs in a user.

**Body Parameters:**
- `email` (string, required)
- `password` (string, required)

**Response:**
- `200`: Returns a JWT token.
- `401`: Invalid credentials.

#### GET /api/users/profile

**Description:** Fetches the profile of the logged-in user.

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
- `200`: User profile data.
- `401`: Unauthorized.

### Skills API

#### GET /api/skills

**Description:** Fetches all skills.

**Response:**
- `200`: Array of skills.

#### POST /api/skills

**Description:** Adds a new skill.

**Body Parameters:**
- `name` (string, required)
- `category` (string, required)
- `difficulty` (string, required)

**Response:**
- `201`: Skill added.
- `400`: Validation error.

### Courses API

#### GET /api/courses

**Description:** Fetches all courses.

**Response:**
- `200`: Array of courses.

#### POST /api/courses

**Description:** Adds a new course.

**Body Parameters:**
- `title` (string, required)
- `description` (string, required)
- `skills` (array, required)

**Response:**
- `201`: Course added.
- `400`: Validation error.

### Jobs API

#### GET /api/jobs

**Description:** Fetches all jobs.

**Response:**
- `200`: Array of jobs.

#### POST /api/jobs

**Description:** Adds a new job.

**Body Parameters:**
- `title` (string, required)
- `description` (string, required)
- `skillsRequired` (array, required)

**Response:**
- `201`: Job added.
- `400`: Validation error.

## Middleware

### auth.js

**Purpose:** Protects routes by validating JWT tokens.

**Function:**
- Extracts the token from the Authorization header.
- Verifies the token using `JWT_SECRET`.
- Attaches the user to the request object if valid.
- Returns `401 Unauthorized` if invalid or missing.

## Configuration

### Environment Variables

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT.
- `PORT`: Server port (default: 5000).

### Database Connection

Configured in `config/db.js`:

```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
Validation
User Model:
Name: Required.

Email: Required, unique, must be a valid email.

Password: Required, min length 6.

Skill Model:
Name: Required.

Category: Required.

Difficulty: Required.

Setup
Install dependencies:

bash
npm install
Start the server:

bash
npm start
Test API endpoints using tools like Postman or cURL.

Pending Features
Add password reset functionality.

Implement pagination for large datasets.

Add admin routes for managing skills, courses, and jobs.

Enhance security with rate limiting and CORS.