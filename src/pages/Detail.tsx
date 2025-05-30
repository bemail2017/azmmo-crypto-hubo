import { useParams, useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cryptoPosts } from "@/data/cryptoData";
import { airdrops } from "@/data/airdropData";
import { blogPosts } from "@/data/blogData";
import { products } from "@/data/shopData";
import { ArrowLeft, Star, Clock, Eye, ShoppingCart, CalendarDays, User, Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ThemeProvider";

export default function Detail() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  // Find corresponding data based on type and id
  let data: any = null;
  let content = null;
  
  if (type === "crypto") {
    data = cryptoPosts.find(post => post.id === parseInt(id || "0"));
    content = data && (
      <div className="space-y-6">
        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl border border-cyan-500/30">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="px-3 py-1 bg-cyan-500/80 text-gray-900 rounded text-xs font-mono font-bold border border-cyan-400">{data.category}</span>
            <h1 className="text-2xl sm:text-3xl font-mono font-bold text-cyan-300 mt-2 drop-shadow-lg">{data.title}</h1>
          </div>
        </div>
        
        {/* Metadata */}
        <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-4 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-3 text-cyan-300 font-mono">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4 text-cyan-400" />
                <span>{new Date(data.date).toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="h-3 w-px bg-cyan-500/50"></div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>{data.views.toLocaleString()} views</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm mt-2 sm:mt-0 text-cyan-300 font-mono">
              <Tag className="w-4 h-4 text-cyan-400" />
              <span>{data.category}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <Card className="bg-gray-900 border border-cyan-500/30 shadow-2xl">
          <CardContent className="p-6">
            <div dangerouslySetInnerHTML={{ __html: data.content }} className="prose prose-lg max-w-none prose-invert prose-cyan prose-headings:text-cyan-300 prose-headings:font-mono prose-p:text-gray-300 prose-p:font-mono prose-strong:text-cyan-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:pl-4 prose-blockquote:bg-cyan-900/20 prose-pre:bg-gray-800 prose-pre:border prose-pre:border-cyan-500/30 prose-code:text-cyan-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-cyan-500/30"></div>
          </CardContent>
        </Card>
      </div>
    );
  } else if (type === "airdrop") {
    data = airdrops.find(airdrop => airdrop.id === parseInt(id || "0"));
    content = data && (
      <div className="space-y-6">
        {/* Airdrop info card */}
        <Card className="bg-gray-900 border border-cyan-500/30 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg overflow-hidden shadow-md border border-cyan-400">
                <img src={data.logo} alt={data.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-mono font-bold text-cyan-300">{data.title}</h1>
                <p className="text-lg text-cyan-400 font-mono mt-1">{data.reward}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="rounded-lg p-3 bg-gray-800 border border-cyan-500/30">
                <span className="text-sm font-mono font-medium text-cyan-400">Ước tính giá trị</span>
                <p className="text-lg font-mono font-bold text-cyan-300 mt-1">{data.estimatedValue}</p>
              </div>
              <div className="rounded-lg p-3 bg-gray-800 border border-cyan-500/30">
                <span className="text-sm font-mono font-medium text-cyan-400">Độ khó</span>
                <p className="text-lg font-mono font-bold text-cyan-300 mt-1">{data.difficulty}</p>
              </div>
              <div className="rounded-lg p-3 bg-gray-800 border border-cyan-500/30">
                <span className="text-sm font-mono font-medium text-cyan-400">Đánh giá</span>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < data.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-red-900/30 rounded-lg p-3 border border-red-500/50">
              <span className="text-sm font-mono font-medium text-red-400">Thời hạn</span>
              <p className="text-lg font-mono font-bold text-red-300 mt-1">{data.deadline}</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Description content */}
        <Card className="bg-gray-900 border border-cyan-500/30 shadow-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-mono font-bold mb-4 text-cyan-300">Chi tiết airdrop</h2>
            <Separator className="mb-4 bg-cyan-500/30" />
            <div dangerouslySetInnerHTML={{ __html: data.description }} className="prose prose-lg max-w-none prose-invert prose-cyan prose-headings:text-cyan-300 prose-headings:font-mono prose-p:text-gray-300 prose-p:font-mono prose-strong:text-cyan-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:pl-4 prose-blockquote:bg-cyan-900/20 prose-pre:bg-gray-800 prose-pre:border prose-pre:border-cyan-500/30 prose-code:text-cyan-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-cyan-500/30"></div>
          </CardContent>
        </Card>
      </div>
    );
  } else if (type === "blog") {
    data = blogPosts.find(post => post.id === parseInt(id || "0"));
    content = data && (
      <div className="space-y-6">
        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl border border-green-500/30">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="px-3 py-1 bg-green-500/80 text-gray-900 rounded text-xs font-mono font-bold border border-green-400">{data.category}</span>
            <h1 className="text-2xl sm:text-3xl font-mono font-bold text-green-300 mt-2 drop-shadow-lg">{data.title}</h1>
          </div>
        </div>
        
        {/* Metadata */}
        <div className="bg-gray-900 border border-green-500/30 rounded-lg p-4 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-3 text-green-300 font-mono">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 text-green-400" />
                <span>Admin</span>
              </div>
              <div className="h-3 w-px bg-green-500/50"></div>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4 text-green-400" />
                <span>{new Date(data.date).toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="h-3 w-px bg-green-500/50 hidden sm:block"></div>
              <div className="flex items-center gap-1 hidden sm:flex">
                <Clock className="w-4 h-4 text-green-400" />
                <span>{data.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm mt-2 sm:mt-0 text-green-300 font-mono">
              <Eye className="w-4 h-4 text-green-400" />
              <span>{data.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <Card className="bg-gray-900 border border-green-500/30 shadow-2xl">
          <CardContent className="p-6">
            <div dangerouslySetInnerHTML={{ __html: data.content }} className="prose prose-lg max-w-none prose-invert prose-green prose-headings:text-green-300 prose-headings:font-mono prose-p:text-gray-300 prose-p:font-mono prose-strong:text-green-400 prose-a:text-green-400 hover:prose-a:text-green-300 prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-4 prose-blockquote:bg-green-900/20 prose-pre:bg-gray-800 prose-pre:border prose-pre:border-green-500/30 prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-green-500/30"></div>
          </CardContent>
        </Card>
      </div>
    );
  } else if (type === "shop") {
    data = products.find(product => product.id === parseInt(id || "0"));
    content = data && (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product image */}
          <div className="relative rounded-lg overflow-hidden aspect-square bg-gray-100 dark:bg-gray-800 shadow-lg">
            <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
            {data.discount && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded font-bold text-sm">
                -{data.discount}
              </div>
            )}
          </div>
          
          {/* Product details */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold">{data.name}</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{data.description}</p>
            </div>
            
            <Card className={`${
              theme === 'dark' 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-gray-200'
            } shadow-lg`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-orange-500">{data.price}</span>
                  {data.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">{data.originalPrice}</span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className={`rounded-lg p-3 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Đã bán</span>
                    <p className="text-lg font-bold mt-1">{data.sold}</p>
                  </div>
                  <div className={`rounded-lg p-3 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Còn lại</span>
                    <p className="text-lg font-bold mt-1">{data.stock}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Tính năng nổi bật</h3>
                  <div className={`rounded-lg p-3 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <ul className="space-y-1">
                      {data.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium h-10">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Mua ngay
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Product details content */}
        <Card className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        } shadow-lg`}>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Thông tin chi tiết</h2>
            <Separator className="mb-4" />
            <div dangerouslySetInnerHTML={{ __html: data.details }} className={`prose prose-lg max-w-none ${
              theme === 'dark'
                ? 'prose-invert prose-headings:text-white prose-p:text-gray-200 prose-strong:text-white prose-a:text-orange-400 hover:prose-a:text-orange-300'
                : 'prose-gray prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-orange-600 hover:prose-a:text-orange-500'
            } prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-4 prose-blockquote:bg-orange-50 dark:prose-blockquote:bg-orange-900/20 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-700 prose-img:rounded-lg prose-img:shadow-md`}></div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // If data not found
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-900">
        <PageHeader
          title="404 - Not Found"
          subtitle="Nội dung bạn đang tìm kiếm không tồn tại hoặc đã bị xóa"
        />
        <div className="p-6">
          <Button onClick={() => navigate(-1)} variant="outline" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>
        </div>
      </div>
    );
  }
  
  const getBgClass = () => {
    if (theme === "light") {
      return "bg-gray-50";
    } else {
      return "bg-slate-900";
    }
  };
  
  return (
    <div className={`min-h-screen ${getBgClass()}`}>
      <PageHeader
        title={type === "shop" ? data.name : data.title}
        subtitle={type === "shop" ? "Chi tiết sản phẩm" : "Chi tiết bài viết"}
        backgroundImage={type === "shop" ? undefined : data.image}
      />
      
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)} 
          className="mb-6 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 font-mono"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại
        </Button>
        
        {content}
      </div>
    </div>
  );
}
