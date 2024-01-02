import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Feedback from'./Components/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/feedback" element={<Feedback/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
