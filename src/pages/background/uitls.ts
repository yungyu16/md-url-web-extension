// background.js
function notify(success, content) {
    chrome.tabs.query({active: true, currentWindow: true})
        .then((tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {action: 'notify', text: content, success},
            );
        }).catch(console.error);
}

export function copy(content) {
    chrome.tabs.query({active: true, currentWindow: true})
        .then((tabs) => {
            if (!tabs) {
                notify(false, '复制失败！请选中页面后重试...')
            }
            chrome.tabs.sendMessage(
                tabs[0].id,
                {action: 'copy', text: content},
                (response) => {
                    if (response?.success) {
                        notify(true, '复制成功！')
                    } else {
                        console.error('复制失败:', response?.error);
                        notify(false, '复制失败！请重试...')
                    }
                }
            );
        }).catch(console.error);
}