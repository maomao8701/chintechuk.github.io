document.getElementById('submitBtn').onclick = function() {
    let text = document.getElementById('inputText').value;
    if(!text) { alert("请输入一句话"); return; }

    // 模拟生成崩溃指数
    let index = Math.floor(Math.random()*40 + 60); // 60~100%
    let status = index > 85 ? "已崩溃 😵" : index > 70 ? "临界点 😓" : "压力中 😐";
    let analysis = "你不是不行，只是背负太多任务";
    let advice = "先深呼吸 2 分钟，再处理一件最重要的事";

    document.getElementById('index').innerText = "崩溃指数：" + index + "%";
    document.getElementById('status').innerText = "状态：" + status;
    document.getElementById('analysis').innerText = "分析：" + analysis;
    document.getElementById('advice').innerText = "行动建议：" + advice;

    document.getElementById('stressResult').style.display = "block";
}

document.getElementById('shareBtn').onclick = function() {
    html2canvas(document.getElementById('stressResult')).then(canvas => {
        let link = document.createElement('a');
        link.download = '崩溃指数.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
