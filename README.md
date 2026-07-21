# Xwei2051 Signal Archive

这是我的个人博客仓库，用来记录学习、项目、工具配置、问题排查和一些生活片段。

站点基于 [Astro](https://astro.build/) 和 Mizuki 模板改造，目前已经按个人使用习惯调整了视觉、导航、友链、日记页、项目页和关于页。

## 内容方向

- 学习笔记：课程、英语、编程、工具使用和知识整理。
- 问题记录：报错现场、排查过程、解决方案和复盘。
- 项目实践：个人网站、小工具、网页实验和后续作品集。
- 生活片段：跑步、羽毛球、日记和状态记录。

## 本地运行

```bash
pnpm install
pnpm dev
```

开发服务器默认运行在：

```txt
http://localhost:3000/
```

## 常用目录

```txt
src/content/posts/        文章
src/content/spec/about.md 关于页内容
src/data/friends.ts       友链
src/data/projects.ts      项目展示
src/data/diary.ts         日记
src/config/               站点配置
public/assets/            图片和静态资源
```

## 写文章

文章放到 `src/content/posts/`，开头需要 frontmatter：

```md
---
title: 文章标题
published: 2026-07-21
description: 文章简介
tags: [学习笔记]
category: 学习
draft: false
---
```

加密文章可以使用：

```md
encrypted: true
password: "your-password"
passwordHint: "密码提示"
```

## 日记

日记页独立于主页文章列表，数据在 `src/data/diary.ts`：

```ts
{
  id: 2,
  content: "今天英语学习 2 小时，主要练了听力和单词复习。",
  date: "2026-07-21T22:30:00+08:00",
  mood: "稳定",
  tags: ["英语", "学习"],
}
```

## 构建

```bash
pnpm build
```

构建结果会输出到：

```txt
dist/
```

## 部署

计划部署到 GitHub Pages：

```txt
https://Xwei2051.github.io/
```

推送到 `master` 分支后，通过 GitHub Actions 构建并发布。

## Credit

本站基于 Mizuki 进行个人化改造。感谢原项目提供的基础框架。
