import { certifications } from './data';
import { Section, Title, Item, ItemTitle, Subtitle, Link } from './styles';
import { Analytics } from '../../services/analytics';

const Certifications = () => {
  const handleCredentialClick = (cert) => {
    // Track credential view
    Analytics.trackEvent({
      category: 'Certifications',
      action: 'View Credential',
      label: cert.title
    });
  };

  return (
    <Section>
      <Title>Licenses & Certifications</Title>
      {certifications.map((cert, index) => (
        <Item key={index}>
          <ItemTitle>{cert.title}</ItemTitle>
          <Subtitle>
            {cert.issuer} · {cert.date}
          </Subtitle>
          {cert.credentialId && <Subtitle>Credential ID: {cert.credentialId}</Subtitle>}
          <Link 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => handleCredentialClick(cert)}
          >
            Show Credential
          </Link>
        </Item>
      ))}
    </Section>
  );
};

export default Certifications; 