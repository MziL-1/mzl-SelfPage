const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// 图片数据
const imageData = {
    photography: [
        { id: 1, filename: 'photo1.jpg', title: '作品1', description: '摄影作品1' },
        { id: 2, filename: 'photo2.jpg', title: '作品2', description: '摄影作品2' },
        { id: 3, filename: 'photo3.jpg', title: '作品3', description: '摄影作品3' },
        { id: 4, filename: 'photo4.jpg', title: '作品4', description: '摄影作品4' },
        { id: 5, filename: 'photo5.jpg', title: '作品5', description: '摄影作品5' }
    ],
    study: [
        { id: 1, filename: 'study1.jpg', title: '笔记1', description: '学习笔记1' },
        { id: 2, filename: 'study2.jpg', title: '笔记2', description: '学习笔记2' }
    ],
    game: [
        { id: 1, filename: 'game1.jpg', title: '游戏1', description: '游戏分享1' },
        { id: 2, filename: 'game2.jpg', title: '游戏2', description: '游戏分享2' },
        { id: 3, filename: 'game3.jpg', title: '游戏3', description: '游戏分享3' }
    ],
    entertainment: [
        { id: 1, filename: 'entertainment1.jpg', title: '娱乐1', description: '娱乐内容1' },
        { id: 2, filename: 'entertainment2.jpg', title: '娱乐2', description: '娱乐内容2' },
        { id: 3, filename: 'entertainment3.jpg', title: '娱乐3', description: '娱乐内容3' },
        { id: 4, filename: 'entertainment4.jpg', title: '娱乐4', description: '娱乐内容4' }
    ]
};

// API: 获取图片列表
app.get('/api/images/:type', (req, res) => {
    const type = req.params.type;
    if (imageData[type]) {
        res.json(imageData[type]);
    } else {
        res.status(404).json({ error: '类型不存在' });
    }
});

// API: 获取单个图片详情
app.get('/api/images/:type/:id', (req, res) => {
    const type = req.params.type;
    const id = parseInt(req.params.id);
    
    if (imageData[type]) {
        const item = imageData[type].find(img => img.id === id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: '图片不存在' });
        }
    } else {
        res.status(404).json({ error: '类型不存在' });
    }
});

// API: 添加图片（发布功能）
app.post('/api/images', (req, res) => {
    const { type, filename, title, description } = req.body;
    
    if (!type || !filename || !title) {
        return res.status(400).json({ error: '缺少必要字段' });
    }
    
    if (!imageData[type]) {
        return res.status(400).json({ error: '类型不存在' });
    }
    
    const newId = imageData[type].length + 1;
    const newImage = {
        id: newId,
        filename,
        title,
        description: description || ''
    };
    
    imageData[type].push(newImage);
    res.json({ success: true, data: newImage });
});

// 提供静态文件
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});