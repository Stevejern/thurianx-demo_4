
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        randomPredict();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudio(url);
      randomPredict();
    }
  };

  const randomPredict = () => {
    const options = ['ดิบ', 'พร้อมตัด', 'สุก'];
    const choice = options[Math.floor(Math.random() * options.length)];
    setResult(choice);
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>ThurianX Demo App</h1>
      
      <div style={{ marginBottom: 20 }}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <input type="file" accept="audio/*" onChange={handleAudioUpload} />
      </div>

      {image && <img src={image} alt="durian" style={{ width: '100%', maxWidth: 300, borderRadius: 10 }} />}

      {audio && (
        <div style={{ marginTop: 20 }}>
          <audio controls src={audio} />
        </div>
      )}

      {result && (
        <div style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold' }}>
          ผลการวิเคราะห์: {result}
        </div>
      )}
    </div>
  );
}

export default App;
