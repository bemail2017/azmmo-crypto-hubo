
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./ModeToggle";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  backgroundImage?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  showSearch = false, 
  searchPlaceholder, 
  onSearch,
  backgroundImage
}: PageHeaderProps) {
  return (
    <div 
      className={`sticky top-0 z-50 bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-blue-900/50 p-6 ${
        backgroundImage ? 'bg-cover bg-center' : ''
      }`}
      style={backgroundImage ? { backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.90), rgba(15, 23, 42, 0.95)), url(${backgroundImage})` } : {}}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && <p className="text-blue-200 dark:text-blue-200 mt-1">{subtitle}</p>}
        </div>
        
        <div className="flex items-center gap-4">
          {showSearch && (
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <Input
                placeholder={searchPlaceholder || "Tìm kiếm..."}
                className="pl-10 bg-slate-800 border-blue-700 text-white placeholder:text-blue-400 focus:border-blue-500"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
