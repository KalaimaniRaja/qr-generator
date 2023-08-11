import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [qrDataVal, setQrDataVal] = useState('google.com');
  const [qrSizeVal, setQrSizeVal] = useState('200*200');

  const baseURL = 'https://api.qrserver.com/v1/create-qr-code/';

  const generateQRCode = (qrData, qrSize) => {
    const qrImageUrl = `${baseURL}?data=${encodeURIComponent(
      qrData
    )}&size=${qrSize}`;
    return qrImageUrl;
  };

  return (
    <div>
      <h1>QR Generator</h1>

      <div class="content-wrap">
        <input
          type="text"
          value={qrDataVal}
          onChange={(e) => setQrDataVal(e.target.value)}
        />
        <input
          type="text"
          value={qrSizeVal}
          onChange={(e) => setQrSizeVal(e.target.value)}
        />
      </div>
      <div class="image-wrap">
        <img src={generateQRCode(qrDataVal, qrSizeVal)} />
      </div>
    </div>
  );
}
