import React, { useState } from 'react';
import SpendProfileForm from './components/SpendProfileForm';
import ResultPage from './components/ResultPage';
function App() {
  const [result, setResult] = useState(null);

  return (
    <div>
      {!result ? (
        <SpendProfileForm onResult={setResult} />
      ) : (
        <ResultPage data={result} />
      )}
    </div>
  );
}

export default App;
