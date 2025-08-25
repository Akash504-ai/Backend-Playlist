//we use constants.js file for maintaining constants in one place, such as DB_NAME, JWT_SECRET, USER_ROLES, STATUS_CODES, etc.

// Database
export const DB_NAME = "videotube";
// this is how it works---->
// db/index.js
import mongoose from "mongoose";
import { DB_NAME } from "../constanta.js";

mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`); 




// Auth
export const JWT_SECRET = "super-secret-key";   // (better keep in .env for security)
export const TOKEN_EXPIRY = "7d";
// this is how it works---->
// utils/jwt.js
import jwt from "jsonwebtoken";
import { JWT_SECRET, TOKEN_EXPIRY } from "../constanta.js";

export const generateToken = (user) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
};




// User roles
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
};
// this is how it works---->
// middleware/auth.js
import { USER_ROLES } from "../constanta.js";

export const isAdmin = (req, res, next) => {
  if (req.user.role !== USER_ROLES.ADMIN) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};





// Status codes
export const STATUS_CODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
// this is how it works---->
// controllers/userController.js
import { STATUS_CODES } from "../constanta.js";

export const getUser = (req, res) => {
  try {
    // ... fetch user
    res.status(STATUS_CODES.SUCCESS).json(user);
  } catch (err) {
    res.status(STATUS_CODES.SERVER_ERROR).json({ message: "Something went wrong" });
  }
};





// App constants
export const MAX_FILE_SIZE = "5mb";
export const SUPPORTED_IMAGE_TYPES = ["jpg", "jpeg", "png"];
// this is how it works---->
// middleware/upload.js
import multer from "multer";
import { MAX_FILE_SIZE, SUPPORTED_IMAGE_TYPES } from "../constanta.js";

const upload = multer({
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (req, file, cb) => {
    if (!SUPPORTED_IMAGE_TYPES.includes(file.mimetype.split("/")[1])) {
      return cb(new Error("File type not supported"));
    }
    cb(null, true);
  },
});
