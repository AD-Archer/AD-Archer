'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { skillsList } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Layers, PenToolIcon as Tool } from 'lucide-react';
import { withClientSide } from './client-component';

// Define a type for our node structure
type SkillNode = {
  id: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  category: string;
  icon: ReactNode;
  power: number;
};

// Define a type for the extended skill with category
type SkillWithCategory = {
  name: string;
  icon: string;
  power: number;
  category: string;
};

function SkillsVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Create skill nodes from all categories
    const nodes: SkillNode[] = skillsList.map(skill => {
      const skillWithCategory = skill as SkillWithCategory;
      return {
        id: skill.name,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 30,
        color: getSkillColor(skillWithCategory.category),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        category: skillWithCategory.category,
        icon: getSkillIcon(skillWithCategory.category),
        power: skill.power,
      };
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nodes of the same category
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].category === nodes[j].category) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach(node => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < node.radius || node.x > canvas.width - node.radius) {
          node.vx *= -1;
        }

        if (node.y < node.radius || node.y > canvas.height - node.radius) {
          node.vy *= -1;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.id === activeSkill ? 'rgba(255, 107, 107, 0.8)' : `${node.color}80`;
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw text
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000';
        ctx.fillText(node.id, node.x, node.y);
      });
    };

    // Handle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let hoveredSkill: string | null = null;

      nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < node.radius) {
          hoveredSkill = node.id;
        }
      });

      setActiveSkill(hoveredSkill);

      // Add attraction to mouse
      nodes.forEach(node => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          node.vx += dx * 0.01;
          node.vy += dy * 0.01;
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeSkill]);

  function getSkillColor(category: string): string {
    switch (category) {
      case 'frontend':
        return '#ff6b6b';
      case 'backend':
        return '#ffd166';
      case 'tools':
        return '#06d6a0';
      default:
        return '#118ab2';
    }
  }

  function getSkillIcon(category: string) {
    switch (category) {
      case 'frontend':
        return <Layers className="h-6 w-6" />;
      case 'backend':
        return <Database className="h-6 w-6" />;
      case 'tools':
        return <Tool className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  }

  if (!isMounted) return null;

  return (
    <div className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Interactive Skills</h2>
            <p className="text-muted-foreground max-w-[800px]">
              Explore my technical skills and expertise. Hover over the nodes to see connections.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <Card className="h-[500px] comic-border overflow-hidden">
              <CardContent className="p-0 h-full">
                <canvas ref={canvasRef} className="w-full h-full"></canvas>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full comic-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {activeSkill ? (
                    <>
                      {getSkillIcon(
                        (skillsList.find(s => s.name === activeSkill) as SkillWithCategory)
                          ?.category || 'other'
                      )}
                      {activeSkill}
                    </>
                  ) : (
                    <>
                      <Code className="h-5 w-5 text-primary" />
                      Skill Details
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {activeSkill ? (
                  <div className="space-y-4">
                    <p>{getSkillDescription(activeSkill)}</p>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${getSkillProficiency(activeSkill)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Hover over a skill in the visualization to see more details about my proficiency
                    and experience.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    React:
      'Advanced proficiency in React, including hooks, context API, and state management. Experience with Next.js and React Native.',
    'Next.js':
      'Expert in Next.js with experience in both the Pages and App Router. Skilled in server components, SSR, and ISR.',
    TypeScript:
      'Strong TypeScript skills with experience in type definitions, generics, and advanced type patterns.',
    'Tailwind CSS':
      'Proficient in Tailwind CSS for rapid UI development with custom configurations and component systems.',
    'Node.js':
      'Experienced in building backend services with Node.js, including REST APIs and microservices.',
    Express:
      'Skilled in Express.js for creating robust server applications with middleware and routing.',
    MongoDB:
      'Experienced with MongoDB for document databases, including aggregation pipelines and indexing strategies.',
    PostgreSQL:
      'Proficient in PostgreSQL for relational data, including complex queries and performance optimization.',
    GraphQL: 'Skilled in GraphQL API development with Apollo Server and Client.',
    Firebase:
      'Experience with Firebase services including Authentication, Firestore, and Cloud Functions.',
    AWS: 'Knowledge of AWS services including S3, Lambda, EC2, and CloudFront.',
    Docker:
      'Proficient in containerization with Docker and Docker Compose for development and deployment.',
    Git: 'Advanced Git skills including branching strategies, rebasing, and CI/CD integration.',
    Figma: 'Skilled in Figma for UI design, prototyping, and developer handoff.',
    Jest: 'Experience with Jest for unit and integration testing of JavaScript applications.',
  };

  return (
    descriptions[skillName] ||
    `Skilled in ${skillName} with professional experience in various projects.`
  );
}

function getSkillProficiency(skillName: string): number {
  // Use the power value from the skillsList if available
  const skill = skillsList.find(s => s.name === skillName);
  if (skill) {
    return skill.power;
  }

  // Fallback to hardcoded values for backward compatibility
  const proficiencies: Record<string, number> = {
    React: 90,
    'Next.js': 85,
    TypeScript: 80,
    'Tailwind CSS': 95,
    'Node.js': 85,
    Express: 80,
    MongoDB: 75,
    PostgreSQL: 70,
    GraphQL: 65,
    Firebase: 80,
    AWS: 60,
    Docker: 70,
    Git: 90,
    Figma: 75,
    Jest: 65,
  };

  return proficiencies[skillName] || 70;
}

export default withClientSide(SkillsVisualization, { loadingType: 'full' });
