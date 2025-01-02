import multer from "multer";
import nextConnect from "next-connect";
import path from "path";
import fs from "fs";

const uploadDir = "./public/uploads"; // Directory to store uploads

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`); // Add timestamp to file name
    },
  }),
});

const apiRoute = nextConnect({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something went wrong!");
  },
  onNoMatch: (req, res) => {
    res.status(405).end("Method not allowed!");
  },
});

apiRoute.use(upload.single("file")); // Middleware to handle single file uploads

apiRoute.post((req, res) => {
  res.status(200).json({ filePath: `/uploads/${req.file.filename}` });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle file uploads
  },
};
