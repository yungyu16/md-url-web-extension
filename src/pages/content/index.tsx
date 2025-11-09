import {createRoot} from 'react-dom/client';
import toast, {Toaster} from 'react-hot-toast';

const div = document.createElement('div');
div.id = '__copy_md_url_root';
document.body.appendChild(div);

const rootContainer = document.querySelector('#__copy_md_url_root');
if (!rootContainer) throw new Error("Can't find Content root element");
const root = createRoot(rootContainer);
root.render(
    <div>
        <Toaster/>
    </div>
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'copy') {
        copyToClipboard(request.text)
            .then(() => sendResponse({success: true}))
            .catch((err) => {
                console.log("copy err", err)
                sendResponse({success: false, error: err});
            });
        return true; // 保持消息通道开放，等待异步响应
    }
    if (request.action === 'notify') {
        if (request.success) {
            toast.success(request.text, {duration: 500});
        } else {
            toast.error(request.text, {duration: 500});
        }
        return false; // 保持消息通道开放，等待异步响应
    }
});

// 复制函数（兼容现代API和旧方法）
async function copyToClipboard(text) {
    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Clipboard API 失败，尝试回退方法:', err);
        }
    }

    // 回退到 document.execCommand
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        const success = document.execCommand('copy');
        if (!success) throw new Error('复制失败');
        return true;
    } catch (err) {
        console.error('回退方法也失败:', err);
        throw err;
    } finally {
        document.body.removeChild(textarea);
    }
}

console.log('content script loaded');