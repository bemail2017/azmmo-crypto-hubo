
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Package, TrendingUp } from "lucide-react";

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả", count: 24 },
    { id: "social", name: "Tài khoản Social", count: 8 },
    { id: "email", name: "Tài khoản Email", count: 6 },
    { id: "vps", name: "VPS & Server", count: 4 },
    { id: "software", name: "Phần mềm MMO", count: 6 }
  ];

  const products = [
    {
      id: 1,
      name: "Tài khoản X (Twitter) Premium",
      description: "Tài khoản X Premium với blue checkmark, đã verify, tạo từ 2020-2022",
      price: 299000,
      originalPrice: 399000,
      category: "social",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      sold: 245,
      stock: 15,
      features: ["Blue checkmark", "Verify email & phone", "Tạo 2020-2022", "Không bị khóa"],
      tags: ["Hot", "Premium"]
    },
    {
      id: 2,
      name: "Gmail cũ 2015-2018 (PVA)",
      description: "Gmail tạo từ 2015-2018, đã verify phone, uy tín cao cho các dự án MMO",
      price: 15000,
      originalPrice: 25000,
      category: "email",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 892,
      sold: 1240,
      stock: 500,
      features: ["Tạo 2015-2018", "PVA (Phone Verified)", "Recovery email", "Uy tín cao"],
      tags: ["Bán chạy", "Giá rẻ"]
    },
    {
      id: 3,
      name: "VPS MMO 4GB RAM - Singapore",
      description: "VPS chuyên MMO, 4GB RAM, 2 CPU, 50GB SSD, tốc độ cao, IP clean",
      price: 150000,
      originalPrice: 200000,
      category: "vps",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 234,
      sold: 128,
      stock: 8,
      features: ["4GB RAM", "2 CPU Core", "50GB SSD", "IP Singapore clean"],
      tags: ["Chất lượng cao"]
    },
    {
      id: 4,
      name: "AdsPower Antidetect Browser",
      description: "License AdsPower 1 tháng, quản lý multi-account chuyên nghiệp",
      price: 450000,
      originalPrice: 600000,
      category: "software",
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 78,
      sold: 89,
      stock: 25,
      features: ["License 1 tháng", "Unlimited profiles", "Automation", "Support 24/7"],
      tags: ["Software"]
    },
    {
      id: 5,
      name: "Discord Account aged 2019-2021",
      description: "Tài khoản Discord cũ, tạo từ 2019-2021, verify email, join nhiều server",
      price: 35000,
      originalPrice: 50000,
      category: "social",
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 167,
      sold: 334,
      stock: 45,
      features: ["Tạo 2019-2021", "Email verified", "Avatar & username", "Join 50+ servers"],
      tags: ["Aged"]
    },
    {
      id: 6,
      name: "Proxy IPv4 Private 1 tháng",
      description: "Proxy IPv4 private tốc độ cao, 99.9% uptime, support HTTP/HTTPS/SOCKS5",
      price: 120000,
      originalPrice: 150000,
      category: "vps",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 445,
      sold: 567,
      stock: 100,
      features: ["IPv4 Private", "99.9% uptime", "HTTP/HTTPS/SOCKS5", "Thay IP miễn phí"],
      tags: ["Ổn định"]
    }
  ];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      "Hot": "bg-red-600 text-white",
      "Premium": "bg-purple-600 text-white",
      "Bán chạy": "bg-green-600 text-white",
      "Giá rẻ": "bg-blue-600 text-white",
      "Chất lượng cao": "bg-orange-600 text-white",
      "Software": "bg-cyan-600 text-white",
      "Aged": "bg-indigo-600 text-white",
      "Ổn định": "bg-emerald-600 text-white"
    };
    return colors[tag] || "bg-gray-600 text-white";
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="AzMmo Shop" 
        subtitle="Mua sắm tài khoản, tool và dịch vụ MMO chất lượng cao"
        showSearch={true}
        searchPlaceholder="Tìm kiếm sản phẩm..."
        onSearch={setSearchTerm}
      />
      
      <div className="p-6">
        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Danh mục sản phẩm</h3>
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-orange-600 hover:bg-orange-700" 
                  : "border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-slate-800 border-orange-800/30 hover:border-orange-600/50 transition-all duration-300 cursor-pointer group">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-t-lg relative overflow-hidden">
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} className={`${getTagColor(tag)} text-xs`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                  {product.name}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                {/* Features */}
                <div className="space-y-1 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 2 && (
                    <div className="text-sm text-orange-400">+{product.features.length - 2} tính năng khác</div>
                  )}
                </div>
                
                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-400 fill-current" />
                    <span className="text-sm text-white">{product.rating}</span>
                  </div>
                  <span className="text-sm text-slate-400">({product.reviews} đánh giá)</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-orange-400">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-slate-400 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                
                {/* Stats */}
                <div className="flex justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Đã bán: {product.sold}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span>Còn: {product.stock}</span>
                  </div>
                </div>
                
                {/* Buy Button */}
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Mua ngay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3">
            Xem thêm sản phẩm
          </Button>
        </div>
      </div>
    </div>
  );
}
