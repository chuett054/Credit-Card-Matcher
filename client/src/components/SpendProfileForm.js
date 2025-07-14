// client/src/components/SpendProfileForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, Box, Alert } from '@mui/material';

export default function SpendProfileForm({ onResult }) {
  const [travel, setTravel] = useState('');
  const [dining, setDining] = useState('');
  const [other, setOther] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post('http://localhost:4000/api/spend-profile', {
        travel: Number(travel),
        dining: Number(dining),
        other: Number(other),
      });
      onResult(data);
    } catch {
      setError('Server error. Try again.');
    }
    setLoading(false);
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Monthly Spend Profile
          </Typography>

          <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Travel ($)"
              type="number"
              value={travel}
              onChange={e => setTravel(e.target.value)}
              required
            />
            <TextField
              label="Dining ($)"
              type="number"
              value={dining}
              onChange={e => setDining(e.target.value)}
              required
            />
            <TextField
              label="Other ($)"
              type="number"
              value={other}
              onChange={e => setOther(e.target.value)}
              required
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Button type="submit" variant="contained" color="secondary" disabled={loading}>
              {loading ? 'Calculating…' : 'Get Recommendation'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
