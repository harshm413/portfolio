import { motion } from "framer-motion";

const projects = [
  {
    title: "Unified Schema",
    description: "Platform powering AskNielsen analytics across USA + 28 NGA countries",
    bullets: [
      "Built Python SDK client libraries wrapping internal MDL and Trino (QaaS) APIs — adopted as team's standard interface for schema registration, data ingestion, and query execution",
      "Designed data quality validation framework (pytest) with 5 validator types (syntax, uniqueness, non-null, allowed-values, cross-table referential integrity) — running via scheduled Airflow DAGs across 29 country datasets",
      "Built observability logging system (SQLAlchemy + PostgreSQL on RDS) tracking SQS events, worker DAG states, and validation results for full pipeline traceability",
      "Developed SQS event listener DAG processing incoming messages and triggering country-specific ETL worker pipelines",
      "Implemented DAG failure alerting via email and Google Chat webhooks with error tracebacks and task metadata"
    ]
  },
  {
    title: "NTS \u2014 Kubernetes CronJob \u2192 Airflow Migration",
    description: "Migration of daily sync-check scripts",
    bullets: [
      "Migrated daily sync-check scripts from Kubernetes CronJobs to company Airflow using KubernetesPodOperator — added timezone mismatch filtering stage and enhanced alert details with Google Chat webhooks",
      "Set up GitLab CI/CD pipeline to build Docker images and push to GitLab Container Registry, pulled images in KPO DAGs, configured cross-account S3 access via IAM assume role, and secured Airflow variables with auto-masking for credentials"
    ]
  },
  {
    title: "NTS \u2014 Big Data + Panel Data Pipeline Migration",
    description: "Migration of TV rating data pipelines",
    bullets: [
      "Migrated 6 weekly TV rating data files to a new format — modified legacy shell scripts and database config on a production Linux server to auto-detect and process new file patterns from an RSS-based data feed",
      "Built isolated test pipeline on production server, validated bulk loading of 200K+ records with zero errors across 4 final database tables, eliminating a manual weekly download-and-load workflow"
    ]
  }
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <h3 className="text-2xl font-bold text-foreground">Nielsen</h3>
          <p className="text-primary font-mono text-sm">Mar 2025 – Present · Gurugram, India</p>
        </div>
        <p className="text-muted-foreground text-sm font-mono">Software Development Engineer Intern</p>
      </div>

      <div className="space-y-12 mt-8 border-l border-border pl-6 md:pl-8 ml-2">
        {projects.map((project, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-[33px] md:-left-[41px] top-2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
            <h4 className="text-xl font-bold text-foreground mb-1">{project.title}</h4>
            <p className="text-muted-foreground mb-4 font-mono text-sm">{project.description}</p>
            <ul className="space-y-3">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-muted-foreground flex gap-3">
                  <span className="text-primary mt-1.5 opacity-60 shrink-0">&#9657;</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
