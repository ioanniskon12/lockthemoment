import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function CreateEvent() {
  const [eventId, setEventId] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/generate-qr", { eventId });
      setQrCode(response.data.qrCodeDataURL);
    } catch (err) {
      console.error("Failed to generate QR code:", err);
    }
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Event ID"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          required
        />
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCode && (
        <div>
          <h2>Your QR Code:</h2>
          <Image src={qrCode} alt="QR Code" width="100px" height="100px" />
        </div>
      )}
    </div>
  );
}
