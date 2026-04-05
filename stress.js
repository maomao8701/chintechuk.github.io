// stress.js

// 当点击“检测一下”按钮
document.getElementById('submitBtn').onclick = function() {
    let text = document.getElementById('inputText').value;
    if(!text) { 
        alert("请输入一句话描述你的状态"); 
        return; 
    }

    // 模拟生成崩溃指数
    let index = Math.floor(Math.random()*40 + 60); // 60~100%
    let status = index > 85 ? "已崩溃 😵" : index > 70 ? "临界点 😓" : "压力中 😐";
    let analysis = "你不是不行，只是背负太多任务";
    let advice = "先深呼吸 2 分钟，再处理一件最重要的事";

    // 填入结果区域
    document.getElementById('index').innerText = "崩溃指数：" + index + "%";
    document.getElementById('status').innerText = "状态：" + status;
    document.getElementById('analysis').innerText = "分析：" + analysis;
    document.getElementById('advice').innerText = "行动建议：" + advice;

    // 显示结果区域
    document.getElementById('resultArea').style.display = "block";
}

// 点击“生成分享图”按钮
document.getElementById('shareBtn').onclick = function() {
    html2canvas(document.getElementById('resultArea')).then(canvas => {
        let link = document.createElement('a');
        link.download = '崩溃指数.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
