console.log('background script loaded');
// background.js
chrome.action.onClicked.addListener((tab) => {
    console.log("图标被点击，执行JS而不显示弹窗");
    // 在这里执行你的JS逻辑
});