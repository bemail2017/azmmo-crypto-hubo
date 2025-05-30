
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { PageHeader } from '@/components/PageHeader';
import { useTheme } from '@/components/ThemeProvider';
import { Eye, EyeOff, Mail } from 'lucide-react';

const signInSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

const signUpSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  username: z.string().min(3, 'Username phải có ít nhất 3 ký tự'),
  displayName: z.string().min(2, 'Tên hiển thị phải có ít nhất 2 ký tự'),
});

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, signInWithGoogle } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
      displayName: '',
    },
  });

  const onSignIn = async (values: z.infer<typeof signInSchema>) => {
    setLoading(true);
    const { error } = await signIn(values.email, values.password);
    
    if (error) {
      toast({
        title: 'Lỗi đăng nhập',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Đăng nhập thành công',
        description: 'Chào mừng bạn quay trở lại!',
      });
      navigate('/');
    }
    setLoading(false);
  };

  const onSignUp = async (values: z.infer<typeof signUpSchema>) => {
    setLoading(true);
    const { error } = await signUp(values.email, values.password, values.username, values.displayName);
    
    if (error) {
      toast({
        title: 'Lỗi đăng ký',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Đăng ký thành công',
        description: 'Tài khoản đã được tạo thành công!',
      });
      navigate('/');
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();
    
    if (error) {
      toast({
        title: 'Lỗi đăng nhập Google',
        description: error.message,
        variant: 'destructive',
      });
    }
    setLoading(false);
  };

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
        title={isSignUp ? "Đăng ký tài khoản" : "Đăng nhập"}
        subtitle={isSignUp ? "Tạo tài khoản mới để trải nghiệm đầy đủ tính năng" : "Đăng nhập vào tài khoản của bạn"}
      />
      
      <div className="p-4 sm:p-6 max-w-md mx-auto">
        <Card className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-white border-gray-200'
        } shadow-lg`}>
          <CardHeader>
            <CardTitle className="text-center font-mono">
              {isSignUp ? "Đăng ký" : "Đăng nhập"}
            </CardTitle>
            <CardDescription className="text-center font-mono">
              {isSignUp 
                ? "Điền thông tin để tạo tài khoản mới" 
                : "Nhập thông tin đăng nhập của bạn"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isSignUp ? (
              <Form {...signUpForm}>
                <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-4">
                  <FormField
                    control={signUpForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono">Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="example@email.com" className="font-mono" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={signUpForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono">Username</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="username" className="font-mono" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={signUpForm.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono">Tên hiển thị</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Tên của bạn" className="font-mono" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={signUpForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono">Mật khẩu</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              {...field} 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Mật khẩu" 
                              className="font-mono pr-10"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full font-mono" disabled={loading}>
                    {loading ? "Đang đăng ký..." : "Đăng ký"}
                  </Button>
                </form>
              </Form>
            ) : (
              <Form {...signInForm}>
                <form onSubmit={signInForm.handleSubmit(onSignIn)} className="space-y-4">
                  <FormField
                    control={signInForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono">Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="example@email.com" className="font-mono" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={signInForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono">Mật khẩu</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              {...field} 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Mật khẩu" 
                              className="font-mono pr-10"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full font-mono" disabled={loading}>
                    {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                  </Button>
                </form>
              </Form>
            )}
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className={`px-2 font-mono ${theme === 'dark' ? 'bg-slate-800 text-gray-400' : 'bg-white text-gray-500'}`}>
                  Hoặc
                </span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full font-mono" 
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <Mail className="w-4 h-4 mr-2" />
              Đăng nhập với Google
            </Button>
            
            <div className="text-center">
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-mono"
              >
                {isSignUp 
                  ? "Đã có tài khoản? Đăng nhập" 
                  : "Chưa có tài khoản? Đăng ký ngay"
                }
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
