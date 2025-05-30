
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface BlogSortControlsProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const BlogSortControls = ({ sortBy, onSortChange }: BlogSortControlsProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-3 mb-6">
      <Button
        variant={sortBy === "hot" ? "default" : "outline"}
        onClick={() => onSortChange("hot")}
        className={sortBy === "hot" 
          ? `${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`
          : `${theme === 'dark' ? 'border-blue-600/50 text-blue-400 hover:bg-blue-600/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`
        }
      >
        <TrendingUp className="w-4 h-4 mr-2" />
        Nổi bật
      </Button>
      <Button
        variant={sortBy === "latest" ? "default" : "outline"}
        onClick={() => onSortChange("latest")}
        className={sortBy === "latest" 
          ? `${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`
          : `${theme === 'dark' ? 'border-blue-600/50 text-blue-400 hover:bg-blue-600/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`
        }
      >
        <Clock className="w-4 h-4 mr-2" />
        Mới nhất
      </Button>
    </div>
  );
};
