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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">欢迎回到 ChatGPT</CardTitle>
          <CardDescription>通过电子邮件和密码登录到您的帐户</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">电子邮件</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
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
                />
              </Field>
              <Field>
                <Button type="submit">登录</Button>
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
