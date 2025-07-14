import React, { useState } from 'react';
import axios from 'axios';

export default function SpendProfileForm({ onResult }) {
  const [travel, setTravel] = useState(0);
  const [dining, setDining] = useState(0);
  const [other, setOther] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:4000/api/spend-profile', {
        travel: Number(travel),
        dining: Number(dining),
        other: Number(other),
      });
      onResult(res.data);
    } catch (err) {
      setError('Something went wrong. Check console.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Enter Your Monthly Spend</h2>

      <label>
        Travel ($):
        <input
          type="number"
          value={travel}
          onChange={(e) => setTravel(e.target.value)}
          min="0"
        />
      </label>

      <label>
        Dining ($):
        <input
          type="number"
          value={dining}
          onChange={(e) => setDining(e.target.value)}
          min="0"
        />
      </label>

      <label>
        Other ($):
        <input
          type="number"
          value={other}
          onChange={(e) => setOther(e.target.value)}
          min="0"
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'calculating…' : 'get recommendation'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}