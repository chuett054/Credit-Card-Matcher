import React from 'react';

export default function ResultPage({ data }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Recommended Card:</h2>
      <img src={data.logoUrl} alt={data.name} style={{ maxWidth: 120 }} />
      <h3>{data.name}</h3>
      <p>Score: {data.score.toFixed(2)}</p>
      {/* later: show net benefit, details, etc. */}
    </div>
  );
}