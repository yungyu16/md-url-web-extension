# Markdown URL Copier

A browser extension that allows you to quickly copy Markdown formatted URLs of pages, images, and links to the clipboard via the context menu.

[中文版](README_zh.md)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
  - [Chrome/Edge Browsers](#chromeedge-browsers)
- [Usage](#usage)
- [Development Guide](#development-guide)
  - [Project Structure](#project-structure)
  - [Tech Stack](#tech-stack)
  - [Setting Up Development Environment](#setting-up-development-environment)
  - [Building the Project](#building-the-project)
- [Permissions](#permissions)
- [Contributing](#contributing)
- [License](#license)

## Features

- 📋 One-click copy of the current page's Markdown URL format
- 🖼️ Right-click on images to copy the image's Markdown URL format
- 🔗 Right-click on links to copy the link's Markdown URL format
- 📝 Real-time copy success/failure notifications

## Installation

### Chrome/Edge Browsers

1. Download or clone this project
2. Run the build command:
   ```bash
   yarn build:chrome
   # or
   npm run build:chrome
   ```
3. Open Chrome browser and visit `chrome://extensions/`
4. Enable "Developer mode" in the top right corner
5. Click "Load unpacked extension"
6. Select the `dist_chrome` folder in the project

## Usage

After installation, you can use it in the following ways:

1. **Copy Current Page URL**:
    - Right-click anywhere on a page and select "Copy Page Markdown URL"
    - Or click the extension icon in the browser toolbar

2. **Copy Image URL**:
    - Right-click on an image on a webpage and select "Copy Image Markdown URL"

3. **Copy Link URL**:
    - Right-click on a link on a webpage and select "Copy Link Markdown URL"

After successful copying, you will see a brief success notification, and the Markdown formatted URL will be copied to your clipboard.

## Development Guide

### Project Structure

```
src/
├── pages/
│   ├── background/     # Background scripts
│   └── content/        # Content scripts
├── assets/             # Static assets
└── locales/            # Localization files
```

### Tech Stack

- TypeScript
- React
- Vite
- TailwindCSS
- WebExtension API

### Setting Up Development Environment

1. Clone the project:
   ```bash
   git clone https://github.com/yungyu16/md-url-web-extension.git
   cd md-url-web-extension
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   # For Chrome
   yarn dev:chrome
   # For Firefox
   yarn dev:firefox
   ```

### Building the Project

```bash
# Build Chrome version
yarn build:chrome

# Build all versions
yarn build
```

## Permissions

This extension requires the following permissions:

- `contextMenus`: To create context menu items
- `activeTab`: To access information about the currently active tab

## Contributing

Feel free to submit Issues and Pull Requests to improve this project!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

If you find this project useful, please give it a ⭐ Star!