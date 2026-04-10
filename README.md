# 正念小森林

一个面向手机优先体验的正念生活交互网页原型，目标是帮助练习者把正念融入日常生活，而不是只停留在概念层面。

## 当前功能

- 今日正念态度卡
- 今日正念生活任务抽取
- 心情匹配推荐
- 一句话正念记录
- 本月正念日历
- 九态度展示
- 生活场景练习库

## 本地文件

- `index.html`：主页结构
- `styles.css`：页面视觉样式
- `script.js`：交互逻辑与本地存储
- `产品结构说明.md`：产品设计说明

## GitHub 发布步骤

如果这是第一次上传到 GitHub，可以在当前目录运行：

```bash
git init
git add .
git commit -m "Initial mindful living prototype"
git branch -M main
git remote add origin <你的 GitHub 仓库地址>
git push -u origin main
```

## Vercel 部署步骤

1. 登录 [Vercel](https://vercel.com)
2. 点击 `Add New...`
3. 选择 `Project`
4. 导入你刚刚创建的 GitHub 仓库
5. 保持默认设置直接部署

这是一个纯静态网站，不需要额外构建命令。Vercel 会直接发布根目录下的 `index.html`。

## 下一步建议

- 先完成 GitHub + Vercel 初次发布，建立手机预览链路
- 接着按手机优先重构首页首屏与卡片节奏
- 再拆成多页面结构和更完整的内容系统
