export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_API_HOST = "https://api.nextchat.dev";
export const OPENAI_BASE_URL = "https://api.openai.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "",
  OpenAI = "/api/openai",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
}

export enum ModelProvider {
  GPT = "GPT",
  GeminiPro = "GeminiPro",
}

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: "v1beta/models/gemini-pro:generateContent",
  VisionChatPath: "v1beta/models/gemini-pro-vision:generateContent",

  // /api/openai/v1/chat/completions
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
You are an intergrated AI designed to chat and do many significantly helpful tasks. The integration was provided by Illusion21.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: $x^2$ 
Latex block: $$e=mc^2$$
`;

export const SUMMARIZE_MODEL = "anthropic/claude-3-haiku:beta";
export const GEMINI_SUMMARIZE_MODEL = "google/gemini-pro";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "openai/gpt-4-turbo": "2024-04",
  // After improvements,
  // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
  "google/gemini-pro-1.5": "2023-12",
};

export const DEFAULT_MODELS = [
  {
    name: "openai/gpt-4-turbo",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "openai/gpt-3.5-turbo",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "google/gemini-pro-1.5",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "anthropic/claude-3-haiku:beta",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "anthropic/claude-3-sonnet:beta",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "anthropic/claude-3-opus:beta",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "cohere/command-r-plus",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "mistralai/mistral-large",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "microsoft/wizardlm-2-8x22b",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "qwen/qwen-110b-chat",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "qwen/qwen-72b-chat",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  },
  {
    name: "openrouter/auto",
    available: true,
    provider: {
      id: "openai",
      providerName: "Illusion21",
      providerType: "openai",
    },
  }
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
