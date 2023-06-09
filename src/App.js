import './App.css';
import { GolbalProvider } from './context/globalState';

function App() {
  return (

    <div className="App">
      <GolbalProvider>
      App
        {/* can use the state and the action using usecontext(GlobalContext) hook and sipatching the actions from here */}

      </GolbalProvider>
    </div>
  );
}

export default App;
