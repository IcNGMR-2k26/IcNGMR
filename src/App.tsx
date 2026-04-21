import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import KeynoteSpeakers from './pages/KeynoteSpeakers';
import Committee from './pages/Committee';
import TechnicalTracks from './pages/TechnicalTracks';
import AuthorGuidelines from './pages/AuthorGuidelines';
import EditorGuidelines from './pages/EditorGuidelines';
import ReviewerGuidelines from './pages/ReviewerGuidelines';
import ReviewProcess from './pages/ReviewProcess';
import Registration from './pages/Registration';
import Acknowledgment from './pages/Acknowledgment';
import ContactAndAwards from './pages/ContactAndAwards';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/technical-tracks" element={<TechnicalTracks />} />
            <Route path="/author-guidelines" element={<AuthorGuidelines />} />
            <Route path="/editor-guidelines" element={<EditorGuidelines />} />
            <Route path="/reviewer-guidelines" element={<ReviewerGuidelines />} />
            <Route path="/review-process" element={<ReviewProcess />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/acknowledgment" element={<Acknowledgment />} />
            <Route path="/contact" element={<ContactAndAwards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;