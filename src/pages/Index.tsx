
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, FileText, ShoppingCart, Eye, Star, ExternalLink, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cryptoPosts } from "@/data/cryptoData";
import { airdrops } from "@/data/airdropData";
import { blogPosts } from "@/data/blogData";
import { products } from "@/data/shopData";

export default function Index() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="AzMmo Hub" 
        subtitle="Nền tảng chia sẻ crypto, airdrop, MMO và thương mại điện tử"
      />
      
      <div className="p-4 space-y-6">
        {/* Hero Section - Thu nhỏ lại */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 p-6 text-white">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Chào mừng đến với AzMmo</h2>
            <p className="text-base md:text-lg mb-4 opacity-90">
              Khám phá thế giới crypto, săn airdrop, học MMO và mua sắm công cụ chuyên nghiệp
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 text-sm">
                <Link to="/crypto">Khám phá Crypto</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-sm">
                <Link to="/airdrop">Săn Airdrop</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-sm">
                <Link to="/blog">Blog MMO</Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-18 -translate-x-18"></div>
        </div>

        {/* Crypto Posts Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Crypto Hot</h3>
            </div>
            <Button asChild variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white text-sm">
              <Link to="/crypto">Xem tất cả</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {cryptoPosts.slice(0, 3).map((post) => (
              <Link to={`/crypto/${post.id}`} key={post.id}>
                <Card className="bg-slate-800 border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 cursor-pointer group h-full">
                  <div 
                    className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-t-lg overflow-hidden"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors text-sm leading-tight">{post.title}</h4>
                    <p className="text-blue-200 text-xs mt-2 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 text-xs text-blue-300">
                        <Eye className="w-3 h-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <span className="text-xs text-blue-300">{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Airdrop Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Airdrop Tiềm Năng</h3>
            </div>
            <Button asChild variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white text-sm">
              <Link to="/airdrop">Xem tất cả</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {airdrops.slice(0, 3).map((airdrop) => (
              <Link to={`/airdrop/${airdrop.id}`} key={airdrop.id}>
                <Card className="bg-slate-800 border-cyan-800/30 hover:border-cyan-600/50 transition-all duration-300 cursor-pointer group h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg overflow-hidden">
                        <img src={airdrop.logo} alt={airdrop.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors text-sm">{airdrop.title}</h4>
                        <p className="text-xs text-cyan-300">{airdrop.reward}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < airdrop.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-xs text-cyan-300 ml-2">{airdrop.rating}/5</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-400">Ước tính:</span>
                          <p className="text-cyan-300 font-medium">{airdrop.estimatedValue}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Độ khó:</span>
                          <p className="text-cyan-300 font-medium">{airdrop.difficulty}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-cyan-800/30">
                      <span className="text-xs text-gray-400">Hết hạn: {airdrop.deadline}</span>
                      <div className="text-cyan-400 text-xs flex items-center">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Chi tiết
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog Posts Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Blog MMO</h3>
            </div>
            <Button asChild variant="outline" className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white text-sm">
              <Link to="/blog">Xem tất cả</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {blogPosts.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <Card className="bg-slate-800 border-emerald-800/30 hover:border-emerald-600/50 transition-all duration-300 cursor-pointer group h-full">
                  <div 
                    className="aspect-video bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-t-lg overflow-hidden"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-xs">{post.category}</span>
                      <span className="text-xs text-emerald-300 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2 text-sm leading-tight">{post.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-emerald-300">
                      <Eye className="w-3 h-3" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Shop Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-orange-400" />
              <h3 className="text-xl font-bold text-white">Sản Phẩm Nổi Bật</h3>
            </div>
            <Button asChild variant="outline" className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white text-sm">
              <Link to="/shop">Xem tất cả</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {products.slice(0, 3).map((product) => (
              <Link to={`/shop/${product.id}`} key={product.id}>
                <Card className="bg-slate-800 border-orange-800/30 hover:border-orange-600/50 transition-all duration-300 cursor-pointer group h-full">
                  <div className="relative">
                    <div 
                      className="aspect-square bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-t-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors text-sm leading-tight">{product.name}</h4>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">{product.description}</p>
                    <p className="text-lg font-bold text-orange-400 mt-2">{product.price}</p>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>Đã bán: {product.sold}</span>
                      <span>Còn: {product.stock}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section - Thu nhỏ */}
        <section className="bg-slate-800 rounded-xl p-6 border border-blue-800/30">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Liên Hệ & Hỗ Trợ</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2 text-sm">Email</h4>
              <p className="text-blue-300 text-sm">contact@azmmo.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2 text-sm">Telegram</h4>
              <p className="text-blue-300 text-sm">@AzMmoSupport</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-2 text-sm">Discord</h4>
              <p className="text-blue-300 text-sm">AzMmo Community</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
