import connectToDatabase from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const db = await connectToDatabase();
    const { connection } = db;

    if (connection.readyState === 1) {
      return res.status(200).json({ message: "Connected to MongoDB!" });
    } else {
      return res.status(500).json({ message: "Failed to connect to MongoDB." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
