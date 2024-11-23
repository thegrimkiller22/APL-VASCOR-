import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Ensure correct imports
import Navbar from '../../client/src/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';  // Import the About page
import Footer from '../../client/src/components/Footer';
import AwardsRecognition from './pages/AwardsRecognition';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>  {/* Ensure you're using Routes */}
            <Route path="/" element={<Home />} />  {/* Home page route */}
            <Route path="/about" element={<About />} />  {/* About page route */}
            <Route path="/awards-recognition" element={<AwardsRecognition />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
