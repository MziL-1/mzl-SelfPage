// 游戏页逻辑
document.addEventListener('DOMContentLoaded', function() {
    initModal('publishModal', 'publishBtn', 'closeModal');
    
    loadImages('game');
    
    const form = document.getElementById('publishForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const imageFile = document.getElementById('image').files[0];
            
            if (!title || !imageFile || !description) {
                alert('请填写所有字段');
                return;
            }
            
            const formData = {
                type: 'game',
                filename: imageFile.name,
                title: title,
                description: description
            };
            
            fetch('http://localhost:3000/api/images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => {
                alert('发布成功！');
                document.getElementById('publishModal').classList.remove('active');
                form.reset();
                loadImages('game');
            })
            .catch(err => {
                alert('发布失败：' + err.message);
            });
        });
    }
});

function loadImages(type) {
    const list = document.getElementById('gameList');
    if (!list) return;
    
    list.innerHTML = '';
    
    fetch(`http://localhost:3000/api/images/${type}`)
        .then(res => res.json())
        .then(data => {
            data.forEach((item, index) => {
                const card = document.createElement('a');
                card.href = `detail.html?id=${item.id}&type=${type}`;
                card.className = 'card';
                card.style.backgroundImage = `url('images/${item.filename}')`;
                
                const title = document.createElement('span');
                title.className = 'card-title';
                title.textContent = item.title;
                
                card.appendChild(title);
                list.appendChild(card);
            });
        })
        .catch(err => {
            console.error('加载图片失败：', err);
        });
}