import { jobs } from './data';
import { Section, Title, Item, ItemTitle, Subtitle, Description } from './styles';

const Jobs = () => (
  <Section>
    <Title>Experience</Title>
    {jobs.map((job, index) => (
      <Item key={index}>
        <ItemTitle>{job.title}</ItemTitle>
        <Subtitle>
          {job.company} · {job.duration}
        </Subtitle>
        <Subtitle>{job.location}</Subtitle>
        <Description>{job.description}</Description>
      </Item>
    ))}
  </Section>
);

export default Jobs; 