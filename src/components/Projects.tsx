import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Microservices Chat Platform",
    stack: "Node.js · TypeScript · Express · Redis · RabbitMQ · Kubernetes",
    githubLinks: [
      { label: "View on GitHub", url: "https://github.com/harshm413/rest-api-microservices-redis-rabbitmq" }
    ],
    bullets: [
      "4-service system (Auth, User, Chat, API Gateway) with event-driven architecture — Auth publishes registration events via RabbitMQ, User Service consumes and syncs profiles, Chat Service caches user data from events, each service with its own database (MySQL, PostgreSQL, MongoDB)",
      "Shared common package with error handling, Zod request validation, JWT middleware, and inter-service auth via X-Internal-Token headers; Redis caching for conversations and search results",
      "Deployed on k3d Kubernetes cluster (3 nodes) with NGINX Ingress, ConfigMaps, Secrets, and multi-environment namespaces (dev/staging/prod)",
      "Full GitLab CI/CD pipeline — 4 stages (validate \u2192 build \u2192 docker \u2192 deploy), parallel service builds, commit SHA image tagging, multi-node K8s import, and automated health check verification"
    ]
  },
  {
    title: "Patient Management System",
    stack: "Node.js · TypeScript · Python · FastAPI · gRPC · Kafka · Kubernetes",
    githubLinks: [
      { label: "View on GitHub \u00b7 Node.js", url: "https://github.com/harshm413/node-patient-management-system-microservices" },
      { label: "View on GitHub \u00b7 Python", url: "https://github.com/harshm413/python-patient-management-system-microservices" }
    ],
    bullets: [
      "5-service microservices system (Auth, Patient, Billing, Analytics, API Gateway) — API Gateway validates JWT via Auth Service, Patient Service calls Billing via gRPC (Protocol Buffers) and publishes events to Kafka consumed by Analytics Service",
      "Each service with its own PostgreSQL database (Prisma), multi-stage Dockerfiles, Swagger/OpenAPI docs, and Vitest integration tests",
      "Full deployment: Docker Compose (9 containers), k3d Kubernetes cluster (3 nodes, Ingress, multi-replica deployments), and Nginx reverse proxy",
      "Complete Node.js implementation then fully duplicated in Python (FastAPI) — same architecture, same APIs, same deployment setup"
    ]
  },
  {
    title: "Hushh Personal Agent",
    stack: "Next.js · TypeScript · PostgreSQL · Prisma · LangChain · Ollama",
    githubLinks: [
      { label: "View on GitHub", url: "https://github.com/harshm413/hushh-personal-agent" }
    ],
    bullets: [
      "Full-stack AI-powered personal assistant with two AI personas, streaming chat integration (Ollama/OpenAI), encrypted user data vault, and per-persona consent-based data access",
      "Implemented backend API routes, 12-model PostgreSQL schema with Prisma, user authentication, chat history, calendar, notifications, and admin escalation workflows"
    ]
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="h-px bg-border flex-1"></div>
        <a
          href="https://github.com/harshm413"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary hover:underline font-mono flex items-center gap-1 shrink-0"
          data-testid="link-github-all"
        >
          All repos <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-card border border-border p-6 md:p-8 rounded-lg hover:border-primary/40 transition-colors group"
            data-testid={`card-project-${idx}`}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-background rounded-md border border-border group-hover:border-primary/40 transition-colors text-secondary shrink-0">
                  <FolderGit2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-xs font-mono text-primary mt-1 leading-relaxed">{project.stack}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {project.githubLinks.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors font-mono"
                    data-testid={`link-project-github-${idx}-${lIdx}`}
                  >
                    <SiGithub className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <ul className="space-y-2.5 border-t border-border pt-5">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0">&#9657;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
