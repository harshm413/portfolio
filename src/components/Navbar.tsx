import { useState, useEffect } from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Writing", id: "blogs" },
  { label: "LeetCode", id: "leetcode" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      let current = "";
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-primary font-bold text-lg font-mono tracking-tight hover:opacity-75 transition-opacity"
          data-testid="navbar-logo"
        >
          &lt;HM /&gt;
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-link-${link.id}`}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors font-medium ${
                activeSection === link.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden md:flex gap-1.5 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid="button-download-resume"
          >
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Harsh_Mishra_Resume.pdf">
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </Button>

          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            onClick={() => setMenuOpen(m => !m)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Harsh_Mishra_Resume.pdf"
            className="flex items-center gap-2 mt-2 px-3 py-2.5 rounded-md text-sm font-medium text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
