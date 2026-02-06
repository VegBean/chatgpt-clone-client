import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  useState,
  type ChangeEvent,
  type ComponentProps,
  type FormEvent,
} from "react";
import { useAuthStore } from "@/store/authStore";

export function AppSignupForm({ className, ...props }: ComponentProps<"div">) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { register, isLoading, error, setError } = useAuthStore();

  // 处理输入框变化
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let key = id;
    if (id === "name") {
      key = "username";
    }
    if (id === "confirm-password") {
      key = "confirmPassword";
    }
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    // 阻止默认表单提交
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("两次输入的密码不一致！");
      return;
    }

    if (formData.password.length < 8) {
      setError("密码必须至少包含8个字符。");
      return;
    }

    try {
      await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log("注册成功");
      // 可以在这里添加跳转逻辑，例如跳转到登录页
      window.location.href = "/login";
    } catch (err) {
      console.error("注册失败:", err);
      // 错误已由 store 处理
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">创建账户</CardTitle>
          <CardDescription>在下面输入您的电子邮件以创建账户</CardDescription>
        </CardHeader>
        <CardContent>
          {/* 绑定 onSubmit 事件 */}
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">昵称</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  required
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">电子邮件</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">密码</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      required
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">确认密码</FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </Field>
                </Field>
                <FieldDescription>必须至少包含8个字符。</FieldDescription>
              </Field>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "注册中..." : "创建账户"}
                </Button>
                <FieldDescription className="text-center">
                  已有账户？ <a href="/login">登录</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
