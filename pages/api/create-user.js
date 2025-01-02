import connectToDatabase from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, plan } = req.body;

    try {
      await connectToDatabase();

      // Create a new user
      const newUser = await User.create({ name, email, plan });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating user" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
