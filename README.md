# 🛒 E-Commerce Backend API

A RESTful E-Commerce Backend built using **Node.js**, **Express.js**, and **MongoDB**. This project provides APIs for user authentication, product management, shopping cart operations, and order management using JWT-based authentication.

---

## 📌 Features

- User Registration & Login
- JWT Authentication
- Role-Based Authorization (Admin/User)
- Product Management (CRUD)
- Category Management
- Shopping Cart
- Order Management
- Protected Routes
- MongoDB Database Integration
- Error Handling
- Environment Variables Support

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- cors
- nodemon

---

## 📂 Project Structure

```
E-com-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Pallavi-naik82/E-com-backend.git
```

### 2. Navigate to Project

```bash
cd E-com-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Start the Server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 🚀 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/signup | Register User |
| POST | /api/login | Login User |

### Products

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/products | Get All Products |
| GET | /api/products/:id | Get Product by ID |
| POST | /api/products | Add Product (Admin) |
| PUT | /api/products/:id | Update Product |
| DELETE | /api/products/:id | Delete Product |

### Categories

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/categories | Get Categories |
| POST | /api/categories | Add Category |

### Cart

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/cart/add | Add to Cart |
| GET | /api/cart | View Cart |
| DELETE | /api/cart/remove | Remove from Cart |

### Orders

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/orders | Place Order |
| GET | /api/orders | Get User Orders |

---

## 🔐 Authentication

Protected APIs require a JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📦 Dependencies

- express
- mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- nodemon

---

## 🧪 Testing

You can test the APIs using:

- Postman
- Thunder Client
- Insomnia

---

## 📸 Future Enhancements

- Payment Gateway Integration
- Wishlist Feature
- Product Reviews
- Search & Filters
- Image Upload
- Admin Dashboard

---

## 👩‍💻 Author

**Pallavi Naik**

GitHub:
https://github.com/Pallavi-naik82

---

## 📄 License

This project is created for educational and learning purposes.# E-com-backend
