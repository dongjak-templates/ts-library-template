import fs from 'fs'

// 读取package.json文件
fs.readFile('package.json', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    // 解析为JSON对象
    let packageObj = JSON.parse(data);

    // 添加新的字段
   delete packageObj.files
    delete packageObj.typings
    delete packageObj.module
    delete  packageObj.exports

    // 将JSON对象转换回字符串
    let updatedData = JSON.stringify(packageObj, null, 2);

    // 写回package.json文件
    fs.writeFile('package.json', updatedData, 'utf8', function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log('package.json has been updated');
        }
    });
});
