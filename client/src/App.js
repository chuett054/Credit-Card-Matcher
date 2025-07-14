// client/src/App.js
import React, { useState } from 'react';
import SpendProfileForm from './components/SpendProfileForm';
import ResultPage from './components/ResultPage';
import { Box, Typography, Button, Container } from '@mui/material';

function App() {
  const [result, setResult] = useState(null);
  const [started, setStarted] = useState(false);

  return (
    <Container maxWidth="sm">
      {!started ? (
        <Box
          sx={{
            textAlign: 'center',
            mt: 10,
            p: 4,
            bgcolor: 'primary.main',
            color: 'common.white',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h2" gutterBottom>
            Welcome, human.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Let’s take control of your finances—one click at a time.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setStarted(true)}
          >
            Get Started
          </Button>
        </Box>
      ) : !result ? (
        <SpendProfileForm onResult={setResult} />
      ) : (
        <ResultPage data={result} onReset={() => { setResult(null); setStarted(false); }} />
      )}
    </Container>
  );
}

export default App;
