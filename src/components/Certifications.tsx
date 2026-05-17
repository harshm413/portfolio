import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ImageOff } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  imageFile: string;
}

const certifications: Cert[] = [
  {
    title: "Docker & Kubernetes: The Practical Guide",
    issuer: "Udemy",
    imageFile: "docker-kubernetes.jpg"
  },
  {
    title: "AWS Cloud Practitioner CLF-C02",
    issuer: "Udemy",
    imageFile: "aws-cloud-practitioner.jpg"
  },
  {
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL \u00b7 Jul\u2013Oct 2024",
    imageFile: "nptel-cloud-computing.jpg"
  }
];

export default function Certifications() {
  const [selected, setSelected] = useState<Cert | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold">Certifications</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <p className="text-sm text-muted-foreground font-mono">
        Click any certificate to view it.
      </p>

      <div className="grid grid-cols-1 gap-4">
        {certifications.map((cert, idx) => (
          <motion.button
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            onClick={() => setSelected(cert)}
            className="w-full flex items-center gap-4 bg-background border border-border p-4 rounded-xl hover:border-primary/50 hover:bg-card transition-all text-left cursor-pointer group"
            data-testid={`button-cert-${idx}`}
          >
            <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 group-hover:border-secondary/40 transition-colors shrink-0">
              <Award className="h-5 w-5 text-secondary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-foreground font-medium leading-snug">{cert.title}</p>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">{cert.issuer}</p>
            </div>
            <span className="text-xs text-primary font-mono opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
              View
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="relative z-10 bg-card border border-border rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
              data-testid="modal-cert"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div>
                  <p className="font-semibold text-foreground text-sm">{selected.title}</p>
                  <p className="text-xs text-muted-foreground font-mono">{selected.issuer}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4 bg-background/50 flex items-center justify-center min-h-[300px]">
                <img
                  src={`${import.meta.env.BASE_URL}certificates/${selected.imageFile}`}
                  alt={selected.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg"
                  onError={e => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                  data-testid="img-cert"
                />
                <div
                  className="hidden flex-col items-center gap-3 text-muted-foreground py-12"
                  data-testid="cert-image-fallback"
                >
                  <ImageOff className="h-10 w-10 opacity-30" />
                  <p className="text-sm text-center">
                    Certificate image not found.<br />
                    <span className="font-mono text-xs">Place <span className="text-primary">{selected.imageFile}</span> in <span className="text-primary">public/certificates/</span></span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
