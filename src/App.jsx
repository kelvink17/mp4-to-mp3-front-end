import { useEffect, useState } from 'react'
import './App.css'
import LoadingSpinner from './LoadingSpinner';
import UploadForm from './UploadForm';
import { Shield, Zap, Music } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="main-wrapper fade-in">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo"><Music size={24} color="#3b82f6"/> <span>VinskiConvert</span></div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <button className="btn-outline">API Docs</button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <h1>Convert Video to <span className="text-gradient">Crystal Clear</span> Audio</h1>
        <p>High-fidelity MP3 extraction in seconds. Secure, fast, and completely free.</p>
      </header>

      <main className="content-section">
        <UploadForm/>
      </main>

      <section id="features" className="features-grid">
        <div className="feature-card">
          <Zap className="icon" />
          <h3>Lightning Fast</h3>
          <p>Server-side processing ensures your conversion finishes in seconds.</p>
        </div>
        <div className="feature-card">
          <Shield className="icon" />
          <h3>Secure & Private</h3>
          <p>Files are encrypted during transit and deleted immediately after conversion.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 VinskiConvert. Professional Grade Media Tools.</p>
      </footer>
    </div>
  );
}

export default App;