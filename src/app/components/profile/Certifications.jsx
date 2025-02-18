import { certifications } from './data';
import { Section, Title, Item, ItemTitle, Subtitle, Link } from './styles';

const Certifications = () => (
  <Section>
    <Title>Licenses & Certifications</Title>
    {certifications.map((cert, index) => (
      <Item key={index}>
        <ItemTitle>{cert.title}</ItemTitle>
        <Subtitle>
          {cert.issuer} · {cert.date}
        </Subtitle>
        {cert.credentialId && <Subtitle>Credential ID: {cert.credentialId}</Subtitle>}
        <Link href={cert.link} target="_blank" rel="noopener noreferrer">
          Show Credential
        </Link>
      </Item>
    ))}
  </Section>
);

export default Certifications; 