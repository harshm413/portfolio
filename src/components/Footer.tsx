import { SiGithub, SiLeetcode, SiDevdotto } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-20 py-12 bg-card">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-foreground text-center">Open to new opportunities.</h2>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          <a
            href="mailto:harshmishra040103@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </a>
          <a
            href="tel:+918769679345"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Phone</span>
          </a>
          <a
            href="https://github.com/harshm413"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiGithub className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/harsh-mishra-a4116a253"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#0A66C2] transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://dev.to/harshm03"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiDevdotto className="h-5 w-5" />
            <span>dev.to</span>
          </a>
          <a
            href="https://leetcode.com/harshmishra040103"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#FFA116] transition-colors"
          >
            <SiLeetcode className="h-5 w-5" />
            <span>LeetCode</span>
          </a>
        </div>

        <p className="text-sm text-muted-foreground/50 mt-8 font-mono">
          &copy; {new Date().getFullYear()} Harsh Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
