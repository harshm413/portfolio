import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function StatsSection() {
  const { theme } = useTheme();

  const githubStatsUrl = theme === "dark"
    ? "https://github-readme-stats.vercel.app/api?username=harshm413&show_icons=true&hide_border=true&title_color=FFE600&icon_color=9B59B6&text_color=94a3b8&bg_color=00000000&count_private=true"
    : "https://github-readme-stats.vercel.app/api?username=harshm413&show_icons=true&hide_border=true&title_color=B8860B&icon_color=7C3AED&text_color=374151&bg_color=00000000&count_private=true";

  const leetcodeUrl = theme === "dark"
    ? "https://leetcard.jacoblin.cool/harshmishra040103?theme=dark&font=Inter&border=0"
    : "https://leetcard.jacoblin.cool/harshmishra040103?theme=light&font=Inter&border=0";

  return (
    <motion.section
      id="stats"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold">Stats</h2>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">GitHub Activity</h3>
          <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-center min-h-[160px]">
            <img
              src={githubStatsUrl}
              alt="GitHub Stats for harshm413"
              className="max-w-full"
              data-testid="img-github-stats"
            />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">LeetCode Progress</h3>
          <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-center min-h-[160px] overflow-hidden">
            <img
              src={leetcodeUrl}
              alt="LeetCode Stats for harshmishra040103"
              className="max-w-full"
              data-testid="img-leetcode-stats"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
