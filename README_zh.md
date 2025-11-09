# Markdown URL 复制器

一个浏览器扩展，允许你通过右键菜单快速复制页面、图片和链接的 Markdown 格式 URL 到剪贴板。

[English Version](README.md)

## 目录
- [功能特点](#功能特点)
- [安装方式](#安装方式)
  - [Chrome/Edge 浏览器](#chromeedge-浏览器)
- [使用方法](#使用方法)
- [开发指南](#开发指南)
  - [项目结构](#项目结构)
  - [技术栈](#技术栈)
  - [开发环境搭建](#开发环境搭建)
  - [构建项目](#构建项目)
- [权限说明](#权限说明)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

## 功能特点

- 📋 一键复制当前页面的 Markdown URL 格式
- 🖼️ 右键点击图片复制图片的 Markdown URL 格式
- 🔗 右键点击链接复制链接的 Markdown URL 格式
- 📝 实时复制成功/失败通知

## 安装方式

### Chrome/Edge 浏览器

1. 下载或克隆本项目
2. 运行构建命令：
   ```bash
   yarn build:chrome
   # 或者
   npm run build:chrome
   ```
3. 打开 Chrome 浏览器，访问 `chrome://extensions/`
4. 开启右上角的"开发者模式"
5. 点击"加载已解压的扩展程序"
6. 选择项目中的 `dist_chrome` 文件夹

## 使用方法

安装完成后，你可以通过以下方式使用：

1. **复制当前页面 URL**：
    - 在任意页面上右键点击，选择"复制页面Markdown URL"
    - 或者点击浏览器工具栏中的扩展图标

2. **复制图片 URL**：
    - 在网页上的图片上右键点击，选择"复制图片Markdown URL"

3. **复制链接 URL**：
    - 在网页上的链接上右键点击，选择"复制链接Markdown URL"

复制成功后，你会看到短暂的成功提示，并且 Markdown 格式的 URL 已经复制到剪贴板中。

## 开发指南

### 项目结构

```
src/
├── pages/
│   ├── background/     # 后台脚本
│   └── content/        # 内容脚本
├── assets/             # 静态资源
└── locales/            # 国际化文件
```

### 技术栈

- TypeScript
- React
- Vite
- TailwindCSS
- WebExtension API

### 开发环境搭建

1. 克隆项目：
   ```bash
   git clone https://github.com/yungyu16/md-url-web-extension.git
   cd md-url-web-extension
   ```

2. 安装依赖：
   ```bash
   yarn install
   # 或者
   npm install
   ```

3. 启动开发服务器：
   ```bash
   # Chrome
   yarn dev:chrome
   # 或者 Firefox
   yarn dev:firefox
   ```

### 构建项目

```bash
# 构建 Chrome 版本
yarn build:chrome

# 构建所有版本
yarn build
```

## 权限说明

本扩展需要以下权限：

- `contextMenus`: 创建右键菜单项
- `activeTab`: 访问当前活动标签页的信息

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

---

如果你觉得这个项目有用，请给它一个 ⭐ Star！