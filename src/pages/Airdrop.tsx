
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Calendar, DollarSign, Users } from "lucide-react";

export default function Airdrop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("all");

  const airdrops = [
    {
      id: 1,
      title: "LayerZero Airdrop",
      description: "Cross-chain protocol với tiềm năng airdrop rất cao. Đã được xác nhận sẽ có token.",
      rating: 5,
      platform: "Multi-chain",
      logo: "/placeholder.svg",
      reward: "$ZRO",
      estimatedValue: "$500-2000",
      deadline: "2024-06-30",
      difficulty: "Medium",
      participants: "2M+",
      status: "Active",
      tags: ["Confirmed", "High Value", "Cross-chain"]
    },
    {
      id: 2,
      title: "Starknet Ecosystem",
      description: "ZK-rollup solution trên Ethereum. Nhiều dApp trong hệ sinh thái có tiềm năng airdrop.",
      rating: 4,
      platform: "Ethereum L2",
      logo: "/placeholder.svg",
      reward: "$STRK",
      estimatedValue: "$200-800",
      deadline: "2024-05-15",
      difficulty: "Easy",
      participants: "1.5M+",
      status: "Active",
      tags: ["ZK-Rollup", "Ethereum", "DeFi"]
    },
    {
      id: 3,
      title: "zkSync Era",
      description: "Layer 2 scaling solution phổ biến. Đã xác nhận airdrop cho early users.",
      rating: 4,
      platform: "Ethereum L2",
      logo: "/placeholder.svg",
      reward: "$ZK",
      estimatedValue: "$300-1000",
      deadline: "2024-04-20",
      difficulty: "Easy",
      participants: "3M+",
      status: "Active",
      tags: ["Confirmed", "Layer 2", "Easy"]
    },
    {
      id: 4,
      title: "Scroll Network",
      description: "ZK-rollup mới với công nghệ tiên tiến. Potential airdrop cho testnet users.",
      rating: 3,
      platform: "Ethereum L2",
      logo: "/placeholder.svg",
      reward: "$SCR",
      estimatedValue: "$100-500",
      deadline: "2024-07-31",
      difficulty: "Medium",
      participants: "800K+",
      status: "Active",
      tags: ["Potential", "Testnet", "ZK-Rollup"]
    },
    {
      id: 5,
      title: "Blast Network",
      description: "Layer 2 với yield native. Airdrop đã được xác nhận cho điểm users.",
      rating: 5,
      platform: "Ethereum L2",
      logo: "/placeholder.svg",
      reward: "$BLAST",
      estimatedValue: "$800-3000",
      deadline: "2024-03-31",
      difficulty: "Hard",
      participants: "500K+",
      status: "Ending Soon",
      tags: ["Confirmed", "High Value", "Points System"]
    },
    {
      id: 6,
      title: "Celestia Ecosystem",
      description: "Modular blockchain network với nhiều dApp ecosystem có tiềm năng airdrop.",
      rating: 3,
      platform: "Cosmos",
      logo: "/placeholder.svg",
      reward: "$TIA Related",
      estimatedValue: "$50-300",
      deadline: "2024-08-15",
      difficulty: "Medium",
      participants: "400K+",
      status: "Active",
      tags: ["Modular", "Cosmos", "Ecosystem"]
    }
  ];

  const filteredAirdrops = airdrops
    .filter(airdrop => 
      airdrop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airdrop.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(airdrop => 
      filterRating === "all" || airdrop.rating >= parseInt(filterRating)
    )
    .sort((a, b) => b.rating - a.rating);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-600";
      case "Ending Soon": return "bg-yellow-600";
      case "Ended": return "bg-red-600";
      default: return "bg-gray-600";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-400";
      case "Medium": return "text-yellow-400";
      case "Hard": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Airdrop Hunter" 
        subtitle="Theo dõi và săn lùng các airdrop tiềm năng nhất"
        showSearch={true}
        searchPlaceholder="Tìm kiếm airdrop..."
        onSearch={setSearchTerm}
      />
      
      <div className="p-6">
        {/* Filter Controls */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <Button
            variant={filterRating === "all" ? "default" : "outline"}
            onClick={() => setFilterRating("all")}
            className={filterRating === "all" ? "bg-cyan-600 hover:bg-cyan-700" : "border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"}
          >
            Tất cả
          </Button>
          <Button
            variant={filterRating === "5" ? "default" : "outline"}
            onClick={() => setFilterRating("5")}
            className={filterRating === "5" ? "bg-cyan-600 hover:bg-cyan-700" : "border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"}
          >
            5 sao
          </Button>
          <Button
            variant={filterRating === "4" ? "default" : "outline"}
            onClick={() => setFilterRating("4")}
            className={filterRating === "4" ? "bg-cyan-600 hover:bg-cyan-700" : "border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"}
          >
            4+ sao
          </Button>
          <Button
            variant={filterRating === "3" ? "default" : "outline"}
            onClick={() => setFilterRating("3")}
            className={filterRating === "3" ? "bg-cyan-600 hover:bg-cyan-700" : "border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"}
          >
            3+ sao
          </Button>
        </div>

        {/* Airdrop Cards Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAirdrops.map((airdrop) => (
            <Card key={airdrop.id} className="bg-slate-800 border-cyan-800/30 hover:border-cyan-600/50 transition-all duration-300 cursor-pointer group h-fit">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{airdrop.title.slice(0, 2)}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white group-hover:text-cyan-400 transition-colors text-lg">
                        {airdrop.title}
                      </CardTitle>
                      <p className="text-sm text-cyan-300">{airdrop.platform}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(airdrop.status)} text-white`}>
                    {airdrop.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < airdrop.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                    ))}
                    <span className="text-sm text-cyan-300 ml-2">{airdrop.rating}/5</span>
                  </div>
                  <span className={`text-sm font-medium ${getDifficultyColor(airdrop.difficulty)}`}>
                    {airdrop.difficulty}
                  </span>
                </div>

                {/* Description */}
                <p className="text-purple-200 text-sm">{airdrop.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {airdrop.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-cyan-600/20 text-cyan-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-purple-300">
                    <DollarSign className="w-4 h-4" />
                    <span>{airdrop.estimatedValue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <Users className="w-4 h-4" />
                    <span>{airdrop.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(airdrop.deadline).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className="text-cyan-400 font-medium">
                    {airdrop.reward}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Xem hướng dẫn
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3">
            Tải thêm airdrop
          </Button>
        </div>
      </div>
    </div>
  );
}
