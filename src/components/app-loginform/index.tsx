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

export function AppLoginForm({ className, ...props }: ComponentProps<"div">) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 使用 authStore 中的状态和 action
  const { login, isLoading, error, setError } = useAuthStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // 当用户输入时，清除错误信息
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      console.log("登录成功");
      window.location.href = "/home";
    } catch (error) {
      // 错误已经由 store 处理并存储在 error 状态中
      console.log("登录失败", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">欢迎回到 ChatGPT</CardTitle>
          <CardDescription>通过电子邮件和密码登录到您的帐户</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">密码</FieldLabel>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Field>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "登录中..." : "登录"}
                </Button>
                <FieldDescription className="text-center">
                  没有账户？ <a href="/signup">注册</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
