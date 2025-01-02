import { verifyToken } from "../../lib/auth";

export default function handler(req, res) {
  const user = verifyToken(req, res);
  if (!user) {
    return; // Token validation failed
  }

  res.status(200).json({ message: "Welcome to the protected route!", user });
}
