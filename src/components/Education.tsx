import { motion } from "framer-motion";

const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech CSE",
    period: "2022–2026",
    details: "CGPA: 9.1/10 | NPTEL Cloud Computing Certified"
  },
  {
    school: "The Air Force School (TAFS)",
    degree: "Senior Secondary (XII)",
    period: "",
    details: "86%"
  },
  {
    school: "Kendriya Vidyalaya AFS Rajokri",
    degree: "Secondary (X)",
    period: "",
    details: "96.6%"
  }
];

export default function Education() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-card border border-border p-6 rounded-lg flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">{edu.school}</h3>
              <p className="text-muted-foreground mt-1">{edu.degree}</p>
              <p className="text-primary font-mono text-sm mt-2">{edu.details}</p>
            </div>
            {edu.period && (
              <div className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                {edu.period}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
