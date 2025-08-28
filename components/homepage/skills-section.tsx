"use client"

import { motion } from "framer-motion"
import { skills, certifications, education, jobs } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Code, Database, Layers, PenToolIcon as Tool, Server } from "lucide-react"
import { useEffect, useState } from "react";
import Image from "next/image";

// Helper function to render skill icon with fallback
function SkillIcon({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: React.ReactNode;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={32}
      height={32}
      className="object-contain"
      onError={() => setError(true)}
    />
  );
}

export default function SkillsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Education</h2>
            <p className="text-muted-foreground max-w-[800px]">
              My technical expertise, certifications, and educational background.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full comic-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="frontend">
                  <TabsList className="grid grid-cols-5 gap-2 mb-6">
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                    <TabsTrigger value="databases">Databases</TabsTrigger>
                    <TabsTrigger value="other">Other</TabsTrigger>
                  </TabsList>

                  <TabsContent value="frontend">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                      {skills.frontend.map(skill => (
                        <motion.div key={skill.name} variants={item}>
                          <div className="flex flex-col items-center p-3 bg-background rounded-lg border">
                            <div className="w-12 h-12 flex items-center justify-center mb-2 bg-primary/10 rounded-full">
                              <SkillIcon
                                src={skill.icon}
                                alt={skill.name}
                                fallback={<Layers className="h-6 w-6 text-primary" />}
                              />
                            </div>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="backend">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                      {skills.backend.map(skill => (
                        <motion.div key={skill.name} variants={item}>
                          <div className="flex flex-col items-center p-3 bg-background rounded-lg border">
                            <div className="w-12 h-12 flex items-center justify-center mb-2 bg-primary/10 rounded-full">
                              <SkillIcon
                                src={skill.icon}
                                alt={skill.name}
                                fallback={<Database className="h-6 w-6 text-primary" />}
                              />
                            </div>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="tools">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                      {skills.tools.map(skill => (
                        <motion.div key={skill.name} variants={item}>
                          <div className="flex flex-col items-center p-3 bg-background rounded-lg border">
                            <div className="w-12 h-12 flex items-center justify-center mb-2 bg-primary/10 rounded-full">
                              <SkillIcon
                                src={skill.icon}
                                alt={skill.name}
                                fallback={<Tool className="h-6 w-6 text-primary" />}
                              />
                            </div>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="other">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                      {skills.hosting.map(skill => (
                        <motion.div key={skill.name} variants={item}>
                          <div className="flex flex-col items-center p-3 bg-background rounded-lg border">
                            <div className="w-12 h-12 flex items-center justify-center mb-2 bg-primary/10 rounded-full">
                              <SkillIcon
                                src={skill.icon}
                                alt={skill.name}
                                fallback={<Server className="h-6 w-6 text-primary" />}
                              />
                            </div>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="databases">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    >
                      {skills.databases.map(skill => (
                        <motion.div key={skill.name} variants={item}>
                          <div className="flex flex-col items-center p-3 bg-background rounded-lg border">
                            <div className="w-12 h-12 flex items-center justify-center mb-2 bg-primary/10 rounded-full">
                              <SkillIcon
                                src={skill.icon}
                                alt={skill.name}
                                fallback={<Database className="h-6 w-6 text-primary" />}
                              />
                            </div>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Certifications & Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Certifications */}
            <Card className="comic-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="flex flex-col p-4 bg-background rounded-lg border"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                      </div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline mt-2 self-end"
                        >
                          View Certificate
                        </a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="comic-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="flex flex-col p-4 bg-background rounded-lg border"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{edu.institution}</h3>
                          <p className="text-sm">
                            {edu.degree} in {edu.field}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">{edu.years}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Jobs Section - Centered below Skills and Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground max-w-[800px]">
              My career journey and professional achievements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-8 last:mb-0"
              >
                <Card className="comic-border">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{job.duration}</p>
                        <p className="text-sm text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
