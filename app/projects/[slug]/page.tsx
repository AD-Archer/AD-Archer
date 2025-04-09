import { projects, tags } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug,
    }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Get related projects (excluding current project)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3)

  return (
    <div className="container px-4 md:px-6 py-16 font-sans">
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="comic-border rounded-lg overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tagId) => {
              const tag = tags.find((t) => t.id === tagId)
              return tag ? (
                <Badge key={tag.id} variant="secondary" className={tag.color}>
                  {tag.name}
                </Badge>
              ) : null
            })}
          </div>

          <div className="flex gap-4">
            {project.link && (
              <Button asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </Link>
              </Button>
            )}

            {project.github && (
              <Button asChild variant="outline">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <h2 className="text-3xl font-bold">Project Details</h2>

        <div className="prose max-w-none">
          <p>
            {project.description}
          </p>

          <h3>Features</h3>
          <ul>
            {project.features && project.features.length > 0 ? (
              project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            ) : project.featured ? (
              <>
                <li>Featured project showcasing advanced development skills</li>
                <li>Responsive design optimized for all devices</li>
                <li>Modern UI/UX with intuitive navigation</li>
              </>
            ) : (
              <>
                <li>Clean, responsive design</li>
                <li>Optimized performance</li>
                <li>User-friendly interface</li>
              </>
            )}
          </ul>

          <h3>Technologies Used</h3>
          <p>This project was built using the following technologies:</p>
          <ul>
            {project.tags.map((tagId) => {
              const tag = tags.find((t) => t.id === tagId)
              return tag ? (
                <li key={tag.id}>{tag.name}</li>
              ) : null
            })}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">More Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProjects.map((p) => (
            <div key={p.id} className="border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src={p.image || "/placeholder.svg"} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{p.description}</p>
                {p.slug && (
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-primary hover:underline text-sm mt-2 inline-block"
                  >
                    View Project
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
