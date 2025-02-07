import { jobs } from './data';
import { Section, Title, Item, ItemTitle, Subtitle, Description } from './styles';
import styled from 'styled-components';

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const Achievement = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  font-family: ${props => props.theme.fonts.body};
  
  &:before {
    content: '★';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechBadge = styled.span`
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid ${props => props.theme.colors.primary};
`;

const Jobs = () => (
  <Section>
    <Title>Professional Journey</Title>
    {jobs.map((job, index) => (
      <Item key={index}>
        <ItemTitle>{job.title}</ItemTitle>
        <Subtitle>
          {job.company} · {job.duration}
        </Subtitle>
        <Subtitle>{job.location}</Subtitle>
        <AchievementList>
          {job.achievements.map((achievement, i) => (
            <Achievement key={i}>{achievement}</Achievement>
          ))}
        </AchievementList>
        <TechStack>
          {job.techStack.map((tech, i) => (
            <TechBadge key={i}>{tech}</TechBadge>
          ))}
        </TechStack>
      </Item>
    ))}
  </Section>
);

export default Jobs; 