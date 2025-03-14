import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIconDefault from "../icons/llm-icons/default.svg";
import BotIconOpenAI from "../icons/llm-icons/openai.svg";
import BotIconGemini from "../icons/llm-icons/gemini.svg";
import BotIconGemma from "../icons/llm-icons/gemma.svg";
import BotIconClaude from "../icons/llm-icons/claude.svg";
import BotIconMeta from "../icons/llm-icons/meta.svg";
import BotIconMistral from "../icons/llm-icons/mistral.svg";
import BotIconDeepseek from "../icons/llm-icons/deepseek.svg";
import BotIconMoonshot from "../icons/llm-icons/moonshot.svg";
import BotIconQwen from "../icons/llm-icons/qwen.svg";
import BotIconWenxin from "../icons/llm-icons/wenxin.svg";
import BotIconGrok from "../icons/llm-icons/grok.svg";
import BotIconHunyuan from "../icons/llm-icons/hunyuan.svg";
import BotIconDoubao from "../icons/llm-icons/doubao.svg";
import BotIconChatglm from "../icons/llm-icons/chatglm.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  // Whoever owns this Content Delivery Network (CDN), I am using your CDN to serve emojis
  // Old CDN broken, so I had to switch to this one
  // Author: https://github.com/H0llyW00dzZ
  return `https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      width={"100%"}
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  let LlmIcon = BotIconDefault;

  if (props.model) {
    const modelName = props.model.toLowerCase();

    if (
      modelName.includes("gpt") ||
      modelName.includes("chatgpt") ||
      modelName.includes("dall-e") ||
      modelName.includes("dalle") ||
      modelName.includes("o1") ||
      modelName.includes("o3")
    ) {
      LlmIcon = BotIconOpenAI;
    } else if (modelName.includes("gemini")) {
      LlmIcon = BotIconGemini;
    } else if (modelName.includes("gemma")) {
      LlmIcon = BotIconGemma;
    } else if (modelName.includes("claude")) {
      LlmIcon = BotIconClaude;
    } else if (modelName.includes("llama")) {
      LlmIcon = BotIconMeta;
    } else if (modelName.includes("mixtral") || modelName.includes("codestral")) {
      LlmIcon = BotIconMistral;
    } else if (modelName.includes("deepseek")) {
      LlmIcon = BotIconDeepseek;
    } else if (modelName.includes("moonshot")) {
      LlmIcon = BotIconMoonshot;
    } else if (modelName.includes("qwen")) {
      LlmIcon = BotIconQwen;
    } else if (modelName.includes("ernie")) {
      LlmIcon = BotIconWenxin;
    } else if (modelName.includes("grok")) {
      LlmIcon = BotIconGrok;
    } else if (modelName.includes("hunyuan")) {
      LlmIcon = BotIconHunyuan;
    } else if (modelName.includes("doubao") || modelName.includes("ep-")) {
      LlmIcon = BotIconDoubao;
    } else if (
      modelName.includes("glm") ||
      modelName.includes("cogview-") ||
      modelName.includes("cogvideox-")
    ) {
      LlmIcon = BotIconChatglm;
    }

    return (
      <div className="no-dark">
        <LlmIcon className="user-avatar" width={30} height={30} />
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 18}
      getEmojiUrl={getEmojiUrl}
    />
  );
}
