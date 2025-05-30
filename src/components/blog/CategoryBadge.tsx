
import { useTheme } from "@/components/ThemeProvider";

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { theme } = useTheme();
  
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "DeFi": "bg-blue-600/20 text-blue-300 border border-blue-500/30",
      "Technical": "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30",
      "Tools": "bg-teal-600/20 text-teal-300 border border-teal-500/30",
      "Telegram": "bg-sky-600/20 text-sky-300 border border-sky-500/30",
      "NFT Gaming": "bg-blue-500/20 text-blue-300 border border-blue-400/30",
      "Privacy": "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
    };
    return colors[category] || "bg-slate-600/20 text-slate-300 border border-slate-500/30";
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
      {category}
    </span>
  );
};
