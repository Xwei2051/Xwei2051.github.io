---
title: Claude Code 使用：MCP 与 Git Bash 配置
published: 2026-07-21
description: 记录 Claude Code 中 MCP 的添加方式，以及在 Git Bash 中使用 Claude Code 的环境变量配置。
tags: [Claude Code, MCP, Git Bash, 学习笔记]
category: 学习
pinned: false
draft: false
---

# MCP 使用

MCP 是一个统一的协议标准，使 AI 模型能够以一致的方式连接各种数据源和工具，类似于 AI 世界的 "USB-C" 接口。

原笔记里引用了本地视频 `mcp了解.mp4`。如果后面想在博客里展示这个视频，需要把视频文件放到 `public` 目录下，再用标准 Markdown 或 HTML 引用。

## 添加 MCP

```bash
claude mcp add-json mcp名称 '{ "type": "", "url": "", "headers": { "Authorization": "Bearer 你的密钥" } }'
```

> 注意：上面的命令默认是 `local` scope，也就是只对当前项目生效。
>
> 如果想让所有项目都生效，可以在 MCP 名称后加入 `--scope user`。

具体可以参考 [Claude Code MCP 官方使用文档](https://code.claude.com/docs/zh-CN/mcp)。

# Git Bash 中使用 Claude Code

添加环境变量 `CLAUDE_CODE_GIT_BASH_PATH`，变量值为 `bash.exe` 的路径，一般是：

```text
C:\Program Files\Git\bin\bash.exe
```
