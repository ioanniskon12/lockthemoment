import connectToDatabase from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      // Fetch all users
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching users" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
