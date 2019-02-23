const sqlite = require('sqlite3');
const method = require('./method');
const util = require('./util');

// 打开数据库，若不存在则创建
const database = new sqlite.Database('course_score.db', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('connected to database...');
    }
});

// 创建表
method.createTable(database, 'course_score', util.tableCol);
// 插入数据
method.insertData(database, 'course_score');
// 单条查询
// database.get("select * from COMPANY;", [], (err, row) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(row);
//     }
// });

database.close();