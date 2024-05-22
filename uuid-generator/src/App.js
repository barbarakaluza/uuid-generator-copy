import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UUIDGenerator from './pages/UUIDGenerator';
import GUIDGenerator from './pages/GUIDGenerator';
import EmptyGenerator from './pages/EmptyGenerator';

function App() {
  return (
    <div className="App">
   <Router>
      <Routes>
        <Route path="/" element={<UUIDGenerator/>} />
        <Route path="/guid" element={<GUIDGenerator/>} />
        <Route path="/empty" element={<EmptyGenerator/>} />
      </Routes>
    </Router>


    </div>
  );
}

export default App;
