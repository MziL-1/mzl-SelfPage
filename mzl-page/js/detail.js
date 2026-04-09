// 详情页逻辑
document.addEventListener('DOMContentLoaded', function() {
    const id = getUrlParam('id');
    const type = getUrlParam('type');
    
    const mockData = {
        photography: [
            { id: 1, title: '作品1', desc: '这是摄影作品1的详细介绍...', img: 'images/photo1.jpg' },
            { id: 2, title: '作品2', desc: '这是摄影作品2的详细介绍...', img: 'images/photo2.jpg' },
            { id: 3, title: '作品3', desc: '这是摄影作品3的详细介绍...', img: 'images/photo3.jpg' },
            { id: 4, title: '作品4', desc: '这是摄影作品4的详细介绍...', img: 'images/photo4.jpg' },
            { id: 5, title: '作品5', desc: '这是摄影作品5的详细介绍...', img: 'images/photo5.jpg' },
            { id: 6, title: '作品6', desc: '这是摄影作品6的详细介绍...', img: 'images/photo6.jpg' },
            { id: 7, title: '作品7', desc: '这是摄影作品7的详细介绍...', img: 'images/photo7.jpg' }
        ],
        study: [
            { id: 1, title: '笔记1', desc: '这是学习笔记1的详细介绍...', img: 'images/study1.jpg' },
            { id: 2, title: '笔记2', desc: '这是学习笔记2的详细介绍...', img: 'images/study2.jpg' },
            { id: 3, title: '笔记3', desc: '这是学习笔记3的详细介绍...', img: 'images/study3.jpg' },
            { id: 4, title: '笔记4', desc: '这是学习笔记4的详细介绍...', img: 'images/study4.jpg' }
        ],
        game: [
            { id: 1, title: '游戏1', desc: '这是游戏1的详细介绍...', img: 'images/game1.jpg' },
            { id: 2, title: '游戏2', desc: '这是游戏2的详细介绍...', img: 'images/game2.jpg' },
            { id: 3, title: '游戏3', desc: '这是游戏3的详细介绍...', img: 'images/game3.jpg' },
            { id: 4, title: '游戏4', desc: '这是游戏4的详细介绍...', img: 'images/game4.jpg' }
        ],
        entertainment: [
            { id: 1, title: '娱乐1', desc: '这是娱乐内容1的详细介绍...', img: 'images/entertainment1.jpg' },
            { id: 2, title: '娱乐2', desc: '这是娱乐内容2的详细介绍...', img: 'images/entertainment2.jpg' },
            { id: 3, title: '娱乐3', desc: '这是娱乐内容3的详细介绍...', img: 'images/entertainment3.jpg' },
            { id: 4, title: '娱乐4', desc: '这是娱乐内容4的详细介绍...', img: 'images/entertainment4.jpg' }
        ]
    };
    
    if (type && mockData[type]) {
        const item = mockData[type].find(i => i.id == id);
        if (item) {
            document.getElementById('detailTitle').textContent = item.title;
            document.getElementById('detailDesc').textContent = item.desc;
            document.getElementById('detailImage').style.backgroundImage = `url('${item.img}')`;
            document.title = 'MZL - ' + item.title;
        }
    }
});
