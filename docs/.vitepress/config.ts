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
  },
  {
    text: '第十部分：源码架构详解',
    collapsed: true,
    items: [
      {
        text: '核心循环',
        collapsed: true,
        items: [
          { text: '01 系统总览', link: '/architecture/01-系统总览/system-overview' },
          { text: '02 启动与初始化', link: '/architecture/02-启动与初始化/initialization' },
          { text: '03 查询引擎', link: '/architecture/03-查询引擎/query-engine' },
          { text: '04 API 客户端', link: '/architecture/04-API客户端/api-client' },
          { text: '05 工具系统', link: '/architecture/05-工具系统/tool-system' }
        ]
      },
      {
        text: '安全模型',
        collapsed: true,
        items: [
          { text: '06 权限与安全', link: '/architecture/06-权限与安全/permission-security' },
          { text: '24 沙箱系统', link: '/architecture/24-沙箱系统/sandbox-system' },
          { text: '34 Swarm 系统', link: '/architecture/34-Swarm系统/swarm-architecture' }
        ]
      },
      {
        text: '上下文策略',
        collapsed: true,
        items: [
          { text: '07 上下文管理', link: '/architecture/07-上下文管理/context-management' },
          { text: '16 记忆系统', link: '/architecture/16-记忆系统/memory-system' },
          { text: '20 服务层', link: '/architecture/20-服务层/services-complete' }
        ]
      },
      {
        text: '扩展性',
        collapsed: true,
        items: [
          { text: '08 MCP 集成', link: '/architecture/08-MCP集成/mcp-integration' },
          { text: '10 Skills 系统', link: '/architecture/10-Skills系统/skills-system' },
          { text: '21 插件系统', link: '/architecture/21-插件系统/plugin-system' },
          { text: '09 Hooks 系统', link: '/architecture/09-Hooks系统/hooks-system' }
        ]
      },
      {
        text: '用户体验',
        collapsed: true,
        items: [
          { text: '12 UI 渲染', link: '/architecture/12-UI渲染/ui-rendering' },
          { text: '27 键绑定与输入', link: '/architecture/27-键绑定与输入/keybinding-system' },
          { text: '19 反馈与调查', link: '/architecture/19-反馈与调查/feedback-system' },
          { text: '42 代价追踪', link: '/architecture/42-代价追踪/cost-tracking' }
        ]
      },
      {
        text: '多智能体',
        collapsed: true,
        items: [
          { text: '11 多智能体', link: '/architecture/11-多智能体/multi-agent' },
          { text: '33 协调器模式', link: '/architecture/33-协调器模式/coordinator-mode' },
          { text: '34 Swarm 系统', link: '/architecture/34-Swarm系统/swarm-architecture' },
          { text: '37 Teleport', link: '/architecture/37-Teleport/teleport-system' }
        ]
      },
      {
        text: '远程能力',
        collapsed: true,
        items: [
          { text: '30 远程会话', link: '/architecture/30-远程会话/remote-session' },
          { text: '31 Bridge 协议', link: '/architecture/31-Bridge协议/bridge-protocol' },
          { text: '36 DeepLink', link: '/architecture/36-DeepLink/deeplink-system' },
          { text: '41 文件持久化', link: '/architecture/41-文件持久化/file-persistence' }
        ]
      },
      {
        text: '其他系统',
        collapsed: true,
        items: [
          { text: '13 配置体系', link: '/architecture/13-配置体系/config-system' },
          { text: '14 状态管理', link: '/architecture/14-状态管理/state-management' },
          { text: '15 命令体系', link: '/architecture/15-命令体系/command-system' },
          { text: '17 错误恢复', link: '/architecture/17-错误恢复/error-recovery' },
          { text: '18 遥测分析', link: '/architecture/18-遥测分析/telemetry-system' },
          { text: '22 OAuth 与认证', link: '/architecture/22-OAuth与认证/oauth-auth' },
          { text: '23 LSP 集成', link: '/architecture/23-LSP集成/lsp-integration' },
          { text: '25 Git 与 GitHub', link: '/architecture/25-Git与GitHub/git-github' },
          { text: '26 会话管理', link: '/architecture/26-会话管理/session-management' },
          { text: '28 Vim 模式', link: '/architecture/28-Vim模式/vim-mode' },
          { text: '29 语音系统', link: '/architecture/29-语音系统/voice-system' },
          { text: '32 Buddy 系统', link: '/architecture/32-Buddy系统/buddy-system' },
          { text: '35 Computer Use', link: '/architecture/35-Computer-Use/computer-use' },
          { text: '38 输出样式', link: '/architecture/38-输出样式/output-styles' },
          { text: '39 原生模块', link: '/architecture/39-原生模块/native-modules' },
          { text: '40 迁移系统', link: '/architecture/40-迁移系统/migration-system' },
          { text: '43 Shell 工具链', link: '/architecture/43-Shell工具链/shell-toolchain' },
          { text: '44 Screens 组件', link: '/architecture/44-Screens组件/screens-components' },
          { text: '45 类型系统', link: '/architecture/45-类型系统/type-system' },
          { text: '46 完整数据流图', link: '/architecture/46-完整数据流图/complete-data-flow' }
        ]
      }
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
  },
  {
    text: 'Part 10: Architecture Deep Dive',
    collapsed: true,
    items: [
      {
        text: 'Core Loop',
        collapsed: true,
        items: [
          { text: '01 System Overview', link: '/en/architecture/01-系统总览/system-overview' },
          { text: '02 Startup & Initialization', link: '/en/architecture/02-启动与初始化/initialization' },
          { text: '03 Query Engine', link: '/en/architecture/03-查询引擎/query-engine' },
          { text: '04 API Client', link: '/en/architecture/04-API客户端/api-client' },
          { text: '05 Tool System', link: '/en/architecture/05-工具系统/tool-system' }
        ]
      },
      {
        text: 'Security Model',
        collapsed: true,
        items: [
          { text: '06 Permissions & Security', link: '/en/architecture/06-权限与安全/permission-security' },
          { text: '24 Sandbox System', link: '/en/architecture/24-沙箱系统/sandbox-system' },
          { text: '34 Swarm Architecture', link: '/en/architecture/34-Swarm系统/swarm-architecture' }
        ]
      },
      {
        text: 'Context Strategy',
        collapsed: true,
        items: [
          { text: '07 Context Management', link: '/en/architecture/07-上下文管理/context-management' },
          { text: '16 Memory System', link: '/en/architecture/16-记忆系统/memory-system' },
          { text: '20 Services Layer', link: '/en/architecture/20-服务层/services-complete' }
        ]
      },
      {
        text: 'Extensibility',
        collapsed: true,
        items: [
          { text: '08 MCP Integration', link: '/en/architecture/08-MCP集成/mcp-integration' },
          { text: '10 Skills System', link: '/en/architecture/10-Skills系统/skills-system' },
          { text: '21 Plugin System', link: '/en/architecture/21-插件系统/plugin-system' },
          { text: '09 Hooks System', link: '/en/architecture/09-Hooks系统/hooks-system' }
        ]
      },
      {
        text: 'User Experience',
        collapsed: true,
        items: [
          { text: '12 UI Rendering', link: '/en/architecture/12-UI渲染/ui-rendering' },
          { text: '27 Keybinding System', link: '/en/architecture/27-键绑定与输入/keybinding-system' },
          { text: '19 Feedback System', link: '/en/architecture/19-反馈与调查/feedback-system' },
          { text: '42 Cost Tracking', link: '/en/architecture/42-代价追踪/cost-tracking' }
        ]
      },
      {
        text: 'Multi-Agent',
        collapsed: true,
        items: [
          { text: '11 Multi-Agent', link: '/en/architecture/11-多智能体/multi-agent' },
          { text: '33 Coordinator Mode', link: '/en/architecture/33-协调器模式/coordinator-mode' },
          { text: '34 Swarm Architecture', link: '/en/architecture/34-Swarm系统/swarm-architecture' },
          { text: '37 Teleport', link: '/en/architecture/37-Teleport/teleport-system' }
        ]
      },
      {
        text: 'Remote',
        collapsed: true,
        items: [
          { text: '30 Remote Session', link: '/en/architecture/30-远程会话/remote-session' },
          { text: '31 Bridge Protocol', link: '/en/architecture/31-Bridge协议/bridge-protocol' },
          { text: '36 DeepLink', link: '/en/architecture/36-DeepLink/deeplink-system' },
          { text: '41 File Persistence', link: '/en/architecture/41-文件持久化/file-persistence' }
        ]
      },
      {
        text: 'Others',
        collapsed: true,
        items: [
          { text: '13 Config System', link: '/en/architecture/13-配置体系/config-system' },
          { text: '14 State Management', link: '/en/architecture/14-状态管理/state-management' },
          { text: '15 Command System', link: '/en/architecture/15-命令体系/command-system' },
          { text: '17 Error Recovery', link: '/en/architecture/17-错误恢复/error-recovery' },
          { text: '18 Telemetry System', link: '/en/architecture/18-遥测分析/telemetry-system' },
          { text: '22 OAuth & Auth', link: '/en/architecture/22-OAuth与认证/oauth-auth' },
          { text: '23 LSP Integration', link: '/en/architecture/23-LSP集成/lsp-integration' },
          { text: '25 Git & GitHub', link: '/en/architecture/25-Git与GitHub/git-github' },
          { text: '26 Session Management', link: '/en/architecture/26-会话管理/session-management' },
          { text: '28 Vim Mode', link: '/en/architecture/28-Vim模式/vim-mode' },
          { text: '29 Voice System', link: '/en/architecture/29-语音系统/voice-system' },
          { text: '32 Buddy System', link: '/en/architecture/32-Buddy系统/buddy-system' },
          { text: '35 Computer Use', link: '/en/architecture/35-Computer-Use/computer-use' },
          { text: '38 Output Styles', link: '/en/architecture/38-输出样式/output-styles' },
          { text: '39 Native Modules', link: '/en/architecture/39-原生模块/native-modules' },
          { text: '40 Migration System', link: '/en/architecture/40-迁移系统/migration-system' },
          { text: '43 Shell Toolchain', link: '/en/architecture/43-Shell工具链/shell-toolchain' },
          { text: '44 Screens Components', link: '/en/architecture/44-Screens组件/screens-components' },
          { text: '45 Type System', link: '/en/architecture/45-类型系统/type-system' },
          { text: '46 Complete Data Flow', link: '/en/architecture/46-完整数据流图/complete-data-flow' }
        ]
      }
    ]
  }
]

export default defineConfig({
  srcDir: '..',
  outDir: '../docs/.vitepress/dist',
  cacheDir: '../docs/.vitepress/cache',

  base: '/claude-code-design-guide/',

  metaChunk: true,

  ignoreDeadLinks: [
    
  ],

  rewrites: {
    'index_en.md': 'en/index.md',
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

    'architecture/index_en.md': 'en/architecture/index.md',
    'architecture/01-系统总览/system-overview_en.md': 'en/architecture/01-系统总览/system-overview.md',
    'architecture/02-启动与初始化/initialization_en.md': 'en/architecture/02-启动与初始化/initialization.md',
    'architecture/03-查询引擎/query-engine_en.md': 'en/architecture/03-查询引擎/query-engine.md',
    'architecture/04-API客户端/api-client_en.md': 'en/architecture/04-API客户端/api-client.md',
    'architecture/05-工具系统/tool-system_en.md': 'en/architecture/05-工具系统/tool-system.md',
    'architecture/06-权限与安全/permission-security_en.md': 'en/architecture/06-权限与安全/permission-security.md',
    'architecture/07-上下文管理/context-management_en.md': 'en/architecture/07-上下文管理/context-management.md',
    'architecture/08-MCP集成/mcp-integration_en.md': 'en/architecture/08-MCP集成/mcp-integration.md',
    'architecture/09-Hooks系统/hooks-system_en.md': 'en/architecture/09-Hooks系统/hooks-system.md',
    'architecture/10-Skills系统/skills-system_en.md': 'en/architecture/10-Skills系统/skills-system.md',
    'architecture/11-多智能体/multi-agent_en.md': 'en/architecture/11-多智能体/multi-agent.md',
    'architecture/12-UI渲染/ui-rendering_en.md': 'en/architecture/12-UI渲染/ui-rendering.md',
    'architecture/13-配置体系/config-system_en.md': 'en/architecture/13-配置体系/config-system.md',
    'architecture/14-状态管理/state-management_en.md': 'en/architecture/14-状态管理/state-management.md',
    'architecture/15-命令体系/command-system_en.md': 'en/architecture/15-命令体系/command-system.md',
    'architecture/16-记忆系统/memory-system_en.md': 'en/architecture/16-记忆系统/memory-system.md',
    'architecture/17-错误恢复/error-recovery_en.md': 'en/architecture/17-错误恢复/error-recovery.md',
    'architecture/18-遥测分析/telemetry-system_en.md': 'en/architecture/18-遥测分析/telemetry-system.md',
    'architecture/19-反馈与调查/feedback-system_en.md': 'en/architecture/19-反馈与调查/feedback-system.md',
    'architecture/20-服务层/services-complete_en.md': 'en/architecture/20-服务层/services-complete.md',
    'architecture/21-插件系统/plugin-system_en.md': 'en/architecture/21-插件系统/plugin-system.md',
    'architecture/22-OAuth与认证/oauth-auth_en.md': 'en/architecture/22-OAuth与认证/oauth-auth.md',
    'architecture/23-LSP集成/lsp-integration_en.md': 'en/architecture/23-LSP集成/lsp-integration.md',
    'architecture/24-沙箱系统/sandbox-system_en.md': 'en/architecture/24-沙箱系统/sandbox-system.md',
    'architecture/25-Git与GitHub/git-github_en.md': 'en/architecture/25-Git与GitHub/git-github.md',
    'architecture/26-会话管理/session-management_en.md': 'en/architecture/26-会话管理/session-management.md',
    'architecture/27-键绑定与输入/keybinding-system_en.md': 'en/architecture/27-键绑定与输入/keybinding-system.md',
    'architecture/28-Vim模式/vim-mode_en.md': 'en/architecture/28-Vim模式/vim-mode.md',
    'architecture/29-语音系统/voice-system_en.md': 'en/architecture/29-语音系统/voice-system.md',
    'architecture/30-远程会话/remote-session_en.md': 'en/architecture/30-远程会话/remote-session.md',
    'architecture/31-Bridge协议/bridge-protocol_en.md': 'en/architecture/31-Bridge协议/bridge-protocol.md',
    'architecture/32-Buddy系统/buddy-system_en.md': 'en/architecture/32-Buddy系统/buddy-system.md',
    'architecture/33-协调器模式/coordinator-mode_en.md': 'en/architecture/33-协调器模式/coordinator-mode.md',
    'architecture/34-Swarm系统/swarm-architecture_en.md': 'en/architecture/34-Swarm系统/swarm-architecture.md',
    'architecture/35-Computer-Use/computer-use_en.md': 'en/architecture/35-Computer-Use/computer-use.md',
    'architecture/36-DeepLink/deeplink-system_en.md': 'en/architecture/36-DeepLink/deeplink-system.md',
    'architecture/37-Teleport/teleport-system_en.md': 'en/architecture/37-Teleport/teleport-system.md',
    'architecture/38-输出样式/output-styles_en.md': 'en/architecture/38-输出样式/output-styles.md',
    'architecture/39-原生模块/native-modules_en.md': 'en/architecture/39-原生模块/native-modules.md',
    'architecture/40-迁移系统/migration-system_en.md': 'en/architecture/40-迁移系统/migration-system.md',
    'architecture/41-文件持久化/file-persistence_en.md': 'en/architecture/41-文件持久化/file-persistence.md',
    'architecture/42-代价追踪/cost-tracking_en.md': 'en/architecture/42-代价追踪/cost-tracking.md',
    'architecture/43-Shell工具链/shell-toolchain_en.md': 'en/architecture/43-Shell工具链/shell-toolchain.md',
    'architecture/44-Screens组件/screens-components_en.md': 'en/architecture/44-Screens组件/screens-components.md',
    'architecture/45-类型系统/type-system_en.md': 'en/architecture/45-类型系统/type-system.md',
    'architecture/46-完整数据流图/complete-data-flow_en.md': 'en/architecture/46-完整数据流图/complete-data-flow.md',
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
    footer: {
      message: '基于<a href="https://github.com/6551Team/claude-code-design-guide" target="_blank">Claude Code 设计指南</a>构建',
    },
    search: {
      provider: 'local'
    }
  }
})
