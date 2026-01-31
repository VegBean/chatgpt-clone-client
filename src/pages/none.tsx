import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const None = () => {
  return (
    <div className="flex h-full items-center justify-center -translate-y-20">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-4xl">🚧</div>
          <CardTitle className="text-xl">此功能正在开发中</CardTitle>
          <CardDescription>我们正在加紧完善，敬请期待。</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default None;
