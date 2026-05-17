import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript/TypeScript", "SQL", "Java", "C++"]
  },
  {
    name: "Backend & APIs",
    skills: ["FastAPI", "Express.js", "Next.js", "REST", "gRPC", "GraphQL"]
  },
  {
    name: "Architecture",
    skills: ["Microservices", "API Gateway", "RabbitMQ", "Kafka", "SQS"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "ClickHouse", "MongoDB", "MySQL", "OpenSearch"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Helm", "GitLab CI/CD"]
  },
  {
    name: "Orchestration",
    skills: ["Apache Airflow", "DAGs", "Sensors", "KubernetesPodOperator", "Event-driven ETL"]
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js"]
  },
  {
    name: "Tools",
    skills: ["Git", "Linux", "pytest", "Prisma", "SQLAlchemy", "DBeaver"]
  }
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="space-y-3"
          >
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 bg-background border border-border text-foreground text-sm rounded-full hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
