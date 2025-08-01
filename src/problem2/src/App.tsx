import CryptoSwapForm from './components/crypto-swap-form/CryptoSwapForm';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='app-header'>
        <h1>Crypto Token Swap</h1>
        <p>Exchange your tokens seamlessly</p>
      </div>
      <CryptoSwapForm />
    </div>
  );
}

export default App;
