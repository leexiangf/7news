"use client";

import { useMemo, useState } from "react";
import { useUiLocale } from "@/hooks/useUiLocale";

function estimateTokens(text: string, lang: "zh" | "en" | "mixed"): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  const chars = trimmed.length;
  const ratio = lang === "zh" ? 1.6 : lang === "en" ? 4 : 2.5;
  return Math.max(1, Math.ceil(chars / ratio));
}

export function TokenEstimateTool() {
  const locale = useUiLocale();
  const [text, setText] = useState("");
  const [lang, setLang] = useState<"zh" | "en" | "mixed">("mixed");
  const tokens = useMemo(() => estimateTokens(text, lang), [text, lang]);

  const copy =
    locale === "en"
      ? {
          label: "Prompt text",
          placeholder: "Paste a system prompt or user message…",
          legend: "Language assumption",
          options: [
            ["zh", "Mostly Chinese"],
            ["en", "Mostly English"],
            ["mixed", "Mixed"],
          ] as const,
          estimate: "Estimated tokens",
          footnote: (chars: number) =>
            `${chars} characters. Heuristic only—use the model’s official tokenizer for billing.`,
        }
      : {
          label: "提示词文本",
          placeholder: "粘贴系统提示词或用户消息…",
          legend: "语言假设",
          options: [
            ["zh", "偏中文"],
            ["en", "偏英文"],
            ["mixed", "中英混合"],
          ] as const,
          estimate: "粗估 Token",
          footnote: (chars: number) =>
            `字符数 ${chars}。经验公式，正式计费请用模型官方 tokenizer。`,
        };

  return (
    <div className="panel space-y-4">
      <label className="block">
        <span className="text-sm font-semibold">{copy.label}</span>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={8}
          className="mt-2 w-full resize-y rounded border border-rule bg-paper p-3 text-sm outline-none focus:border-signal"
          placeholder={copy.placeholder}
        />
      </label>

      <fieldset className="flex flex-wrap gap-4 text-sm">
        <legend className="sr-only">{copy.legend}</legend>
        {copy.options.map(([value, label]) => (
          <label key={value} className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="lang"
              checked={lang === value}
              onChange={() => setLang(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>

      <div className="border-t border-rule pt-4">
        <p className="text-sm text-mute">{copy.estimate}</p>
        <p className="brand-mark mt-1 text-3xl tabular-nums">{tokens}</p>
        <p className="mt-2 text-sm text-mute">
          {copy.footnote(text.trim().length)}
        </p>
      </div>
    </div>
  );
}
