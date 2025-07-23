import { useEffect, useState } from 'react'
import './App.css'
import LoadingSpinner from './LoadingSpinner';
import UploadForm from './uploadform';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading (e.g. fetching resources)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="app-container fade-in">
      <h1>MP4 to MP3 Converter</h1>
      <UploadForm/>
    </div>
  );
  
}


export default App;