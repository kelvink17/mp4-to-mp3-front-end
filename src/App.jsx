import { useEffect, useState } from 'react';
import './App.css';
import LoadingSpinner from './LoadingSpinner';
import UploadForm from './UploadForm';
import { Shield, Zap, Music, Github, Twitter } from 'lucide-react'; // Added icons

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
        {/* --- Added Creator Card --- */}
        <div className="creator-container" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '2rem' 
        }}>
          <div className="creator-card" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://github.com/kelvink17.png" 
                alt="Kelvin" 
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #3b82f6' }}
              />
              <div style={{ 
                position: 'absolute', bottom: '0', right: '0', 
                width: '12px', height: '12px', background: '#22c55e', 
                borderRadius: '50%', border: '2px solid #0f172a' 
              }}></div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#fff' }}>Built by Kelvin</h4>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>Media Engineering & UI</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <a href="https://github.com/kelvink17" style={{ color: '#64748b' }}><Github size={14}/></a>
                <a href="#" style={{ color: '#64748b' }}><Twitter size={14}/></a>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------- */}
        
        <p>© 2025 VinskiConvert. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;