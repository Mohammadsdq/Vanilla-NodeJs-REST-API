# Node.js REST API – Product Management

A RESTful API built with **Node.js** using the native HTTP module, without Express.js or any external framework.

This project is a practical exercise focused on understanding how to build REST APIs from scratch and learning the fundamentals of backend development.

## 🚀 Features

- Get all products
- Get a single product by ID
- Create a new product
- Update an existing product
- Delete a product
- Handle 404 Not Found responses
- Store product data in a JSON file
- Separate application logic using Controllers and Models
- Centralized file management using a utility module
- Asynchronous file operations with Promises and Async/Await

## 🛠️ Technologies

- Node.js
- Native HTTP Module
- File System (`fs`)
- Path Module
- JSON
- JavaScript (ES6+)

## 📁 Project Structure

```text
project/
│
├── controllers/
│   ├── productController.js
│   └── errorController.js
│
├── models/
│   └── productModel.js
│
├── utils/
│   └── fileManager.js
│
├── data/
│   └── products.json
│
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation

1. Clone the repository:

```bash
git https://github.com/Mohammadsdq/Vanilla-NodeJs-REST-API
```

2. Navigate to the project directory:

```bash
cd Vanilla-NodeJs-REST-API
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

The server will run at:

```text
http://localhost:5000
```

You can also configure the port using the `PORT` environment variable.

## 📡 API Endpoints

Base URL:

```text
http://localhost:5000/api/products
```

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## 📝 Example Requests

### Get All Products

```http
GET /api/products
```

### Get Product By ID

```http
GET /api/products/1
```

### Create Product

```http
POST /api/products
Content-Type: application/json
```

Request Body:

```json
{
  "name": "Laptop",
  "price": 1200,
  "description": "Gaming Laptop"
}
```

### Update Product

```http
PUT /api/products/1
Content-Type: application/json
```

Request Body:

```json
{
  "price": 1500
}
```

### Delete Product

```http
DELETE /api/products/1
```

## 🏗️ Architecture

The project uses a simple MVC-inspired architecture with a separate utility layer.

- **Server:** Handles incoming HTTP requests and routes them to the appropriate controllers.
- **Controllers:** Handle requests, process input, and send HTTP responses.
- **Models:** Manage product data and implement CRUD operations.
- **Utils:** Handle reusable file management operations, including writing JSON data to files.
- **Data:** Stores product information in JSON format.

## 🎯 Learning Objectives

Through this project, I practiced:

- Creating HTTP servers using Node.js
- Understanding HTTP methods and status codes
- Building RESTful API endpoints
- Implementing routing without Express.js
- Working with Controllers and Models
- Understanding Separation of Concerns
- Working with the File System module
- Managing asynchronous operations using Promises and Async/Await
- Reading and writing JSON files
- Implementing CRUD operations

## 🔮 Future Improvements

- Replace JSON file storage with MongoDB
- Add request body validation
- Improve error handling
- Implement a centralized error handler
- Add environment variable management
- Learn and implement Express.js

## 👨‍💻 Author

**Mohammad Sadegh Hashemian**

- GitHub: [@Mohammadsdq](https://github.com/Mohammadsdq)

---

*This project is part of my journey toward becoming a Backend Developer.*