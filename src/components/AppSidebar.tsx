
import { Home, TrendingUp, Zap, FileText, ShoppingCart, Search } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Trang Chủ",
    url: "/",
    icon: Home,
  },
  {
    title: "Crypto",
    url: "/crypto",
    icon: TrendingUp,
  },
  {
    title: "Airdrop",
    url: "/airdrop",
    icon: Zap,
  },
  {
    title: "Blog MMO",
    url: "/blog",
    icon: FileText,
  },
  {
    title: "Shop",
    url: "/shop",
    icon: ShoppingCart,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-purple-800/30">
      <SidebarHeader className="p-6 border-b border-purple-800/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Az</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">AzMmo</h2>
            <p className="text-sm text-purple-300">Crypto & MMO Hub</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                className={`w-full justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.url 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg' 
                    : 'text-purple-200 hover:bg-purple-800/30 hover:text-white'
                }`}
              >
                <Link to={item.url}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
