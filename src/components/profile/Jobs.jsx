import { useState } from 'react';
import { jobs } from './data';
import { Section, Title, Item, ItemTitle, Subtitle } from './styles';
import styled from 'styled-components';
import { Analytics } from '../../services/analytics';

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const Achievement = styled.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.2rem;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.1rem;
  line-height: 1.6;
  
  &:before {
    content: '★';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.accent};
    font-size: 1.2rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const TechBadge = styled.span`
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.primary};
`;

const DetailsButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const JobDetails = styled.div`
  padding: 1.5rem;
  background: ${props => props.theme.colors.secondary}10;
  border-radius: 10px;
  margin: 1rem 0;
  border: 2px solid ${props => props.theme.colors.secondary}30;
`;

const Jobs = () => {
  const [visibleJobs, setVisibleJobs] = useState({});
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJobVisibility = (index) => {
    setVisibleJobs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    if (expandedJob !== index) {
      Analytics.trackJobView(jobs[index].title, jobs[index].company);
    }
  };

  const handleJobClick = (job) => {
    setExpandedJob(expandedJob === job.id ? null : job.id);
    if (expandedJob !== job.id) {
      Analytics.trackJobView(job.title, job.company);
    }
  };

  return (
    <Section>
      <Title>Professional Journey</Title>
      {jobs.map((job, index) => (
        <Item key={index}>
          <ItemTitle>{job.title}</ItemTitle>
          <Subtitle>
            {job.company} · {job.duration}
          </Subtitle>
          <Subtitle>{job.location}</Subtitle>
          <DetailsButton onClick={() => toggleJobVisibility(index)}>
            {visibleJobs[index] ? 'Hide Details' : 'View Details'}
          </DetailsButton>
          {visibleJobs[index] && (
            <JobDetails>
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
            </JobDetails>
          )}
        </Item>
      ))}
    </Section>
  );
};

export default Jobs; 