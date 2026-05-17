import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function LeetCodeWidget() {
  const { theme } = useTheme();

  const src = theme === "dark"
    ? "https://leetcard.jacoblin.cool/harshmishra040103?theme=dark&font=Inter&border=0"
    : "https://leetcard.jacoblin.cool/harshmishra040103?theme=light&font=Inter&border=0";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded-lg overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      <div className="px-5 py-3 border-b border-border rounded-t-lg">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">LeetCode Stats</span>
      </div>
      <img
        src={src}
        alt="LeetCode stats for harshmishra040103"
        className="w-full block rounded-b-lg"
      />
    </motion.div>
  );
}
