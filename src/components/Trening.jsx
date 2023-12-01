import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import YouTube from 'react-youtube';
import axios from 'axios';

const Trening = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
    setBMI(bmiValue);
  };

  const saveBMI = () => {
      const user_id = 4;
      axios.post('http://localhost:4000/save-bmi', { user_id, bmi })
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => { 
          console.error('Error saving BMI:', error);
        });
  };

  const videoId = '5BwlDW0CAuU';

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Stranica za Trening</h1>
      <div className="row mb-3">
        <div className="col-sm-6">
          <label className="form-label">Visina (cm):</label>
          <input
            type="number"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="col-sm-6">
          <label className="form-label">Težina (kg):</label>
          <input
            type="number"
            className="form-control"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={calculateBMI}>
          Izračunaj BMI
        </button>
      </div>
      {bmi && (
        <div className="alert alert-info">
          <p>Vaš BMI je: {bmi}</p>
          <button className="btn btn-primary" onClick={saveBMI}>
            Sačuvaj BMI
          </button>
        </div>
      )}
      <div>
        <h3>Treninzi</h3>
        <YouTube videoId={videoId} />
      </div>
    </div>
  );
};

export default Trening;
