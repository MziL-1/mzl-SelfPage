// 详情页逻辑
document.addEventListener('DOMContentLoaded', function() {
    const id = getUrlParam('id');
    const type = getUrlParam('type');
    
    if (type && id) {
        fetch(`http://localhost:3000/api/images/${type}/${id}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById('detailTitle').textContent = data.title;
                document.getElementById('detailDesc').textContent = data.description || '暂无描述';
                document.getElementById('detailImage').style.backgroundImage = `url('images/${data.filename}')`;
                document.title = 'MZL - ' + data.title;
            })
            .catch(err => {
                console.error('加载详情失败：', err);
                document.getElementById('detailTitle').textContent = '加载失败';
                document.getElementById('detailDesc').textContent = '无法加载详情内容';
            });
    }
});