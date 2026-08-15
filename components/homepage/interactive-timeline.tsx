'use client';

import { withClientSide } from '../../app/contact/components/client-component';
import { motion } from 'framer-motion';
import { jobs } from '@/lib/data';
import { CompanyLink } from '@/components/company-link';

function InteractiveTimeline() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-[800px]">
              A journey through my professional experience and key achievements.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          {/* Timeline items */}
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <TimelineContent
                      title={job.title}
                      company={job.company}
                      companyUrl={job.companyUrl}
                      duration={job.duration}
                      location={job.location}
                      achievements={job.achievements}
                      techStack={job.techStack}
                    />
                  )}
                </div>

                <div className="relative flex items-center justify-center w-8">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 rounded-full bg-primary"
                  />
                </div>

                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <TimelineContent
                      title={job.title}
                      company={job.company}
                      companyUrl={job.companyUrl}
                      duration={job.duration}
                      location={job.location}
                      achievements={job.achievements}
                      techStack={job.techStack}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineContent({
  title,
  company,
  companyUrl,
  duration,
  location,
  achievements,
  techStack,
}: {
  title: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location: string;
  achievements: string[];
  techStack: string[];
}) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-xl">{title}</h3>
      <div>
        <CompanyLink name={company} url={companyUrl} className="text-lg text-primary font-medium" />
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <span>{duration}</span>
        <span>•</span>
        <span>{location}</span>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Key Achievements:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-sm">
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withClientSide(InteractiveTimeline, { loadingType: 'full' });
