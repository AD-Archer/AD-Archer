import { projects, tags } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Star, Code, Calendar } from 'lucide-react';
import Link from 'next/link';
import ProjectQR from '@/components/project-qr';

export async function generateStaticParams() {
  return projects
    .filter((project): project is typeof project & { slug: string } => 
      typeof project.slug === 'string' && project.slug.length > 0
    )
    .map(project => ({
      slug: project.slug,
    }));
}

// Following Next.js convention for App Router pages
interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `www.antonioarcher.com/projects/${params.slug}`;

  // Get related projects (excluding current project)
  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6 py-12 font-sans">
        {/* Hero Section */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl -z-10"></div>
          <div className="py-6 px-4 md:px-8">
            <Link
              href="/#projects"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2">
                <div className="comic-border rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative bg-slate-100 dark:bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-700/50 dark:to-slate-800/50"></div>
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full object-cover"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {project.featured && (
                      <Badge variant="default" className="bg-primary">
                        <Star className="h-3 w-3 mr-1" /> Featured
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tagId => {
                    const tag = tags.find(t => t.id === tagId);
                    return tag ? (
                      <span
                        key={tag.id}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} text-white`}
                      >
                        {tag.name}
                      </span>
                    ) : null;
                  })}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.link && (
                    <Button
                      asChild
                      size="default"
                      className="shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </Link>
                    </Button>
                  )}

                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="default"
                      className="shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 shadow-md border border-border/50">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Project Details
              </h2>

              <div className="prose max-w-none dark:prose-invert">
                <p>{project.description}</p>

                <h3 className="text-xl font-bold mt-6 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features && project.features.length > 0 ? (
                    project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))
                  ) : project.featured ? (
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Featured project showcasing advanced development skills
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Responsive design optimized for all devices
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Modern UI/UX with intuitive navigation
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Clean, responsive design
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Optimized performance
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        User-friendly interface
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-5 shadow-md border border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.length > 0
                  ? project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color} text-white`}
                      >
                        {tech.name}
                      </span>
                    ))
                  : project.tags.map(tagId => {
                      const tag = tags.find(t => t.id === tagId);
                      return tag ? (
                        <span
                          key={tag.id}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} text-white`}
                        >
                          {tag.name}
                        </span>
                      ) : null;
                    })}
              </div>
            </div>

            <ProjectQR projectUrl={projectUrl} />
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="mr-2 h-5 w-5 text-primary" />
            More Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map(p => (
              <div
                key={p.id}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-700/50 dark:to-slate-800/50"></div>
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.tags.slice(0, 3).map(tagId => {
                      const tag = tags.find(t => t.id === tagId);
                      return tag ? (
                        <span
                          key={tag.id}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} text-white`}
                        >
                          {tag.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                  {p.slug && (
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-primary hover:underline text-sm font-medium inline-flex items-center"
                    >
                      View Project
                      <ArrowLeft className="ml-2 h-3 w-3 rotate-180" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
