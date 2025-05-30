
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSortControls } from "@/components/blog/BlogSortControls";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("hot");
  const { theme } = useTheme();

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "hot") return b.views - a.views;
      if (sortBy === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  const getBackgroundClass = () => {
    if (theme === "light") {
      return "bg-gray-50";
    } else {
      return "bg-slate-900";
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()}`}>
      <PageHeader 
        title="Blog MMO" 
        subtitle="Chia sẻ kiến thức, tool và trick MMO chuyên sâu"
        showSearch={true}
        searchPlaceholder="Tìm kiếm bài viết MMO..."
        onSearch={setSearchTerm}
        backgroundImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
      />
      
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        {/* Sort Controls */}
        <BlogSortControls sortBy={sortBy} onSortChange={setSortBy} />

        {/* Posts Grid */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button className={`${
            theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          } px-8 py-2`}>
            Tải thêm bài viết
          </Button>
        </div>
      </div>
    </div>
  );
}
