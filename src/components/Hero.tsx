import { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLeetcode, SiDevdotto } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone, Copy, Check, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("harshmishra040103@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center pt-20 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(48 100% 50%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center px-3 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary font-mono text-sm">
            &gt; Hello World
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-green-500/30 rounded-full bg-green-500/10 text-green-400 font-mono text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Currently @ Nielsen
          </div>
        </div>

        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-none">
            Harsh Mishra
          </h1>
        </div>

        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl">
          Software Engineer{" "}
          <span className="text-primary">·</span> Backend{" "}
          <span className="text-primary">·</span> Microservices{" "}
          <span className="text-primary">·</span> Cloud &amp; DevOps
        </h2>

        <p className="flex items-center gap-1.5 text-muted-foreground font-mono text-sm">
          <MapPin className="h-3.5 w-3.5" />
          Gurugram, India
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <Button asChild size="lg" className="font-bold rounded-full gap-2" data-testid="button-contact-email">
            <a href="mailto:harshmishra040103@gmail.com">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid="button-download-resume-hero"
          >
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Harsh_Mishra_Resume.pdf">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-5 pt-2">
          <a
            href="https://github.com/harshm413"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-github"
            title="GitHub"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/harsh-mishra-a4116a253"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
            data-testid="link-linkedin"
            title="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://dev.to/harshm03"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-devto"
            title="dev.to"
          >
            <SiDevdotto className="h-5 w-5" />
          </a>
          <a
            href="https://leetcode.com/harshmishra040103"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-[#FFA116] transition-colors"
            data-testid="link-leetcode"
            title="LeetCode"
          >
            <SiLeetcode className="h-5 w-5" />
          </a>
          <a
            href="tel:+918769679345"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-phone"
            title="+91 876-967-9345"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            data-testid="button-copy-email"
            title="Copy email"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                harshmishra040103@gmail.com
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
