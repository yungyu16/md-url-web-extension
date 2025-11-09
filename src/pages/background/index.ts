import {copy} from './uitls';

// 图标点击时
chrome.action.onClicked.addListener((tab) => {
    const markdownUrl = `[${tab.title}](${tab.url})`;
    console.log("复制页面Markdown URL:", markdownUrl);
    copy(markdownUrl)
});

// 创建右键菜单项
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "copyPageUrl",
        title: "复制页面Markdown URL",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "copyImgUrl",
        title: "复制图片Markdown URL",
        contexts: ["image"]
    });
    chrome.contextMenus.create({
        id: "copyLinkUrl",
        title: "复制链接Markdown URL",
        contexts: ["link"]
    });
});

// 监听菜单项点击事件
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    let markdownUrl = '';

    // 处理复制页面Markdown URL
    if (info.menuItemId === "copyPageUrl" && tab?.url && tab.title) {
        markdownUrl = `[${tab.title}](${tab.url})`;
        console.log("复制页面Markdown URL:", markdownUrl);
    }
    // 处理复制图片Markdown URL
    else if (info.menuItemId === "copyImgUrl" && info.srcUrl) {
        // 对于图片，通常使用图片URL作为alt文本的一部分，或者留空
        const imgAlt = "Image";
        markdownUrl = `![${imgAlt}](${info.srcUrl})`;
        console.log("复制图片Markdown URL:", markdownUrl);
    }
    // 处理复制链接Markdown URL
    else if (info.menuItemId === "copyLinkUrl" && info.linkUrl) {
        markdownUrl = `[Link](${info.linkUrl})`;
        console.log("复制链接Markdown URL:", markdownUrl);
    }
    // 发送消息到内容脚本以复制到剪贴板（适用于页面和图片）
    if (markdownUrl) {
        copy(markdownUrl)
    }
})

console.log('background script loaded');