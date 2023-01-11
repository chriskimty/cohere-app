import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Components
import Navbar from './components/Nav';
import Home from './components/Home';
import Spotlight from './components/Spotlight';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spotlight" element={<Spotlight />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
