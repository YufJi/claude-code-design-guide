---
layout: home

hero:
  name: "Claude Code 设计指南"
  text: "AI Agent 工程的深度解析"
  tagline: 从互联网早期设计模型到 AI Agent 实战 —— 一本写给开发者的 Claude Code 深度解析
  actions:
    - theme: brand
      text: 开始阅读 →
      link: /00-preface
    - theme: alt
      text: GitHub
      link: https://github.com/6551Team/claude-code-design-guide


features:
  - icon: 👋
    title: 第一部分：认识 Claude Code
    details: 小白友好入门，快速了解 Claude Code 是什么、能做什么、怎么用
    link: /part1/01-introduction
    linkText: 开始阅读

  - icon: 🏛️
    title: 第二部分：从互联网早期设计到 AI Agent
    details: 追溯 Unix 哲学、REPL 演化史，理解 AI Agent 的历史渊源
    link: /part2/03-unix-philosophy
    linkText: 探索历史

  - icon: 🏗️
    title: 第三部分：架构设计
    details: 深入解析查询引擎、状态管理和消息循环的核心架构
    link: /part3/06-query-engine
    linkText: 学习架构

  - icon: 🔧
    title: 第四部分：工具系统设计
    details: 43 个内置工具全览，工具权限模型的设计哲学
    link: /part4/09-tool-design
    linkText: 了解工具

  - icon: 🧠
    title: 第五部分：Context Engineering
    details: 上下文工程的核心思想，系统提示构建艺术，Memory 与压缩机制
    link: /part5/12-context-what
    linkText: 掌握上下文

  - icon: 🤖
    title: 第六部分：Agent Runtime 与多代理
    details: 任务系统设计、多代理架构模式、协调器模式的实战应用
    link: /part6/16-task-system
    linkText: 探索多代理

  - icon: 🔌
    title: 第七部分：扩展系统
    details: MCP 协议详解，Skills 系统和插件系统的设计与使用
    link: /part7/19-mcp
    linkText: 学习扩展

  - icon: 🛡️
    title: 第八部分：安全、权限与性能
    details: 五层权限架构、安全设计原则、性能优化实践
    link: /part8/22-permission-model
    linkText: 安全优先

  - icon: 💡
    title: 第九部分：设计哲学
    details: Claude Code 的设计原则与未来展望，深度思考 AI 工程范式
    link: /part9/25-design-principles
    linkText: 哲学思考
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>