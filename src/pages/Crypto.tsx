
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, TrendingUp, Clock, CalendarDays, Tag, User, ChevronRight } from "lucide-react";

export default function Crypto() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("hot");

  const cryptoPosts = [
    {
      id: 1,
      title: "Bitcoin tăng vượt $75,000 - Phân tích kỹ thuật chi tiết và dự đoán chu kỳ thị trường",
      excerpt: "Phân tích sâu về việc Bitcoin vượt mốc $75,000 và những yếu tố ảnh hưởng đến giá trong thời gian tới, bao gồm các chỉ báo on-chain và phân tích kỹ thuật.",
      views: 4250,
      date: "2024-05-22",
      author: "CryptoAnalyst",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1200",
      tags: ["Bitcoin", "Technical Analysis", "Price Prediction"],
      content: "Bitcoin đã vượt qua mốc $75,000 trong tuần này, thiết lập một mức cao mới mọi thời đại (ATH). Trong bài phân tích này, chúng tôi sẽ đi sâu vào các yếu tố kỹ thuật và on-chain đã thúc đẩy động thái tăng giá mạnh mẽ này.\n\nCác chỉ báo on-chain cho thấy lượng Bitcoin rời khỏi các sàn giao dịch đang ở mức cao nhất trong 3 năm, trong khi các địa chỉ nắm giữ lâu dài (hodlers) tiếp tục tích lũy. Mô hình Stock-to-Flow hiện đang cho thấy Bitcoin đang giao dịch đúng theo dự đoán cho chu kỳ halving lần thứ 4.\n\nVề phân tích kỹ thuật, Bitcoin đã phá vỡ vùng kháng cự quan trọng ở mức $69,000 với khối lượng giao dịch cao, xác nhận xu hướng tăng mạnh. Các chỉ báo RSI và MACD đều đang cho thấy tín hiệu tích cực.\n\nDự đoán về xu hướng tương lai, chúng tôi nhận thấy khả năng cao Bitcoin sẽ tiếp tục tăng lên vùng $80,000-85,000 trước khi có một đợt điều chỉnh ngắn hạn. Các nhà đầu tư nên cân nhắc chiến lược DCA và quản lý rủi ro phù hợp trong giai đoạn này."
    },
    {
      id: 2,
      title: "Top 10 Altcoin tiềm năng nhất cho năm 2024 - Phân tích toàn diện và chiến lược đầu tư",
      excerpt: "Danh sách 10 altcoin có tiềm năng tăng trưởng mạnh trong năm 2024 dựa trên fundamentals, tiến độ phát triển và động lực thị trường.",
      views: 3890,
      date: "2024-05-20",
      author: "AltcoinHunter",
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=1200",
      tags: ["Altcoin", "Investment", "2024"],
      content: "Năm 2024 đánh dấu một chu kỳ bùng nổ mới của thị trường tiền điện tử, với nhiều altcoin có tiềm năng tăng trưởng vượt trội. Dựa trên phân tích fundamentals, tiến độ phát triển và tình hình thị trường, chúng tôi đã tổng hợp danh sách 10 altcoin tiềm năng nhất cho năm 2024.\n\n1. Ethereum (ETH) - Với việc hoàn thiện quá trình nâng cấp lên Ethereum 2.0 và việc áp dụng EIP-1559, ETH có tiềm năng tăng trưởng mạnh mẽ.\n\n2. Solana (SOL) - Mạng lưới giao dịch cực nhanh và phí thấp, với hệ sinh thái DeFi và NFT đang phát triển mạnh.\n\n3. Polygon (MATIC) - Giải pháp layer 2 cho Ethereum, giúp giảm phí giao dịch và tăng tốc độ xử lý.\n\n4. Avalanche (AVAX) - Nền tảng smart contract với khả năng mở rộng cao và tốc độ nhanh.\n\n5. Chainlink (LINK) - Giải pháp oracle hàng đầu, cung cấp dữ liệu thực cho các ứng dụng blockchain.\n\n6. Cosmos (ATOM) - Hệ sinh thái blockchain có khả năng tương tác giữa các chuỗi khác nhau.\n\n7. Arbitrum (ARB) - Giải pháp layer 2 mới nổi với khả năng mở rộng cao.\n\n8. The Graph (GRT) - Protocol chỉ mục và truy vấn dữ liệu blockchain.\n\n9. Injective (INJ) - Sàn giao dịch phi tập trung không cần phép với phí giao dịch 0.\n\n10. Starknet (STRK) - Giải pháp layer 2 mới sử dụng công nghệ ZK-rollup.\n\nMỗi dự án trên đều có những đặc điểm riêng biệt về công nghệ, nhóm phát triển và tiềm năng thị trường, nhưng đều hứa hẹn sẽ mang lại lợi nhuận đáng kể cho các nhà đầu tư trong năm 2024."
    },
    {
      id: 3,
      title: "Hướng dẫn DCA (Dollar Cost Averaging) hiệu quả cho thị trường Crypto 2024",
      excerpt: "Chiến lược DCA chi tiết và các công cụ, nền tảng tốt nhất để thực hiện DCA trong thị trường crypto hiện tại.",
      views: 5200,
      date: "2024-05-18",
      author: "CryptoEducator",
      image: "https://images.unsplash.com/photo-1642790551116-304f65569ade?auto=format&fit=crop&q=80&w=1200",
      tags: ["DCA", "Strategy", "Beginner"],
      content: "Dollar Cost Averaging (DCA) là một trong những chiến lược đầu tư hiệu quả nhất cho thị trường crypto, đặc biệt phù hợp với người mới bắt đầu. Bài viết này sẽ hướng dẫn chi tiết cách thực hiện DCA hiệu quả trong năm 2024.\n\nDCA là gì?\nDCA là chiến lược đầu tư theo đó bạn mua một lượng tiền điện tử cố định theo các khoảng thời gian đều đặn (hàng tuần, hàng tháng), bất kể giá tại thời điểm đó là bao nhiêu. Điều này giúp bạn trung bình hóa giá mua theo thời gian, giảm thiểu tác động của biến động giá ngắn hạn.\n\nLợi ích của DCA:\n- Giảm stress và áp lực tâm lý khi thị trường biến động\n- Tránh được việc \"timing the market\" (dự đoán thời điểm thị trường)\n- Kỷ luật đầu tư tốt hơn\n- Phù hợp với người bận rộn, không có nhiều thời gian theo dõi thị trường\n\nCách thiết lập DCA hiệu quả:\n1. Chọn khoản tiền đầu tư cố định mỗi lần (ví dụ: $50, $100, $500)\n2. Xác định tần suất đầu tư (hàng tuần, hai tuần một lần, hàng tháng)\n3. Chọn các đồng tiền để đầu tư (nên tập trung vào BTC, ETH và một số altcoin tiềm năng)\n4. Sử dụng nền tảng hỗ trợ DCA tự động\n\nCác nền tảng DCA tốt nhất 2024:\n- Binance: Hỗ trợ Auto-Invest với phí giao dịch thấp\n- Coinbase: Dễ sử dụng, có tính năng mua định kỳ\n- SwissBorg: UI thân thiện, nhiều tính năng hỗ trợ DCA\n- FTX: Phí thấp, đa dạng tài sản\n\nPhân bổ danh mục DCA:\n- 50-60% vào Bitcoin (BTC)\n- 20-30% vào Ethereum (ETH)\n- 10-20% vào các Altcoin tiềm năng\n\nCách theo dõi hiệu suất DCA:\n- Sử dụng các công cụ như CoinTracking, CoinStats hoặc FTX Portfolio\n- Theo dõi giá trung bình mua vào theo thời gian\n- Đánh giá hiệu suất hàng quý\n\nLưu ý quan trọng khi thực hiện DCA:\n- Sử dụng tiền thừa, không vay mượn để đầu tư\n- Kiên nhẫn và kiên trì với kế hoạch\n- Thường xuyên đánh giá lại danh mục đầu tư (3-6 tháng/lần)\n- Điều chỉnh phân bổ nếu cần thiết, nhưng không thay đổi kế hoạch DCA\n\nVới chiến lược DCA được thiết lập đúng cách, bạn có thể xây dựng một danh mục đầu tư crypto vững chắc trong dài hạn, giảm thiểu rủi ro và tối ưu hóa lợi nhuận tiềm năng."
    },
    {
      id: 4,
      title: "Ethereum 2.0 và tác động đến thị trường DeFi - Phân tích hệ sinh thái và cơ hội đầu tư",
      excerpt: "Cập nhật chi tiết về Ethereum 2.0 và những thay đổi tích cực đối với hệ sinh thái DeFi, các dự án tiềm năng và cơ hội đầu tư.",
      views: 2650,
      date: "2024-05-16",
      author: "DeFiExpert",
      image: "https://images.unsplash.com/photo-1622632169740-85c306c57aa2?auto=format&fit=crop&q=80&w=1200",
      tags: ["Ethereum", "DeFi", "ETH 2.0"],
      content: "Ethereum 2.0 (Serenity) đã hoàn thành quá trình nâng cấp quan trọng, chuyển đổi từ cơ chế đồng thuận Proof-of-Work (PoW) sang Proof-of-Stake (PoS). Bài viết này sẽ phân tích chi tiết về những tác động của Ethereum 2.0 đến hệ sinh thái DeFi và các cơ hội đầu tư tiềm năng.\n\nNhững thay đổi chính của Ethereum 2.0:\n1. Chuyển sang cơ chế đồng thuận PoS, giảm tiêu thụ năng lượng 99.95%\n2. Sharding: Tăng khả năng mở rộng, cho phép xử lý hàng nghìn giao dịch mỗi giây\n3. Giảm phí gas và tăng tốc độ xác nhận giao dịch\n4. Cải thiện bảo mật và độ tin cậy của mạng lưới\n\nTác động đến hệ sinh thái DeFi:\n- Giảm phí giao dịch: Các ứng dụng DeFi trở nên tiếp cận hơn với người dùng nhỏ lẻ\n- Tăng tốc độ giao dịch: Cải thiện trải nghiệm người dùng và hiệu quả của các ứng dụng DeFi\n- Mở rộng quy mô: Khả năng phục vụ hàng triệu người dùng cùng lúc\n- Tính bền vững: Giảm tác động môi trường, thu hút đầu tư ESG\n- Tăng tính ổn định và an toàn cho các ứng dụng DeFi\n\nCác dự án DeFi tiềm năng trên Ethereum 2.0:\n1. Aave (AAVE): Nền tảng cho vay hàng đầu, đang tận dụng khả năng mở rộng của ETH 2.0 để giảm chi phí và cải thiện UX\n2. Uniswap (UNI): Sàn giao dịch phi tập trung với phiên bản V4 sắp ra mắt tận dụng các tính năng mới của ETH 2.0\n3. Lido Finance (LDO): Dịch vụ staking ETH lỏng, được hưởng lợi trực tiếp từ việc chuyển sang PoS\n4. Chainlink (LINK): Oracle phi tập trung, cung cấp dữ liệu cho hệ sinh thái DeFi trên ETH 2.0\n5. Maker (MKR): Protocol stablecoin hàng đầu, với hiệu quả cao hơn trên ETH 2.0\n\nCơ hội đầu tư với ETH 2.0:\n- ETH staking: Kiếm lợi nhuận thụ động từ việc staking ETH (hiện tại khoảng 3-5% APY)\n- Đầu tư vào các token quản trị của các protocol DeFi hàng đầu\n- Tham gia vào các pool thanh khoản trên các sàn DEX với phí gas thấp hơn\n- Khám phá các ứng dụng DeFi mới xây dựng đặc biệt cho ETH 2.0\n\nThách thức và rủi ro:\n- Cạnh tranh từ các blockchain layer 1 khác như Solana, Avalanche\n- Các vấn đề kỹ thuật có thể phát sinh trong quá trình triển khai đầy đủ ETH 2.0\n- Rủi ro quy định và pháp lý đối với không gian DeFi\n\nTổng kết, Ethereum 2.0 mang đến một bước ngoặt quan trọng cho hệ sinh thái DeFi, với nhiều cải tiến đáng kể về hiệu suất, khả năng mở rộng và tính bền vững. Các nhà đầu tư nên chú ý đến các dự án đang tận dụng hiệu quả những cải tiến này để phát triển và mở rộng dịch vụ của họ."
    },
    {
      id: 5,
      title: "Solana vs Cardano: So sánh chi tiết và phân tích kỹ thuật cho nhà đầu tư 2024",
      excerpt: "So sánh toàn diện giữa Solana và Cardano về công nghệ, hệ sinh thái và tiềm năng đầu tư trong dài hạn.",
      views: 3890,
      date: "2024-05-14",
      author: "BlockchainAnalyst",
      image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=1200",
      tags: ["Solana", "Cardano", "Comparison"],
      content: "Solana và Cardano là hai trong số những blockchain layer 1 hàng đầu trên thị trường, cả hai đều cung cấp các giải pháp smart contract và nhắm đến việc giải quyết các vấn đề mà Ethereum đang gặp phải. Bài viết này sẽ so sánh chi tiết giữa hai blockchain này để giúp nhà đầu tư có cái nhìn toàn diện.\n\nKiến trúc và Công nghệ:\n\nSolana:\n- Cơ chế đồng thuận: Proof of History (PoH) kết hợp với Proof of Stake (PoS)\n- TPS (giao dịch mỗi giây): Lên đến 65,000 TPS trên mainnet\n- Thời gian block: 400ms\n- Phí giao dịch cực thấp: Trung bình $0.00025 mỗi giao dịch\n- Ngôn ngữ lập trình: Rust, C, C++\n\nCardano:\n- Cơ chế đồng thuận: Ouroboros (một dạng PoS)\n- TPS: Khoảng 250-1,000 TPS (với Hydra có thể đạt 1 triệu TPS)\n- Thời gian block: 20 giây\n- Phí giao dịch: Trung bình $0.1-0.3 mỗi giao dịch\n- Ngôn ngữ lập trình: Haskell (Plutus)\n\nPhương pháp phát triển:\n\nSolana: Tập trung vào hiệu suất và tốc độ, phương châm \"Move fast and build things\"\nCardano: Phương pháp học thuật, dựa trên nghiên cứu, phát triển dần dần và cẩn thận\n\nHệ sinh thái:\n\nSolana:\n- DeFi: Tổng giá trị khóa (TVL): ~$2.5 tỷ\n- Các dự án nổi bật: Raydium, Serum, Marinade Finance, Solend\n- NFT: OpenSea, Magic Eden, Metaplex\n- Gaming/Metaverse: Star Atlas, Aurory\n- Stablecoin: USDC, USDT đã tích hợp trực tiếp\n\nCardano:\n- DeFi: TVL: ~$250 triệu\n- Các dự án nổi bật: Minswap, WingRiders, SundaeSwap\n- NFT: CNFT.IO, Jpg.store\n- Gaming: Pavia\n- Stablecoin: Djed\n\nHiệu suất thị trường:\n\nSolana (SOL):\n- Vốn hóa thị trường: ~$62 tỷ\n- Hiệu suất 1 năm: +950%\n- Khối lượng giao dịch hàng ngày: ~$2 tỷ\n\nCardano (ADA):\n- Vốn hóa thị trường: ~$16 tỷ\n- Hiệu suất 1 năm: +120%\n- Khối lượng giao dịch hàng ngày: ~$500 triệu\n\nƯu điểm và Nhược điểm:\n\nSolana:\n- Ưu điểm: Tốc độ cực cao, phí giao dịch thấp, hệ sinh thái phát triển mạnh, trải nghiệm người dùng tốt\n- Nhược điểm: Vấn đề về thời gian hoạt động (đã có nhiều lần gián đoạn mạng), tính phi tập trung thấp hơn\n\nCardano:\n- Ưu điểm: Cơ sở học thuật vững chắc, độ an toàn cao, tính phi tập trung tốt\n- Nhược điểm: Phát triển chậm, hiệu suất thấp hơn, hệ sinh thái còn non trẻ\n\nPhân tích đầu tư:\n\nSolana phù hợp với nhà đầu tư:\n- Ưu tiên hiệu suất và tốc độ phát triển\n- Chấp nhận rủi ro cao hơn để đổi lấy tiềm năng tăng trưởng lớn\n- Quan tâm đến hệ sinh thái đã phát triển với nhiều ứng dụng\n\nCardano phù hợp với nhà đầu tư:\n- Ưu tiên tính ổn định và an toàn dài hạn\n- Ưa thích phương pháp phát triển cẩn thận, dựa trên nghiên cứu\n- Tin tưởng vào tầm nhìn dài hạn của dự án\n\nKết luận: Cả Solana và Cardano đều có vị trí riêng trong hệ sinh thái blockchain. Solana nổi bật với hiệu suất cao và hệ sinh thái phát triển nhanh chóng, trong khi Cardano tập trung vào sự phát triển bền vững và an toàn dài hạn. Nhà đầu tư nên cân nhắc kỹ các yếu tố trên trước khi đưa ra quyết định đầu tư."
    },
    {
      id: 6,
      title: "Cách đọc biểu đồ nến (Candlestick) trong trading crypto - Hướng dẫn từ cơ bản đến nâng cao",
      excerpt: "Hướng dẫn từ A-Z cách đọc và phân tích biểu đồ nến để đưa ra quyết định trading hiệu quả trong thị trường crypto.",
      views: 6100,
      date: "2024-05-12",
      author: "TradingMaster",
      image: "https://images.unsplash.com/photo-1614028552931-d66bc8854651?auto=format&fit=crop&q=80&w=1200",
      tags: ["Trading", "Candlestick", "Technical Analysis"],
      content: "Biểu đồ nến (Candlestick) là một trong những công cụ phân tích kỹ thuật hiệu quả nhất trong trading crypto. Bài viết này sẽ hướng dẫn bạn cách đọc và phân tích biểu đồ nến từ cơ bản đến nâng cao để đưa ra quyết định trading hiệu quả.\n\nI. Cấu trúc cơ bản của một nến (Candlestick)\n\n1. Thân nến (Body):\n- Màu xanh/trắng: Giá đóng cửa cao hơn giá mở cửa (tăng)\n- Màu đỏ/đen: Giá đóng cửa thấp hơn giá mở cửa (giảm)\n- Phần trên của thân: Giá mở cửa (nến đỏ) hoặc giá đóng cửa (nến xanh)\n- Phần dưới của thân: Giá đóng cửa (nến đỏ) hoặc giá mở cửa (nến xanh)\n\n2. Bóng nến (Shadow/Wick):\n- Bóng trên: Khoảng cách từ đỉnh thân nến đến giá cao nhất\n- Bóng dưới: Khoảng cách từ đáy thân nến đến giá thấp nhất\n\nII. Các mẫu nến cơ bản\n\n1. Nến Doji:\n- Đặc điểm: Thân nến rất nhỏ hoặc không có thân\n- Ý nghĩa: Thể hiện sự lưỡng lự, cân bằng giữa bên mua và bên bán\n- Loại: Doji thông thường, Gravestone Doji, Dragonfly Doji, Long-legged Doji\n\n2. Nến Hammer và Hanging Man:\n- Đặc điểm: Thân nhỏ, bóng dưới dài (ít nhất gấp 2 lần thân)\n- Hammer: Xuất hiện trong xu hướng giảm, tín hiệu đảo chiều tăng\n- Hanging Man: Xuất hiện trong xu hướng tăng, tín hiệu đảo chiều giảm\n\n3. Nến Shooting Star và Inverted Hammer:\n- Đặc điểm: Thân nhỏ, bóng trên dài (ít nhất gấp 2 lần thân)\n- Shooting Star: Xuất hiện trong xu hướng tăng, tín hiệu đảo chiều giảm\n- Inverted Hammer: Xuất hiện trong xu hướng giảm, tín hiệu đảo chiều tăng\n\n4. Nến Marubozu:\n- Đặc điểm: Thân nến dài, không có bóng\n- Marubozu xanh: Tín hiệu mua mạnh\n- Marubozu đỏ: Tín hiệu bán mạnh\n\nIII. Các mẫu nến kết hợp (2-3 nến)\n\n1. Engulfing Pattern (Mô hình bao phủ):\n- Bullish Engulfing: Nến xanh bao phủ hoàn toàn nến đỏ trước đó (tín hiệu tăng)\n- Bearish Engulfing: Nến đỏ bao phủ hoàn toàn nến xanh trước đó (tín hiệu giảm)\n\n2. Harami Pattern:\n- Bullish Harami: Nến xanh nhỏ nằm trong thân nến đỏ lớn trước đó (tín hiệu tăng)\n- Bearish Harami: Nến đỏ nhỏ nằm trong thân nến xanh lớn trước đó (tín hiệu giảm)\n\n3. Morning Star và Evening Star:\n- Morning Star: Mô hình 3 nến (đỏ lớn, doji/nhỏ, xanh lớn) - tín hiệu đảo chiều tăng\n- Evening Star: Mô hình 3 nến (xanh lớn, doji/nhỏ, đỏ lớn) - tín hiệu đảo chiều giảm\n\n4. Three White Soldiers và Three Black Crows:\n- Three White Soldiers: 3 nến xanh liên tiếp, mỗi nến mở cửa và đóng cửa cao hơn nến trước (tín hiệu tăng mạnh)\n- Three Black Crows: 3 nến đỏ liên tiếp, mỗi nến mở cửa và đóng cửa thấp hơn nến trước (tín hiệu giảm mạnh)\n\nIV. Ứng dụng vào trading crypto\n\n1. Xác định điểm vào lệnh:\n- Sử dụng các mẫu nến đảo chiều như Hammer, Engulfing, Morning/Evening Star\n- Xác nhận với khối lượng giao dịch và các chỉ báo phụ (RSI, MACD)\n\n2. Xác định điểm thoát lệnh:\n- Sử dụng các mẫu nến đảo chiều ngược với xu hướng hiện tại\n- Chú ý các nến Doji ở vùng kháng cự/hỗ trợ\n\n3. Xác định xu hướng:\n- Chuỗi nến xanh/đỏ liên tiếp\n- Kích thước thân nến và sự thay đổi theo thời gian\n\n4. Kết hợp với các công cụ phân tích khác:\n- Vùng hỗ trợ/kháng cự\n- Chỉ báo kỹ thuật (RSI, MACD, Bollinger Bands)\n- Khối lượng giao dịch\n\nV. Lưu ý khi sử dụng biểu đồ nến trong crypto\n\n1. Thị trường crypto dễ biến động:\n- Không nên dựa hoàn toàn vào phân tích nến\n- Cần kết hợp với nhiều công cụ phân tích khác\n\n2. Khung thời gian:\n- Nến trên khung thời gian lớn (1D, 4H) có độ tin cậy cao hơn\n- Nến trên khung thời gian nhỏ (1H, 15m) thường có nhiều nhiễu\n\n3. Tâm lý thị trường:\n- Biểu đồ nến phản ánh tâm lý đám đông\n- Trong crypto, tâm lý thị trường có thể thay đổi nhanh chóng\n\nTổng kết, việc nắm vững cách đọc và phân tích biểu đồ nến là kỹ năng cơ bản nhưng vô cùng quan trọng cho bất kỳ trader crypto nào. Tuy nhiên, cần nhớ rằng không có mẫu hình nào đúng 100% thời gian, và luôn cần kết hợp với các công cụ phân tích khác, cũng như quản lý rủi ro hiệu quả."
    }
  ];

  const filteredPosts = cryptoPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "hot") return b.views - a.views;
      if (sortBy === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Crypto News & Analysis" 
        subtitle="Tin tức, phân tích và hướng dẫn crypto mới nhất"
        showSearch={true}
        searchPlaceholder="Tìm kiếm bài viết crypto..."
        onSearch={setSearchTerm}
        backgroundImage="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200"
      />
      
      <div className="p-6">
        {/* Sort Controls */}
        <div className="flex gap-4 mb-8">
          <Button
            variant={sortBy === "hot" ? "default" : "outline"}
            onClick={() => setSortBy("hot")}
            className={sortBy === "hot" ? "bg-purple-600 hover:bg-purple-700" : "border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Nổi bật
          </Button>
          <Button
            variant={sortBy === "latest" ? "default" : "outline"}
            onClick={() => setSortBy("latest")}
            className={sortBy === "latest" ? "bg-purple-600 hover:bg-purple-700" : "border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"}
          >
            <Clock className="w-4 h-4 mr-2" />
            Mới nhất
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="bg-slate-800 border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div 
                    className="md:w-80 h-48 md:h-auto bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex-shrink-0"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-purple-200 mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-purple-300">
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
                        <span>{post.views.toLocaleString()} lượt xem</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-right">
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/50 flex items-center gap-1">
                        Xem chi tiết <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-2">
            Tải thêm bài viết
          </Button>
        </div>
      </div>
    </div>
  );
}
