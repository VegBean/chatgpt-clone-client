import { Card } from "../ui/card";

const AppChatMessage = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const isUser = role === "user";
  const bgColor = isUser ? "bg-muted" : "bg-white";
  const justifyClass = isUser ? "justify-end" : "justify-start";
  const maxWidth = isUser ? "max-w-[60%]" : "max-w-3xl";

  return (
    <div className="w-full flex justify-center pb-2">
      <div className={`w-full max-w-3xl mx-6 flex ${justifyClass}`}>
        <Card
          className={`rounded-2xl ${bgColor} p-3 shadow-none border-none ${maxWidth} break-words whitespace-pre-wrap`}
        >
          {content}
        </Card>
      </div>
    </div>
  );
};

export default AppChatMessage;
