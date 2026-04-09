// 游戏页逻辑
document.addEventListener('DOMContentLoaded', function() {
    initModal('publishModal', 'publishBtn', 'closeModal');
    
    const form = document.getElementById('publishForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('发布成功！');
            document.getElementById('publishModal').classList.remove('active');
            form.reset();
        });
    }
});
