
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, BookOpen, CalendarDays, User, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { CategoryBadge } from "./CategoryBadge";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  views: number;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <Card 
      className={`${
        theme === 'dark' 
          ? 'bg-slate-800 border-slate-700/50 hover:border-blue-500/50' 
          : 'bg-white border-gray-200 hover:border-blue-300'
      } transition-all duration-300 cursor-pointer group hover:shadow-lg`}
      onClick={() => navigate(`/detail/blog/${post.id}`)}
    >
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <CategoryBadge category={post.category} />
              <div className={`flex items-center gap-2 text-sm ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                <BookOpen className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h3 className={`text-lg sm:text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {post.title}
            </h3>
            
            <p className={`mb-4 line-clamp-2 text-sm sm:text-base ${
              theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
            }`}>
              {post.excerpt}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className={`px-2 py-1 text-xs rounded-full ${
                    theme === 'dark' 
                      ? 'bg-blue-950/50 text-blue-300 border border-blue-800/30' 
                      : 'bg-blue-50 text-blue-600 border border-blue-200'
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className={`flex items-center justify-between text-sm ${
              theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
            }`}>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-4 text-right">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`${
                  theme === 'dark' 
                    ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-950/30' 
                    : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
                } flex items-center gap-1`}
              >
                Xem chi tiết <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-64 xl:w-80 h-48 rounded-lg flex-shrink-0 overflow-hidden">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
