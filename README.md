#  Express.js Movies Store API

A complete RESTful API for managing a movies store with genres, built with Express.js and MongoDB. This API provides full CRUD operations for both movies and genres with proper relationships, error handling, and validation.

##  Features

- **Complete CRUD Operations** for Movies and Genres
- **MongoDB Integration** with Mongoose ODM
- **Relationship Management** between Movies and Genres
- **Data Population** to include genre details in movie responses
- **Custom Middlewares** for request logging, validation, and error handling
- **Comprehensive Error Handling** with try-catch blocks
- **Request Validation** before update/delete operations
- **HTTP Request Logging** with Morgan middleware
- **404 Handler** for undefined routes
- **Global Error Handler** for centralized error management

##  Setup and Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm 
- Postman ( for testing)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone (https://github.com/loujainjnad/Task7_node.git)
   cd Task7-loujainjnad
   ```

2. **Install dependencies**
   ```bash
   npm init -y
   npm install express mongoose morgan dotenv
   npm install -D nodemon   ```

3. **Configure environment variables**
   
   ```env
   PORT=5000
   MONGODB_URI=
   ```

4. **Start the server**
   
   For development (with nodemon):
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

5. **Verify the server is running**
   
   You should see:
   ```
   MongoDB connected successfully
   Server is running on port 5000
   ```

##  Project Structure

```
movie-store-api/
├── src/
│   ├── models/
│   │   ├── Movie.js          # Movie schema with genre reference
│   │   └── Genre.js          # Genre schema
│   ├── controllers/
│   │   ├── movie.controller.js    # Movie CRUD operations 
│   │   └── genre.controller.js    # Genre CRUD operations 
│   ├── routes/
│   │   ├── movie.routes.js        # Movie endpoints
│   │   └── genre.routes.js        # Genre endpoints
│   └── middlewares/
│       ├── errorHandler.js        # Global error handling middleware
│       ├── validationMiddleware.js # Validation middlewares
│       └── requestLogger.js       # Custom request logger
├── app.js                    # Main Express application
├── package.json
├── .env                      # Environment variables
└── .gitignore
```

## Database Schemas

### Genre Schema
- `name` (String, required, unique)
- `description` (String)
- `createdAt` (Timestamp)
- `updatedAt` (Timestamp)

### Movie Schema
- `title` (String, required)
- `director` (String, required)
- `genre` (ObjectId reference to Genre)
- `releaseYear` (Number, validated)
- `rating` (Number, 0-10)
- `duration` (Number, in minutes)
- `description` (String)
- `price` (Number, required)
- `inStock` (Boolean, default: true)
- `createdAt` (Timestamp)
- `updatedAt` (Timestamp)

## 📡 API Endpoints

### Genre Endpoints

GET /api/genres

GET /api/genres/:id

POST /api/genres

PUT /api/genres/:id

DELETE /api/genres/:id

### Movies Endpoints

GET /api/movies (populate genre)

GET /api/movies/:id (populate genre)

GET /api/movies/genre/:genreId

POST /api/movies

PUT /api/movies/:id

DELETE /api/movies/:id


## API Usage Examples

### Create a Genre
```bash
POST /api/genres
Content-Type: application/json

{
  "name": "Action",
  "description": "High-energy films with exciting sequences"
}
```

### Create a Movie
```bash
POST /api/movies
Content-Type: application/json

{
  "title": "The Matrix",
  "director": "The Wachowskis",
  "genre": "genre_id_here",
  "releaseYear": 1999,
  "rating": 8.7,
  "duration": 136,
  "description": "A computer hacker learns about the true nature of reality",
  "price": 19.99,
  "inStock": true
}
```

### Get All Movies 
```bash
GET /api/movies
```

### Get Movies by Genre
```bash
GET /api/movies/genre/:genreId
```

##  Testing with Postman

A comprehensive Postman collection is available for testing all endpoints. The collection includes:

- All CRUD operations for Genres
- All CRUD operations for Movies
- Success scenarios
- Error handling test cases
- Validation test cases

### Postman Collection

**Postman Collection Link:** (https://documenter.getpostman.com/view/24476375/2sB3WvLxaP)



📎 Useful links
postman collection:https://github.com/loujainjnad/Task7_node.git

## 👤 Author

**Loujain Jnad**
