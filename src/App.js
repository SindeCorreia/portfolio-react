import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Feedback from'./Components/Feedback/Feedback';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
