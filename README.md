# 🎬 Express.js Movies Store API

A complete RESTful API for managing a movies store with genres, built with Express.js and MongoDB. This API provides full CRUD operations for both movies and genres with proper relationships, error handling, and validation.

## 📋 Features

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

## 🚀 Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Task7-loujainjnad
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
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

## 📁 Project Structure

```
movie-store-api/
├── src/
│   ├── models/
│   │   ├── Movie.js          # Movie schema with genre reference
│   │   └── Genre.js          # Genre schema
│   ├── controllers/
│   │   ├── movie.controller.js    # Movie CRUD operations (OOP style)
│   │   └── genre.controller.js    # Genre CRUD operations (OOP style)
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

## 🗄️ Database Schemas

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

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/genres` | Get all genres |
| GET | `/api/genres/:id` | Get single genre by ID |
| POST | `/api/genres` | Create new genre |
| PUT | `/api/genres/:id` | Update existing genre |
| DELETE | `/api/genres/:id` | Delete genre |

### Movie Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/movies` | Get all movies with genre populated |
| GET | `/api/movies/:id` | Get single movie by ID with genre populated |
| POST | `/api/movies` | Create new movie |
| PUT | `/api/movies/:id` | Update existing movie |
| DELETE | `/api/movies/:id` | Delete movie |
| GET | `/api/movies/genre/:genreId` | Get movies by specific genre |

## 📝 API Usage Examples

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

### Get All Movies (with genre populated)
```bash
GET /api/movies
```

### Get Movies by Genre
```bash
GET /api/movies/genre/:genreId
```

## 🧪 Testing with Postman

A comprehensive Postman collection is available for testing all endpoints. The collection includes:

- All CRUD operations for Genres
- All CRUD operations for Movies
- Success scenarios
- Error handling test cases
- Validation test cases

### Postman Collection

**Postman Collection Link:** (https://documenter.getpostman.com/view/24476375/2sB3WvLxaP)

To create and use the Postman collection:
1. **Create a new collection** in Postman named "Movies Store API"
2. **Add all endpoints** with the following structure:
   - Genre Endpoints:
     - GET `/api/genres` - Get all genres
     - GET `/api/genres/:id` - Get single genre
     - POST `/api/genres` - Create genre
     - PUT `/api/genres/:id` - Update genre
     - DELETE `/api/genres/:id` - Delete genre
   - Movie Endpoints:
     - GET `/api/movies` - Get all movies
     - GET `/api/movies/:id` - Get single movie
     - GET `/api/movies/genre/:genreId` - Get movies by genre
     - POST `/api/movies` - Create movie
     - PUT `/api/movies/:id` - Update movie
     - DELETE `/api/movies/:id` - Delete movie
3. **Set up environment variables** (optional):
   - `baseUrl`: `http://localhost:5000`
4. **Test all endpoints** with sample data
5. **Publish the collection** to your Postman workspace
6. **Add the public link** to this README

#### Sample Request Bodies

**Create Genre:**
```json
{
  "name": "Action",
  "description": "High-energy films with exciting sequences"
}
```

**Create Movie:**
```json
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

## 🛠️ Middlewares

### Custom Middlewares

1. **Request Logger** - Logs all incoming requests with timestamp, method, and URL
2. **Validation Middleware** - Validates if genre/movie exists before update/delete operations
3. **Error Handler** - Global error handling middleware that handles:
   - Mongoose duplicate key errors
   - Mongoose validation errors
   - Mongoose cast errors (invalid ObjectId)
   - Default server errors

### Built-in Middlewares

- `express.json()` - Parses JSON request bodies
- `morgan('dev')` - HTTP request logger

## ⚠️ Error Handling

The API uses comprehensive error handling:

- **Try-catch blocks** in all controllers
- **Custom error messages** in catch blocks
- **Global error handler** for centralized error management
- **404 handler** for undefined routes
- **Validation errors** are returned with appropriate status codes

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port number | 5000 |
| `MONGODB_URI` | MongoDB connection string | Required |

## 📦 Dependencies

- **express** - Web framework for Node.js
- **mongoose** - MongoDB object modeling tool
- **morgan** - HTTP request logger middleware
- **dotenv** - Environment variable loader

### Dev Dependencies

- **nodemon** - Development server with auto-reload

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Loujain Jnad**

## 🙏 Acknowledgments

- Express.js documentation
- Mongoose documentation
- MongoDB Atlas for cloud database hosting

---

**Note:** Make sure to update the Postman collection link in this README after publishing your collection to Postman workspace.

