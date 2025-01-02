import QRCode from "qrcode";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { eventId } = req.body; // Receive event details from the request
  if (!eventId) {
    return res.status(400).json({ error: "Missing eventId" });
  }

  try {
    const eventUrl = `https://yourwebsite.com/event/${eventId}`;
    const qrCodeDataURL = await QRCode.toDataURL(eventUrl); // Generate QR Code
    res.status(200).json({ qrCodeDataURL });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate QR Code" });
  }
}
