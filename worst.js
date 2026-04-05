document.getElementById('submitBtn').onclick = function() {
    let text = document.getElementById('inputText').value;
    if(!text) { alert("请输入事件"); return; }

    let event = text;
    let worst = "订单被拒，但库存未受影响";
    let prob = Math.floor(Math.random()*50 + 20) + "%";
    let advice = "尝试提替代方案，准备下一个客户跟进";

    document.getElementById('event').innerText = "事件：" + event;
    document.getElementById('worst').innerText = "最坏情况：" + worst;
    document.getElementById('prob').innerText = "实际概率：" + prob;
    document.getElementById('advice').innerText = "建议方案：" + advice;

    document.getElementById('resultArea').style.display = "block";
}

document.getElementById('shareBtn').onclick = function() {
    html2canvas(document.getElementById('resultArea')).then(canvas => {
        let link = document.createElement('a');
        link.download = '最坏结果.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
