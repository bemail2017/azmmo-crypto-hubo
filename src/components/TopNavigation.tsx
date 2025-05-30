
import { Home, TrendingUp, Zap, FileText, ShoppingCart } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

export function TopNavigation() {
  const location = useLocation();

  return (
    <div className="w-full bg-slate-950/90 dark:bg-slate-950/90 border-b border-purple-900/50 px-6 py-3 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Az</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">AzMmo</h2>
            <p className="text-sm text-purple-300">Crypto & MMO Hub</p>
          </div>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link to={item.url}>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex items-center gap-2",
                      location.pathname === item.url 
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white' 
                        : 'text-purple-200 hover:bg-purple-800/30 hover:text-white'
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.title}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
