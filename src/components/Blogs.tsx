import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

const blogs = [
  {
    title: "Kubernetes Networking Finally Explained (From User \u2192 Pod \u2192 User)",
    description: "A complete deep-dive into how traffic flows inside a Kubernetes cluster — from ingress to pod to response.",
    url: "https://dev.to/harshm03/kubernetes-networking-finally-explained-from-user-pod-user-5c8e",
    tags: ["kubernetes", "microservices", "networking"],
    reading_time: 4,
    published_at: "Jan 2026",
    cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwlusn3v0o7mgeanwsmik.png"
  },
  {
    title: "Mastering RabbitMQ in Microservices: A JavaScript Guide to Async Magic",
    description: "How to build event-driven microservices with RabbitMQ — exchanges, queues, consumers, and real patterns that work in production.",
    url: "https://dev.to/harshm03/mastering-rabbitmq-in-microservices-a-javascript-guide-to-async-magic-1a7c",
    tags: ["rabbitmq", "microservices", "async"],
    reading_time: 10,
    published_at: "Dec 2025",
    cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy9hk5j5g8s709vmv9x5a.png"
  },
  {
    title: "Complete GitLab CI/CD Specification",
    description: "Every single key, subkey, and value in the GitLab CI/CD YAML spec — the reference you'll actually keep open.",
    url: "https://dev.to/harshm03/complete-gitlab-cicd-specification-5cj0",
    tags: ["gitlab", "cicd"],
    reading_time: 5,
    published_at: "Nov 2025",
    cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftz49rbumaq8n8gn5wods.png"
  },
  {
    title: "Complete Docker Compose Specification",
    description: "A true reference for Docker Compose — every option, every subkey, with context on when and why to use each.",
    url: "https://dev.to/harshm03/complete-docker-compose-specification-2g9o",
    tags: ["docker", "microservices"],
    reading_time: 4,
    published_at: "Nov 2025",
    cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc984b4kclwvr1h4tdl8e.png"
  },
  {
    title: "Comprehensive Guide to Kubernetes YAML",
    description: "An expanded, detailed guide to every Kubernetes resource type — organized, annotated, and built for real-world use.",
    url: "https://dev.to/harshm03/comprehensive-guide-to-k8s-yaml-4c3c",
    tags: ["kubernetes"],
    reading_time: 11,
    published_at: "Nov 2025",
    cover_image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fosp25m7xks0ahjcupw4s.png"
  },
  {
    title: "Full-Featured Express.js Project Inspired by Laravel's MVC Structure",
    description: "How to bring Laravel's organized, opinionated MVC structure into an Express.js project — with real examples and file structure.",
    url: "https://dev.to/harshm03/full-featured-expressjs-project-inspired-by-laravels-mvc-structure-al0",
    tags: ["express", "javascript", "mvc"],
    reading_time: 9,
    published_at: "Mar 2025",
    cover_image: undefined
  }
];

export default function Blogs() {
  return (
    <motion.section
      id="blogs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Writing</h2>
        <div className="h-px bg-border flex-1"></div>
        <a
          href="https://dev.to/harshm03"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary hover:underline font-mono flex items-center gap-1 shrink-0"
          data-testid="link-devto-all"
        >
          All articles <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogs.map((blog, idx) => (
          <motion.a
            key={idx}
            href={blog.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all flex flex-col"
            data-testid={`card-blog-${idx}`}
          >
            {blog.cover_image && (
              <div className="w-full h-28 overflow-hidden">
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-5 flex flex-col gap-2 flex-1">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2 text-sm md:text-base">
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                {blog.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-wrap gap-1.5">
                  {blog.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blog.reading_time}m read
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
