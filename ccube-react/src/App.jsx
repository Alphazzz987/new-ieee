import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CallForPapers from './pages/CallForPapers';
import OrganizingCommittee from './pages/OrganizingCommittee';
import Speakers from './pages/Speakers';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/organizing-committee" element={<OrganizingCommittee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <a href="#" className="back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>
    </Router>
  );
}

export default App;