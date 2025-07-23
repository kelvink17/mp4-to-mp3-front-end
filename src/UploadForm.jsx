import { useState, useRef, useEffect } from 'react';
import './UploadForm.css';
import { UploadCloud, CheckCircle, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState('light');
  const dropRef = useRef();

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && allowedTypes.includes(droppedFile.type)) {

const selected = e.target.files[0];
const allowedTypes = ['video/mp4', 'video/quicktime', 'video/webm'];
if (selected && allowedTypes.includes(selected.type)) {
  setFile(selected);
}
}
}

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.add('drag-over');
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove('drag-over');
  };

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === 'video/mp4') {
      setFile(selected);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsConverting(true);
    setDownloadUrl('');
    setProgress(0);

    const formData = new FormData();
    formData.append('video', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://mp4-to-mp3-backend-1.onrender.com/convert');
    xhr.responseType = 'blob';

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
      }
    };

    xhr.onload = () => {
      const blob = xhr.response;
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setIsConverting(false);
      setProgress(100);
    };

    xhr.onerror = () => {
      alert('Something went wrong during the upload.');
      setIsConverting(false);
      setProgress(0);
    };

    xhr.send(formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="upload-form"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button type="button" onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? (
          <>
            <Moon size={16} /> Dark Mode
          </>
        ) : (
          <>
            <Sun size={16} /> Light Mode
          </>
        )}
      </button>

      <div
        ref={dropRef}
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <UploadCloud size={36} />
        <p>{file ? file.name : 'Drag & drop an MP4 file or click to browse'}</p>
        <input
          type="file"
          accept="video/mp4,video/quicktime,video/webm"
          onChange={handleChange}
          id="fileInput"
          style={{ display: 'none' }}
        />
      </div>

      {isConverting && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      <button type="submit" disabled={!file || isConverting}>
        {isConverting ? 'Converting...' : 'Convert to MP3'}
      </button>

      {downloadUrl && (
        <motion.a
          href={downloadUrl}
          download="output.mp3"
          className="download-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CheckCircle color="var(--success)" size={20} />
          Download MP3
        </motion.a>
      )}
    </motion.form>
  );
}

export default UploadForm;
