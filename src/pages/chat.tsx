import AppChatMessage from "@/components/app-chat-message";
import AppInput from "@/components/app-input";

const Chat = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 overflow-auto pb-32">
        <AppChatMessage content="Hello, this is a chat message!" role="user" />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="assistant"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="user"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="assistant"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="user"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="assistant"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="user"
        />
        <AppChatMessage
          content="我是撒娇啊看临时搭建了矿务局啊就开始贷记卡几十块就离开洒家卡拉啥叫吉林省打卡快乐打卡记录酒啊就看大家就立刻大家快来贷记卡打卡时间的啥借口了"
          role="assistant"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="user"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="assistant"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="user"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="assistant"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="user"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="assistant"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="user"
        />
        <AppChatMessage
          content="Hi! This is another message in the chat."
          role="assistant"
        />
      </div>
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm">
        <AppInput />
      </div>
      <div className="flex justify-center text-xs text-gray-500">
        ChatGPT 也可能犯错
      </div>
    </div>
  );
};

export default Chat;
