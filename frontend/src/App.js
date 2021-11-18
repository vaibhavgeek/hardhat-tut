import getBlockchain from './ethereum.js';
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { token } = await getBlockchain();
      setToken(token);
    };
    init();
  }, []);

  if(
    typeof token === 'undefined'
  ) {
    return 'Loading...';
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;