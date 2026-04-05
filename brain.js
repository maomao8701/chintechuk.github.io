document.getElementById('submitBtn').onclick = function() {
    let text = document.getElementById('inputText').value;
    if(!text) { alert("请输入一些想法"); return; }

    let mustDo = ["回复客户邮件","完成报告初稿","买菜做晚饭"];
    let postpone = ["交付下周项目"];
    let ignore = ["点赞朋友圈"];

    document.getElementById('mustDo').innerText = "今日必须做：" + mustDo.join(" / ");
    document.getElementById('postpone').innerText = "可以延期：" + postpone.join(" / ");
    document.getElementById('ignore').innerText = "忽略：" + ignore.join(" / ");
    document.getElementById('resultArea').style.display = "block";
}

document.getElementById('shareBtn').onclick = function() {
    html2canvas(document.getElementById('resultArea')).then(canvas => {
        let link = document.createElement('a');
        link.download = '大脑清理.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
