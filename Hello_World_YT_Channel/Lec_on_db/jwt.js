import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach user info to request object
    next(); // Call the next middleware or route handler
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid token.' });
  }
}