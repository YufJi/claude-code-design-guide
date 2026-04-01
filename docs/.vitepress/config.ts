import { defineConfig } from 'vitepress'

const zhSidebar = [
  {
    text: '前言',
    items: [
      { text: '为什么要读这本书', link: '/00-preface' }
    ]
  },
  {
    text: '第一部分：认识 Claude Code',
    collapsed: false,
    items: [
      { text: '第 1 章：Claude Code 是什么', link: '/part1/01-introduction' },
      { text: '第 2 章：快速上手', link: '/part1/02-quickstart' }
    ]
  },
  {
    text: '第二部分：从互联网早期设计到 AI Agent',
    collapsed: true,
    items: [
      { text: '第 3 章：Unix 哲学与 CLI 的传统', link: '/part2/03-unix-philosophy' },
      { text: '第 4 章：REPL 的演化史', link: '/part2/04-repl-evolution' },
      { text: '第 5 章：从聊天机器人到 Agent', link: '/part2/05-from-chatbot-to-agent' }
    ]
  },
  {
    text: '第三部分：架构设计',
    collapsed: true,
    items: [
      { text: '第 6 章：查询引擎 —— 对话的心脏', link: '/part3/06-query-engine' },
      { text: '第 7 章：状态管理设计', link: '/part3/07-state-management' },
      { text: '第 8 章：消息循环与流式处理', link: '/part3/08-message-loop' }
    ]
  },
  {
    text: '第四部分：工具系统设计',
    collapsed: true,
    items: [
      { text: '第 9 章：工具系统的设计哲学', link: '/part4/09-tool-design' },
      { text: '第 10 章：43 个内置工具全览', link: '/part4/10-builtin-tools' },
      { text: '第 11 章：工具权限模型', link: '/part4/11-tool-permission' }
    ]
  },
  {
    text: '第五部分：Context Engineering',
    collapsed: true,
    items: [
      { text: '第 12 章：什么是 Context Engineering', link: '/part5/12-context-what' },
      { text: '第 13 章：系统提示的构建艺术', link: '/part5/13-system-prompt' },
      { text: '第 14 章：Memory 与 CLAUDE.md', link: '/part5/14-memory-claudemd' },
      { text: '第 15 章：上下文压缩（Auto-Compact）', link: '/part5/15-compact' }
    ]
  },
  {
    text: '第六部分：Agent Runtime 与多代理',
    collapsed: true,
    items: [
      { text: '第 16 章：任务系统设计', link: '/part6/16-task-system' },
      { text: '第 17 章：多代理架构', link: '/part6/17-multi-agent' },
      { text: '第 18 章：协调器模式', link: '/part6/18-coordinator' }
    ]
  },
  {
    text: '第七部分：扩展系统',
    collapsed: true,
    items: [
      { text: '第 19 章：MCP 协议 —— 工具的互联网', link: '/part7/19-mcp' },
      { text: '第 20 章：Skills 系统', link: '/part7/20-skills' },
      { text: '第 21 章：插件系统', link: '/part7/21-plugins' }
    ]
  },
  {
    text: '第八部分：安全、权限与性能',
    collapsed: true,
    items: [
      { text: '第 22 章：权限模型的分层设计', link: '/part8/22-permission-model' },
      { text: '第 23 章：安全设计', link: '/part8/23-security' },
      { text: '第 24 章：性能优化', link: '/part8/24-performance' }
    ]
  },
  {
    text: '第九部分：设计哲学',
    collapsed: true,
    items: [
      { text: '第 25 章：Claude Code 的设计原则', link: '/part9/25-design-principles' },
      { text: '第 26 章：未来展望', link: '/part9/26-future' }
    ]
  }
]

const enSidebar = [
  {
    text: 'Preface',
    items: [
      { text: 'Why Read This Book', link: '/en/00-preface' }
    ]
  },
  {
    text: 'Part 1: Getting to Know Claude Code',
    collapsed: false,
    items: [
      { text: 'Chapter 1: What is Claude Code', link: '/en/part1/01-introduction' },
      { text: 'Chapter 2: Quick Start', link: '/en/part1/02-quickstart' }
    ]
  },
  {
    text: 'Part 2: From Early Internet Design to AI Agent',
    collapsed: true,
    items: [
      { text: 'Chapter 3: Unix Philosophy and CLI Tradition', link: '/en/part2/03-unix-philosophy' },
      { text: 'Chapter 4: Evolution of REPL', link: '/en/part2/04-repl-evolution' },
      { text: 'Chapter 5: From Chatbot to Agent', link: '/en/part2/05-from-chatbot-to-agent' }
    ]
  },
  {
    text: 'Part 3: Architecture Design',
    collapsed: true,
    items: [
      { text: 'Chapter 6: Query Engine — The Heart of Conversation', link: '/en/part3/06-query-engine' },
      { text: 'Chapter 7: State Management Design', link: '/en/part3/07-state-management' },
      { text: 'Chapter 8: Message Loop and Streaming', link: '/en/part3/08-message-loop' }
    ]
  },
  {
    text: 'Part 4: Tool System Design',
    collapsed: true,
    items: [
      { text: 'Chapter 9: Tool System Design Philosophy', link: '/en/part4/09-tool-design' },
      { text: 'Chapter 10: Overview of 43 Built-in Tools', link: '/en/part4/10-builtin-tools' },
      { text: 'Chapter 11: Tool Permission Model', link: '/en/part4/11-tool-permission' }
    ]
  },
  {
    text: 'Part 5: Context Engineering',
    collapsed: true,
    items: [
      { text: 'Chapter 12: What is Context Engineering', link: '/en/part5/12-context-what' },
      { text: 'Chapter 13: The Art of Building System Prompts', link: '/en/part5/13-system-prompt' },
      { text: 'Chapter 14: Memory and CLAUDE.md', link: '/en/part5/14-memory-claudemd' },
      { text: 'Chapter 15: Context Compression (Auto-Compact)', link: '/en/part5/15-compact' }
    ]
  },
  {
    text: 'Part 6: Agent Runtime and Multi-Agent',
    collapsed: true,
    items: [
      { text: 'Chapter 16: Task System Design', link: '/en/part6/16-task-system' },
      { text: 'Chapter 17: Multi-Agent Architecture', link: '/en/part6/17-multi-agent' },
      { text: 'Chapter 18: Coordinator Pattern', link: '/en/part6/18-coordinator' }
    ]
  },
  {
    text: 'Part 7: Extension System',
    collapsed: true,
    items: [
      { text: 'Chapter 19: MCP Protocol — The Internet of Tools', link: '/en/part7/19-mcp' },
      { text: 'Chapter 20: Skills System', link: '/en/part7/20-skills' },
      { text: 'Chapter 21: Plugin System', link: '/en/part7/21-plugins' }
    ]
  },
  {
    text: 'Part 8: Security, Permissions, and Performance',
    collapsed: true,
    items: [
      { text: 'Chapter 22: Layered Permission Model Design', link: '/en/part8/22-permission-model' },
      { text: 'Chapter 23: Security Design', link: '/en/part8/23-security' },
      { text: 'Chapter 24: Performance Optimization', link: '/en/part8/24-performance' }
    ]
  },
  {
    text: 'Part 9: Design Philosophy',
    collapsed: true,
    items: [
      { text: 'Chapter 25: Claude Code Design Principles', link: '/en/part9/25-design-principles' },
      { text: 'Chapter 26: Future Outlook', link: '/en/part9/26-future' }
    ]
  }
]

export default defineConfig({
  srcDir: '..',
  outDir: '../docs/.vitepress/dist',
  cacheDir: '../docs/.vitepress/cache',

  base: '/claude-code-design-guide/',

  ignoreDeadLinks: [/_en$/],

  rewrites: {
    '00-preface_en.md': 'en/00-preface.md',
    'part1/01-introduction_en.md': 'en/part1/01-introduction.md',
    'part1/02-quickstart_en.md': 'en/part1/02-quickstart.md',
    'part2/03-unix-philosophy_en.md': 'en/part2/03-unix-philosophy.md',
    'part2/04-repl-evolution_en.md': 'en/part2/04-repl-evolution.md',
    'part2/05-from-chatbot-to-agent_en.md': 'en/part2/05-from-chatbot-to-agent.md',
    'part3/06-query-engine_en.md': 'en/part3/06-query-engine.md',
    'part3/07-state-management_en.md': 'en/part3/07-state-management.md',
    'part3/08-message-loop_en.md': 'en/part3/08-message-loop.md',
    'part4/09-tool-design_en.md': 'en/part4/09-tool-design.md',
    'part4/10-builtin-tools_en.md': 'en/part4/10-builtin-tools.md',
    'part4/11-tool-permission_en.md': 'en/part4/11-tool-permission.md',
    'part5/12-context-what_en.md': 'en/part5/12-context-what.md',
    'part5/13-system-prompt_en.md': 'en/part5/13-system-prompt.md',
    'part5/14-memory-claudemd_en.md': 'en/part5/14-memory-claudemd.md',
    'part5/15-compact_en.md': 'en/part5/15-compact.md',
    'part6/16-task-system_en.md': 'en/part6/16-task-system.md',
    'part6/17-multi-agent_en.md': 'en/part6/17-multi-agent.md',
    'part6/18-coordinator_en.md': 'en/part6/18-coordinator.md',
    'part7/19-mcp_en.md': 'en/part7/19-mcp.md',
    'part7/20-skills_en.md': 'en/part7/20-skills.md',
    'part7/21-plugins_en.md': 'en/part7/21-plugins.md',
    'part8/22-permission-model_en.md': 'en/part8/22-permission-model.md',
    'part8/23-security_en.md': 'en/part8/23-security.md',
    'part8/24-performance_en.md': 'en/part8/24-performance.md',
    'part9/25-design-principles_en.md': 'en/part9/25-design-principles.md',
    'part9/26-future_en.md': 'en/part9/26-future.md',
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Claude Code 设计指南',
      description: '从互联网早期设计模型到 AI Agent 实战',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '前言', link: '/00-preface' }
        ],
        sidebar: zhSidebar
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Claude Code Design Guide',
      description: 'From Early Internet Design to AI Agent Practice',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Preface', link: '/en/00-preface' }
        ],
        sidebar: enSidebar
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/6551Team/claude-code-design-guide' }
    ],
    footer: {
      message: '开源分享，欢迎贡献和勘误。',
    },
    search: {
      provider: 'local'
    }
  }
})
