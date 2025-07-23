// LoadingSpinner.jsx
import './LoadingSpinner.css';

export default function LoadingSpinner() {
  return (
   <div className="spinner-wrapper">
  <div>
    <div className="spinner"></div>
    <p style={{
      marginTop: '16px',
      color: '#fff',
      fontSize: '1rem',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      animation: 'fadeIn 1s ease-in-out'
    }}>
      Converting MP4 to MP3...
    </p>
  </div>
</div>

  );
}
