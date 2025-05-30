
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { User, Settings, Shield, LogOut, BookMarked } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function AuthNavigation() {
  const { user, profile, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Lỗi đăng xuất',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Đăng xuất thành công',
        description: 'Hẹn gặp lại bạn!',
      });
      navigate('/');
    }
  };

  if (!user || !profile) {
    return (
      <Button 
        onClick={() => navigate('/auth')} 
        variant="outline" 
        className="font-mono"
      >
        Đăng nhập
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={profile.avatar_url} alt={profile.display_name} />
            <AvatarFallback className="font-mono">
              {profile.display_name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-mono">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{profile.display_name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              @{profile.username}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/profile')} className="font-mono">
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/saved-posts')} className="font-mono">
          <BookMarked className="mr-2 h-4 w-4" />
          <span>Bài viết đã lưu</span>
        </DropdownMenuItem>
        {isAdmin && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/admin')} className="font-mono">
              <Shield className="mr-2 h-4 w-4" />
              <span>Quản trị</span>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="font-mono">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
