
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { PageHeader } from '@/components/PageHeader';
import { useTheme } from '@/components/ThemeProvider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const profileSchema = z.object({
  username: z.string().min(3, 'Username phải có ít nhất 3 ký tự'),
  displayName: z.string().min(2, 'Tên hiển thị phải có ít nhất 2 ký tự'),
});

export default function Profile() {
  const { profile, user } = useAuth();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: profile?.username || '',
      displayName: profile?.display_name || '',
    },
  });

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    if (!user) return;
    
    setLoading(true);
    const { error } = await supabase
      .from('profiles')
      .update({
        username: values.username,
        display_name: values.displayName,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    if (error) {
      toast({
        title: 'Lỗi cập nhật',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Cập nhật thành công',
        description: 'Thông tin profile đã được cập nhật!',
      });
    }
    setLoading(false);
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);
    
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/avatar.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(fileName, file, { upsert: true });

    if (uploadError) {
      toast({
        title: 'Lỗi upload',
        description: uploadError.message,
        variant: 'destructive',
      });
    } else {
      const { data } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);

      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          avatar_url: data.publicUrl,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (updateError) {
        toast({
          title: 'Lỗi cập nhật',
          description: updateError.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Cập nhật thành công',
          description: 'Ảnh đại diện đã được cập nhật!',
        });
      }
    }
    setUploading(false);
  };

  const getBgClass = () => {
    if (theme === "light") {
      return "bg-gray-50";
    } else {
      return "bg-slate-900";
    }
  };

  if (!profile) {
    return (
      <div className={`min-h-screen ${getBgClass()}`}>
        <PageHeader
          title="Profile"
          subtitle="Quản lý thông tin cá nhân"
        />
        <div className="p-6 text-center">
          <p>Đang tải thông tin profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getBgClass()}`}>
      <PageHeader
        title="Profile"
        subtitle="Quản lý thông tin cá nhân của bạn"
      />
      
      <div className="p-4 sm:p-6 max-w-2xl mx-auto">
        <Card className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        } shadow-lg`}>
          <CardHeader>
            <CardTitle className="font-mono">Thông tin cá nhân</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profile.avatar_url} alt={profile.display_name} />
                  <AvatarFallback className="text-lg font-mono">
                    {profile.display_name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
              />
              {uploading && <p className="text-sm text-gray-500 font-mono">Đang tải ảnh lên...</p>}
            </div>

            {/* Profile Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono">Username</FormLabel>
                      <FormControl>
                        <Input {...field} className="font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono">Tên hiển thị</FormLabel>
                      <FormControl>
                        <Input {...field} className="font-mono" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <label className="text-sm font-medium font-mono">Email</label>
                  <Input value={user?.email || ''} disabled className="font-mono bg-gray-100 dark:bg-gray-700" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-mono">Vai trò</label>
                  <Input 
                    value={profile.role === 'admin' ? 'Quản trị viên' : 'Người dùng'} 
                    disabled 
                    className="font-mono bg-gray-100 dark:bg-gray-700" 
                  />
                </div>
                
                <Button type="submit" className="w-full font-mono" disabled={loading}>
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? "Đang lưu..." : "Lưu thay đổi"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
