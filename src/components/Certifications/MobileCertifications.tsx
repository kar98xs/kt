import React from 'react';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import { certificationsData } from '../../data/certifications';

// Simple inline styles for mobile optimization - no styled-components overhead
const containerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '100vw',
  padding: '2rem 1rem',
  backgroundColor: '#020617',
  color: '#EFF0F7',
  boxSizing: 'border-box',
  overflow: 'hidden',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '2rem',
  color: '#00d9ff',
};

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
  maxWidth: '100%',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#080D1F',
  border: '1px solid #262338',
  borderRadius: '12px',
  padding: '1.5rem',
  width: '100%',
  boxSizing: 'border-box',
  position: 'relative',
};

const imageStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  objectFit: 'cover',
  marginBottom: '1rem',
};

const placeholderStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  backgroundColor: '#262338',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  color: '#00d9ff',
  marginBottom: '1rem',
};

const titleCardStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#EFF0F7',
  marginBottom: '0.5rem',
};

const issuerStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#00d9ff',
  marginBottom: '0.5rem',
};

const dateStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  color: '#a9a9a9',
  marginBottom: '1rem',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#a9a9a9',
  lineHeight: '1.5',
  marginBottom: '1.5rem',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
};

const buttonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#00d9ff',
  color: '#020617',
  textDecoration: 'none',
  borderRadius: '6px',
  fontSize: '0.8rem',
  fontWeight: '500',
  border: 'none',
  cursor: 'pointer',
};

const secondaryButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: 'transparent',
  color: '#00d9ff',
  border: '1px solid #00d9ff',
};

const featuredBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  backgroundColor: '#00d9ff',
  color: '#020617',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  fontSize: '0.7rem',
  fontWeight: '600',
};

export const MobileCertifications: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Certifications</h2>
      
      <div style={gridStyle}>
        {certificationsData.map((cert) => (
          <div key={cert.id} style={cardStyle}>
            {cert.featured && (
              <div style={featuredBadgeStyle}>Featured</div>
            )}
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ flexShrink: 0 }}>
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    style={imageStyle}
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = document.createElement('div');
                      placeholder.style.cssText = Object.entries(placeholderStyle)
                        .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
                        .join('; ');
                      placeholder.innerHTML = '🏆';
                      target.parentNode?.insertBefore(placeholder, target);
                    }}
                  />
                ) : (
                  <div style={placeholderStyle}>🏆</div>
                )}
              </div>
              
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={titleCardStyle}>{cert.title}</h3>
                <p style={issuerStyle}>{cert.issuer}</p>
                <p style={dateStyle}>{cert.date}</p>
                <p style={descriptionStyle}>{cert.description}</p>
                
                <div style={buttonContainerStyle}>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={secondaryButtonStyle}
                  >
                    <FiExternalLink size={14} />
                    View
                  </a>
                  
                  {cert.downloadUrl && (
                    <a
                      href={cert.downloadUrl}
                      download={`${cert.title}-Certificate.pdf`}
                      target="_blank"
                      style={buttonStyle}
                    >
                      <FiDownload size={14} />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};