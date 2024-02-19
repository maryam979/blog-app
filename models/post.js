const fs = require('fs');
const path = require('path');
const postsFilePath = path.join(__dirname, '../data/posts.json'); 

const getData = () => {
    const data = require(postsFilePath);
    return data;
}

const saveData = (data) => {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(postsFilePath, jsonData);
}

module.exports = {
    getData,
    saveData
};
