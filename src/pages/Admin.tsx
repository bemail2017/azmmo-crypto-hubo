
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { PageHeader } from '@/components/PageHeader';
import { useTheme } from '@/components/ThemeProvider';
import { Plus, Edit, Trash2, Users, FileText, Settings } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  views: number;
  created_at: string;
  author_id: string;
  profiles: {
    display_name: string;
  };
}

interface UserProfile {
  id: string;
  username: string;
  display_name: string;
  role: 'admin' | 'user';
  created_at: string;
}

export default function Admin() {
  const { profile, isAdmin } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
      return;
    }
    fetchData();
  }, [isAdmin, navigate]);

  const fetchData = async () => {
    setLoading(true);
    
    // Fetch blog posts
    const { data: postsData, error: postsError } = await supabase
      .from('blog_posts')
      .select(`
        *,
        profiles (display_name)
      `)
      .order('created_at', { ascending: false });

    if (postsError) {
      toast({
        title: 'Lỗi tải dữ liệu',
        description: postsError.message,
        variant: 'destructive',
      });
    } else {
      setPosts(postsData || []);
    }

    // Fetch users
    const { data: usersData, error: usersError } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (usersError) {
      toast({
        title: 'Lỗi tải dữ liệu người dùng',
        description: usersError.message,
        variant: 'destructive',
      });
    } else {
      setUsers(usersData || []);
    }

    setLoading(false);
  };

  const deletePost = async (id: number) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bài viết này?')) return;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Lỗi xóa bài viết',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Xóa thành công',
        description: 'Bài viết đã được xóa!',
      });
      fetchData();
    }
  };

  const toggleUserRole = async (userId: string, currentRole: 'admin' | 'user') => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    
    if (!confirm(`Bạn có chắc chắn muốn thay đổi quyền của người dùng này thành ${newRole === 'admin' ? 'Quản trị viên' : 'Người dùng'}?`)) return;

    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole, updated_at: new Date().toISOString() })
      .eq('id', userId);

    if (error) {
      toast({
        title: 'Lỗi cập nhật quyền',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Cập nhật thành công',
        description: `Quyền người dùng đã được thay đổi thành ${newRole === 'admin' ? 'Quản trị viên' : 'Người dùng'}!`,
      });
      fetchData();
    }
  };

  const getBgClass = () => {
    if (theme === "light") {
      return "bg-gray-50";
    } else {
      return "bg-slate-900";
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className={`min-h-screen ${getBgClass()}`}>
      <PageHeader
        title="Bảng điều khiển Admin"
        subtitle="Quản lý toàn bộ hệ thống"
      />
      
      <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className={`${
            theme === 'dark' 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-white border-gray-200'
          } shadow-lg`}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tổng bài viết</p>
                  <p className="text-2xl font-bold">{posts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={`${
            theme === 'dark' 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-white border-gray-200'
          } shadow-lg`}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tổng người dùng</p>
                  <p className="text-2xl font-bold">{users.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={`${
            theme === 'dark' 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-white border-gray-200'
          } shadow-lg`}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Settings className="h-8 w-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Quản trị viên</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.role === 'admin').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts Management */}
        <Card className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        } shadow-lg`}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="font-mono">Quản lý bài viết</CardTitle>
              <Button onClick={() => navigate('/admin/create-post')} className="font-mono">
                <Plus className="w-4 h-4 mr-2" />
                Tạo bài viết mới
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center font-mono">Đang tải...</p>
            ) : posts.length === 0 ? (
              <p className="text-center font-mono text-gray-500">Chưa có bài viết nào</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium font-mono">{post.title}</h3>
                      <p className="text-sm text-gray-500 font-mono">
                        {post.category} • {post.views} lượt xem • {new Date(post.created_at).toLocaleDateString('vi-VN')}
                      </p>
                      <p className="text-xs text-gray-400 font-mono">
                        Tác giả: {post.profiles?.display_name}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/admin/edit-post/${post.id}`)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deletePost(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Users Management */}
        <Card className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        } shadow-lg`}>
          <CardHeader>
            <CardTitle className="font-mono">Quản lý người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center font-mono">Đang tải...</p>
            ) : (
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium font-mono">{user.display_name}</h3>
                      <p className="text-sm text-gray-500 font-mono">@{user.username}</p>
                      <p className="text-xs text-gray-400 font-mono">
                        {user.role === 'admin' ? 'Quản trị viên' : 'Người dùng'} • 
                        Tham gia: {new Date(user.created_at).toLocaleDateString('vi-VN')}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant={user.role === 'admin' ? 'destructive' : 'default'}
                        onClick={() => toggleUserRole(user.id, user.role)}
                        disabled={user.id === profile?.id}
                      >
                        {user.role === 'admin' ? 'Hủy admin' : 'Làm admin'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
