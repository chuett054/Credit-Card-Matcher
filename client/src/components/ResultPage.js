// client/src/components/ResultPage.js
import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

export default function ResultPage({ data, onReset }) {
  const { name, logoUrl, rewards, cost, netBenefit } = data;

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: 400, textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            🎉 Your Top Pick
          </Typography>
          <img src={logoUrl} alt={name} style={{ maxWidth: 100, marginBottom: 16 }} />
          <Typography variant="h6">{name}</Typography>

          <Box mt={2}>
            <Typography>Rewards: ${rewards.toFixed(2)} / yr</Typography>
            <Typography>APR Cost: −${cost.toFixed(2)} / yr</Typography>
            <Typography variant="h6" mt={1}>Net Benefit: ${netBenefit.toFixed(2)} / yr</Typography>
          </Box>

          <Button variant="outlined" color="secondary" onClick={onReset} sx={{ mt: 3 }}>
            Try Different Profile
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
