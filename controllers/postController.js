const { getData, saveData } = require('../models/post');

const getAllPosts = (req, res) => {
    const data = getData();
    res.json(data);
}

const getOnePost = (req, res) => {
    const data = getData();
    const postId = parseInt(req.params.id);
    const post = data.find(post => post.id === postId);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.json(post);
}

const addOnePost = (req, res) => {
    const data = getData();
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required fields' });
    }
    const newPost = {
        id: data.length + 1, // Generate new ID
        title,
        content
    };
    data.push(newPost);
    saveData(data);
    res.status(201).json(newPost);
}

const updateOnePost = (req, res) => {
    const data = getData();
    const postId = parseInt(req.params.id);
    const postIndex = data.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).send('Post not found');
    }
    const updatedPost = {
        id: postId,
        title: req.body.title,
        content: req.body.content
    };
    data[postIndex] = updatedPost;
    saveData(data);
    res.json(updatedPost);
}

const deleteOnePost = (req, res) => {
    const data = getData();
    const postId = parseInt(req.params.id);
    const newData = data.filter(post => post.id !== postId);
    if (data.length === newData.length) {
        return res.status(404).send('Post not found');
    }
    saveData(newData);
    res.send('Post deleted successfully');
}

module.exports = {
    getAllPosts,
    getOnePost,
    addOnePost,
    updateOnePost,
    deleteOnePost
};
