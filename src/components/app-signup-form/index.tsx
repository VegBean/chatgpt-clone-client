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

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">创建账户</CardTitle>
          <CardDescription>在下面输入您的电子邮件以创建账户</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">昵称</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  required
                  className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
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
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">确认密码</FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                    />
                  </Field>
                </Field>
                <FieldDescription>必须至少包含8个字符。</FieldDescription>
              </Field>
              <Field>
                <Button type="submit">创建账户</Button>
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
