import { Plus, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { useEffect, useRef, useState } from "react";

const AppInput = () => {
  const [value, setValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  const MAX_HEIGHT = 180; // 超过就滚动
  const MIN_HEIGHT = 56; // 约等于 min-h-14 的高度（用来判断是否“换行/扩展”）

  // 检测是否需要需要增高输入框
  const autosize = () => {
    const el = taRef.current;
    if (!el) return;

    el.style.height = "0px";
    const scrollH = el.scrollHeight;

    const next = Math.min(scrollH, MAX_HEIGHT);
    el.style.height = `${next}px`;
    el.style.overflowY = scrollH > MAX_HEIGHT ? "auto" : "hidden";

    // 检测是否进入“换行态”
    setIsExpanded(scrollH > MIN_HEIGHT);
  };

  useEffect(() => {
    autosize();
  }, [value]);

  return (
    <div className="w-full flex justify-center">
      <div
        className={`
          w-full max-w-3xl
          border bg-background shadow-sm
          px-3 gap-2
          flex
          m-6
          min-h-14
          ${isExpanded ? "rounded-2xl items-end py-2" : "rounded-full items-center"}
        `}
      >
        {/* 文件上传按键 */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={`
            rounded-full h-10 w-10
            ${isExpanded ? "self-end mb-1" : ""}
          `}
          aria-label="添加"
        >
          <Plus className="h-6 w-6" />
        </Button>

        {/* 输入框 */}
        <Textarea
          ref={taRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="有问题，尽管问"
          rows={1}
          className="
            flex-1
            border-0 bg-transparent shadow-none
            focus-visible:ring-0 focus-visible:ring-offset-0
            resize-none
            leading-relaxed px-1
            min-h-14
            py-4
            chat-scrollbar
          "
        />

        {/* 发送信息按键 */}
        <Button
          type="button"
          size="icon"
          className={`
            rounded-full h-9 w-9 hover:bg-primary/75
            ${isExpanded ? "self-end mb-1" : ""}
          `}
        >
          <ArrowUp className="h-6 w-6" strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
};

export default AppInput;
