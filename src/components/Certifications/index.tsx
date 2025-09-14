import React from 'react';
import { FiCalendar, FiExternalLink, FiAward, FiDownload } from 'react-icons/fi';
import { Title } from '../../styles/styles';
import { certificationsData } from '../../data/certifications';
import { 
  CertificationsContainer, 
  CertificationsGrid, 
  CertificationCard,
  CertificationImage,
  CertificationInfo,
  CertificationActions,
  ActionButton,
  CertificationBadge,
  StatsContainer,
  StatCard
} from './styles';

export const Certifications: React.FC = () => {
  const stats = [
    { number: '9+', label: 'Certifications Earned' },
    { number: '5+', label: 'Major Platforms' },
    { number: '100%', label: 'Verified Credentials' }
  ];

  return (
    <CertificationsContainer id="certifications">
      <Title>
        Certifications
      </Title>
      
      <CertificationsGrid>
        {certificationsData.map((cert) => (
          <CertificationCard key={cert.id}>
            {cert.featured && <CertificationBadge>Featured</CertificationBadge>}
            
            <CertificationImage className="cert-image">
              {cert.image ? (
                <img src={cert.image} alt={cert.title} />
              ) : (
                <div className="cert-icon">
                  <FiAward />
                </div>
              )}
            </CertificationImage>
            
            <CertificationInfo>
              <h3>{cert.title}</h3>
              <div className="issuer">{cert.issuer}</div>
              <div className="date">
                <FiCalendar />
                Earned in {cert.date}
              </div>
              <div className="description">
                {cert.description}
              </div>
            </CertificationInfo>
            
            <CertificationActions>
              <ActionButton 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary"
              >
                <FiExternalLink />
                View Credential
              </ActionButton>
              {cert.verified && (
                <ActionButton 
                  href={cert.downloadUrl || '#'} 
                  download={cert.downloadUrl ? `${cert.title}-Certificate.pdf` : undefined}
                  target={cert.downloadUrl ? '_blank' : undefined}
                  onClick={cert.downloadUrl ? undefined : (e) => e.preventDefault()}
                >
                  <FiDownload />
                  Certificate
                </ActionButton>
              )}
            </CertificationActions>
          </CertificationCard>
        ))}
      </CertificationsGrid>

      <StatsContainer>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </StatCard>
        ))}
      </StatsContainer>
    </CertificationsContainer>
  );
};
