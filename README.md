# Notes API

A RESTful API for creating, managing, and securing personal notes.
This project implements authentication, protected routes, and structured logging for better monitoring and debugging.

---

## Features

* User authentication using JWT
* Create, read, update, and delete notes
* Route protection using authentication middleware
* Secure note ownership verification
* Structured logging with Winston
* HTTP request logging using Morgan

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Winston (application logging)
* Morgan (HTTP request logging)

---

## Installation

Clone the repository

```
git clone https://github.com/yourusername/notes-api.git
```

Navigate to the project folder

```
cd notes-api
```

Install dependencies

```
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRETKEY=your_jwt_secret
```

---

## Running the Server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

---

## Local Development

This API currently runs **only on your local machine** and is not deployed to a live server.

The server typically runs on:

```
http://localhost:3000
```

---

## Testing the API

You can test all API endpoints using **Postman**.

Steps:

1. Start the server
2. Open Postman
3. Send requests to the API endpoints
4. Use the base URL:

```
http://localhost:3000
```

For protected routes, include the JWT token in the Authorization header:

```
Authorization: Bearer <your_token>
```

---

## API Endpoints

### Authentication

Register user

```
POST /api/auth/register
```

Login user

```
POST /api/auth/login
```

---

### Notes

Get all notes

```
GET /api/notes
```

Create a note

```
POST /api/notes
```

Update a note

```
PUT /api/notes/:id
```

Delete a note

```
DELETE /api/notes/:id
```

---

## Logging

This project implements two logging systems:

### Morgan

Morgan logs incoming HTTP requests such as:

* request method
* route
* response status
* response time

### Winston

Winston provides structured logging for:

* application errors
* server events
* debugging information

Logs can be stored in files or displayed in the console depending on configuration.

---

## Security

* JWT-based authentication
* Protected routes
* Users can only access their own notes
* Unauthorized actions are blocked

---

## Author

Aaron Kimutai
