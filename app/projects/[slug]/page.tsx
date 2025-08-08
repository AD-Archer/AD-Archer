import { projects, tags, sortProjectsByFeaturedPriority } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Star, Code, Calendar, Images as ImagesIcon, BookOpen, GitBranch, ListChecks, Users, Network, Film, FileCode } from 'lucide-react';
import Link from 'next/link';
import ProjectQR from '@/components/project-qr';
import ShareButtons from '@/components/share-buttons';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import GalleryLightbox from '@/components/gallery-lightbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects
    .filter((project): project is typeof project & { slug: string } => 
      typeof project.slug === 'string' && project.slug.length > 0
    )
    .map(project => ({
      slug: project.slug,
    }));
}

// SEO metadata per project
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  const siteUrl = 'https://www.antonioarcher.com';
  const url = `${siteUrl}/projects/${params.slug}`;
  const mainImage = project.image ? (project.image.startsWith('http') ? project.image : `${siteUrl}${project.image}`) : '';
  const ogGenerated = `${siteUrl}/api/og?title=${encodeURIComponent(project.title)}${project.description ? `&subtitle=${encodeURIComponent(project.description)}` : ''}${mainImage ? `&image=${encodeURIComponent(mainImage)}` : ''}`;
  const images = [{ url: ogGenerated }];
  return {
    title: `${project.title} • Projects` ,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
      url,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: images as any,
    },
  };
}

// Following Next.js convention for App Router pages
export default async function ProjectPage({ params }: any) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const siteUrl = 'https://www.antonioarcher.com';
  const projectUrl = `${siteUrl}/projects/${params.slug}`;

  // Get related projects (excluding current project), prioritizing featured ones
  const relatedProjects = getSimilarProjects(project, projects.filter(p => p.id !== project.id)).slice(0, 3);

  // Helper for GitHub repo info + cached stats
  const githubInfo = project.github ? parseGithubRepo(project.github) : null;
  let githubStats: { stars: number; forks: number; issues: number; lastPushedAt?: string } | null = null;
  if (githubInfo) {
    try {
      const res = await fetch(`https://api.github.com/repos/${githubInfo.owner}/${githubInfo.repo}` as any, {
        // Cache for 1 day; Next will revalidate in the background
        next: { revalidate: 60 * 60 * 24 },
        headers: {
          'User-Agent': 'ad-archer-site',
          'Accept': 'application/vnd.github+json',
        },
      } as any);
      if (res.ok) {
        const data = await res.json();
        githubStats = {
          stars: data.stargazers_count ?? 0,
          forks: data.forks_count ?? 0,
          issues: data.open_issues_count ?? 0,
          lastPushedAt: data.pushed_at,
        };
      }
    } catch {
      // ignore network errors; fall back to no stats
    }
  }

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
                    {project.gallery && project.gallery.length > 0 ? (
                      <a href="#gallery" aria-label="Open gallery" className="block cursor-zoom-in">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="w-full object-cover"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </a>
                    ) : project.link ? (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} demo`} className="block cursor-pointer">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="w-full object-cover"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </Link>
                    ) : project.github ? (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} repository`} className="block cursor-pointer">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="w-full object-cover"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full object-cover"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {project.featured && (
                      <Badge variant="default" className="bg-primary">
                        <Star className="h-3 w-3 mr-1" /> 
                        Featured {project.featuredPriority ? `#${project.featuredPriority}` : ''}
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
                  <p className="text-muted-foreground">{project.description}</p>
      <ShareButtons url={projectUrl} title={project.title} summary={project.description} className="mt-3" />
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

        <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-2 sm:gap-3 pt-2">
                  {project.link && (
          <Button asChild size="sm" className="shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </Link>
                    </Button>
                  )}

                  {project.github && (
          <Button asChild variant="outline" size="sm" className="shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
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

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Project',
              name: project.title,
              description: project.description,
              url: projectUrl,
              image: project.image?.startsWith('http') ? project.image : `${siteUrl}${project.image}`,
              keywords: project.tags?.join(', '),
              sameAs: project.github ? [project.github] : undefined,
              funder: undefined,
              contributor: project.team?.map((m: any) => ({ '@type': 'Person', name: m.name, url: m.link })) || undefined,
              programmingLanguage: project.technologies?.map(t => t.name),
            }),
          }}
        />

        {/* Project Tabs Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 space-y-6">
            {project.gallery && project.gallery.length > 0 && (
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-md border border-border/50">
              <Tabs defaultValue={getDefaultTab(project)}>
                <div
                  className="-mx-4 md:mx-0 overflow-x-auto sticky top-16 z-30 bg-card/80 md:bg-transparent backdrop-blur supports-[backdrop-filter]:bg-card/60 md:static md:top-auto md:z-auto border-b border-border/50 md:border-none"
                  aria-label="Project sections"
                >
                  <TabsList className="inline-flex w-max gap-1 h-auto p-1 snap-x snap-mandatory">
                    {project.gallery && project.gallery.length > 0 && (
                      <TabsTrigger value="gallery" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><ImagesIcon className="h-3 w-3 sm:h-4 sm:w-4" /> Gallery</TabsTrigger>
                    )}
                    {project.caseStudy && (
                      <TabsTrigger value="case" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><BookOpen className="h-3 w-3 sm:h-4 sm:w-4" /> Case Study</TabsTrigger>
                    )}
                    {project.changelog && project.changelog.length > 0 && (
                      <TabsTrigger value="changelog" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><GitBranch className="h-3 w-3 sm:h-4 sm:w-4" /> Changelog</TabsTrigger>
                    )}
                    {project.milestones && project.milestones.length > 0 && (
                      <TabsTrigger value="milestones" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><ListChecks className="h-3 w-3 sm:h-4 sm:w-4" /> Milestones</TabsTrigger>
                    )}
                    {project.team && project.team.length > 0 && (
                      <TabsTrigger value="team" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><Users className="h-3 w-3 sm:h-4 sm:w-4" /> Team</TabsTrigger>
                    )}
                    {project.architecture && (
                      <TabsTrigger value="architecture" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><Network className="h-3 w-3 sm:h-4 sm:w-4" /> Architecture</TabsTrigger>
                    )}
                    {project.video && (
                      <TabsTrigger value="video" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><Film className="h-3 w-3 sm:h-4 sm:w-4" /> Video</TabsTrigger>
                    )}
                    {project.codeSnippets && project.codeSnippets.length > 0 && (
                      <TabsTrigger value="code" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><FileCode className="h-3 w-3 sm:h-4 sm:w-4" /> Code</TabsTrigger>
                    )}
                    {project.github && (
                      <TabsTrigger value="github" className="flex items-center gap-1 px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start"><Github className="h-3 w-3 sm:h-4 sm:w-4" /> GitHub</TabsTrigger>
                    )}
                  </TabsList>
                </div>

                {/* Overview moved below tabs - removed here */}

                {/* Gallery with Lightbox */}
                {project.gallery && project.gallery.length > 0 && (
                  <TabsContent value="gallery" id="gallery">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><ImagesIcon className="mr-2 h-4 w-4 text-primary" /> Gallery</h3>
                    <GalleryLightbox images={project.gallery} title={project.title} />
                  </TabsContent>
                )}

                {/* Case Study */}
                {project.caseStudy && (
                  <TabsContent value="case">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><BookOpen className="mr-2 h-4 w-4 text-primary" /> Case Study</h3>
                    <Tabs defaultValue={project.caseStudy.problem ? 'problem' : project.caseStudy.solution ? 'solution' : project.caseStudy.architecture ? 'architecture' : 'results'}>
                      <div className="-mx-4 md:mx-0 overflow-x-auto sticky top-16 z-20 bg-card/80 md:bg-transparent backdrop-blur supports-[backdrop-filter]:bg-card/60 md:static md:top-auto md:z-auto border-b border-border/50 md:border-none" aria-label="Case study sections">
                        <TabsList className="inline-flex w-max gap-1 h-auto p-1 snap-x snap-mandatory">
                          {project.caseStudy.problem && <TabsTrigger value="problem" className="px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start">Problem</TabsTrigger>}
                          {project.caseStudy.solution && <TabsTrigger value="solution" className="px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start">Solution</TabsTrigger>}
                          {project.caseStudy.architecture && <TabsTrigger value="architecture" className="px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start">Architecture</TabsTrigger>}
                          {project.caseStudy.results && project.caseStudy.results.length > 0 && <TabsTrigger value="results" className="px-2 py-1 text-xs sm:text-sm whitespace-nowrap snap-start">Results</TabsTrigger>}
                        </TabsList>
                      </div>
                      {project.caseStudy.problem && (
                        <TabsContent value="problem"><p className="prose dark:prose-invert max-w-none">{project.caseStudy.problem}</p></TabsContent>
                      )}
                      {project.caseStudy.solution && (
                        <TabsContent value="solution"><p className="prose dark:prose-invert max-w-none">{project.caseStudy.solution}</p></TabsContent>
                      )}
                      {project.caseStudy.architecture && (
                        <TabsContent value="architecture"><p className="prose dark:prose-invert max-w-none">{project.caseStudy.architecture}</p></TabsContent>
                      )}
                      {project.caseStudy.results && project.caseStudy.results.length > 0 && (
                        <TabsContent value="results">
                          <ul className="list-disc pl-5 space-y-1">
                            {project.caseStudy.results.map((r, i) => (<li key={i}>{r}</li>))}
                          </ul>
                        </TabsContent>
                      )}
                    </Tabs>
                  </TabsContent>
                )}

                {/* Changelog */}
                {project.changelog && project.changelog.length > 0 && (
                  <TabsContent value="changelog">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><GitBranch className="mr-2 h-4 w-4 text-primary" /> Changelog</h3>
                    <ul className="space-y-3">
                      {[...project.changelog].sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()).map((c, i) => (
                        <li key={i} className="border border-border/50 rounded-md p-3">
                          <div className="text-sm text-muted-foreground">{new Date(c.date).toLocaleDateString()}</div>
                          <div className="font-medium">{c.title} {c.version && <span className="text-xs text-muted-foreground">v{c.version}</span>}</div>
                          {c.description && <p className="text-sm mt-1">{c.description}</p>}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                )}

                {/* Milestones */}
                {project.milestones && project.milestones.length > 0 && (
                  <TabsContent value="milestones">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><ListChecks className="mr-2 h-4 w-4 text-primary" /> Milestones</h3>
                    <ul className="space-y-3">
                      {[...project.milestones].sort((a,b)=>new Date(a.date).getTime()-new Date(b.date).getTime()).map((m, i) => (
                        <li key={i} className="border border-border/50 rounded-md p-3">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{m.title}</div>
                            {m.status && <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{m.status}</span>}
                          </div>
                          <div className="text-sm text-muted-foreground">{new Date(m.date).toLocaleDateString()}</div>
                          {m.description && <p className="text-sm mt-1">{m.description}</p>}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                )}

                {/* Team */}
                {project.team && project.team.length > 0 && (
                  <TabsContent value="team">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><Users className="mr-2 h-4 w-4 text-primary" /> Team</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.team.map((member, i) => (
                        <li key={i} className="flex items-center gap-3 border border-border/50 rounded-md p-3">
                          <Avatar>
                            <AvatarImage src={member.avatar || ''} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {member.link ? (
                                <Link href={member.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{member.name}</Link>
                              ) : member.name}
                            </div>
                            {member.role && (
                              <div className="text-sm text-muted-foreground">
                                {member.roleLink ? (
                                  <Link href={member.roleLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{member.role}</Link>
                                ) : (
                                  member.role
                                )}
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                )}

                {/* Architecture */}
                {project.architecture && (
                  <TabsContent value="architecture">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><Network className="mr-2 h-4 w-4 text-primary" /> Architecture</h3>
                    {project.architecture.summary && <p className="prose dark:prose-invert max-w-none mb-3">{project.architecture.summary}</p>}
                    {project.architecture.images && project.architecture.images.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                        {project.architecture.images.map((img, i) => (
                          <figure key={i} className="rounded-md overflow-hidden border border-border/50">
                            <Image src={img.src} alt={img.alt || project.title} width={600} height={400} className="w-full h-auto object-cover" />
                            {img.caption && <figcaption className="text-xs text-muted-foreground p-2">{img.caption}</figcaption>}
                          </figure>
                        ))}
                      </div>
                    )}
                    {project.architecture.notes && project.architecture.notes.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1">
                        {project.architecture.notes.map((n, i) => (<li key={i}>{n}</li>))}
                      </ul>
                    )}
                  </TabsContent>
                )}

                {/* Video Walkthrough */}
                {project.video && (
                  <TabsContent value="video">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><Film className="mr-2 h-4 w-4 text-primary" /> Video Walkthrough</h3>
                    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-border/50 bg-black">
                      {renderVideoEmbed(project.video)}
                    </div>
                  </TabsContent>
                )}

                {/* Code Snippets */}
                {project.codeSnippets && project.codeSnippets.length > 0 && (
                  <TabsContent value="code">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><FileCode className="mr-2 h-4 w-4 text-primary" /> Code Snippets</h3>
                    <div className="space-y-4">
                      {project.codeSnippets.map((snip, i) => (
                        <div key={i} className="border border-border/50 rounded-md overflow-hidden">
                          {(snip.title || snip.language) && (
                            <div className="px-3 py-2 text-sm bg-muted/60 flex items-center justify-between">
                              <div className="font-medium">{snip.title || 'Snippet'} {snip.language && <span className="text-muted-foreground">({snip.language})</span>}</div>
                            </div>
                          )}
                          <pre className="p-3 overflow-auto text-sm"><code>{snip.code}</code></pre>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                )}

                {/* GitHub */}
                {project.github && githubInfo && (
                  <TabsContent value="github">
                    <h3 className="text-xl font-bold mb-3 flex items-center"><Github className="mr-2 h-4 w-4 text-primary" /> Repository</h3>
                    <div className="space-y-3">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">{project.github}</Link>
                      {githubStats ? (
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-sm">
                          <div className="border border-border/50 rounded-md p-3"><span className="text-muted-foreground">Stars:</span> <span className="font-medium">{githubStats.stars}</span></div>
                          <div className="border border-border/50 rounded-md p-3"><span className="text-muted-foreground">Forks:</span> <span className="font-medium">{githubStats.forks}</span></div>
                          <div className="border border-border/50 rounded-md p-3"><span className="text-muted-foreground">Open issues:</span> <span className="font-medium">{githubStats.issues}</span></div>
                          {githubStats.lastPushedAt && (
                            <div className="border border-border/50 rounded-md p-3"><span className="text-muted-foreground">Last push:</span> <span className="font-medium">{new Date(githubStats.lastPushedAt).toLocaleDateString()}</span></div>
                          )}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">Stats unavailable at the moment.</p>
                      )}
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </div>
            )}
            {/* Overview always visible below tabs */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-md border border-border/50">
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
            {/* Tech list */}
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
                  {p.slug ? (
                    <Link href={`/projects/${p.slug}`} aria-label={`Open ${p.title} details`} className="block cursor-pointer">
                      <Image
                        src={p.image || '/placeholder.svg'}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </Link>
                  ) : (
                    <Image
                      src={p.image || '/placeholder.svg'}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.tags.slice(0, 3).map((tagId: string) => {
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

// Helpers
function getDefaultTab(project: any): string {
  if (project.gallery?.length) return 'gallery';
  return 'overview';
}

function parseGithubRepo(url: string): { owner: string; repo: string } | null {
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com') return null;
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) return { owner: parts[0], repo: parts[1] };
    return null;
  } catch {
    return null;
  }
}

function getSimilarProjects(base: any, others: any[], limit = 6) {
  const baseTags = new Set(base.tags || []);
  const scored = others.map(p => ({
    p,
    score: (p.tags || []).reduce((acc: number, t: string) => acc + (baseTags.has(t) ? 1 : 0), 0) + (p.featured ? 0.1 : 0),
  }));
  return scored.sort((a,b) => b.score - a.score).map(s => s.p).slice(0, limit);
}

function renderVideoEmbed(video: any) {
  const url: string = video.url;
  const provider = video.provider || inferProvider(url);
  if (provider === 'youtube') {
    const id = extractYouTubeId(url);
    if (id) {
      return (
        <iframe
          title={video.title || 'YouTube video'}
          src={`https://www.youtube.com/embed/${id}`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }
  }
  if (provider === 'vimeo') {
    const id = url.split('/').pop();
    return (
      <iframe
        title={video.title || 'Vimeo video'}
        src={`https://player.vimeo.com/video/${id}`}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }
  if (provider === 'loom') {
    const id = url.split('/').pop();
    return (
      <iframe
        title={video.title || 'Loom video'}
        src={`https://www.loom.com/embed/${id}`}
        className="absolute inset-0 w-full h-full"
        allowFullScreen
      />
    );
  }
  // Fallback
  return <video controls className="absolute inset-0 w-full h-full" src={url} />;
}

function inferProvider(url: string): 'youtube' | 'vimeo' | 'loom' | 'other' {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  if (url.includes('loom.com')) return 'loom';
  return 'other';
}

function extractYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    if (u.searchParams.get('v')) return u.searchParams.get('v');
    const parts = u.pathname.split('/');
    const idx = parts.indexOf('embed');
    if (idx >= 0 && parts[idx+1]) return parts[idx+1];
    return null;
  } catch {
    return null;
  }
}
