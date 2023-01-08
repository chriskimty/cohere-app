import Navbar from './components/Nav';
import Home from './components/Home';
import CoGenerate from './components/CoGenerate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      <CoGenerate />
      </div>
    </Router>
  );
}

export default App;
