const sqlite = require('sqlite3');

// 打开数据库，若不存在则创建
const database = new sqlite.Database('course_score.db', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('connected to database...');
    }
});

// 若表不存在则创建
database.run(`CREATE TABLE IF NOT EXISTS COMPANY( 
        ID INT PRIMARY KEY NOT NULL,
        NAME TEXT NOT NULL,
        AGE INT NOT NULL, 
        ADDRESS CHAR(50), SALARY REAL);`,
    [],
    () => {
        console.log('create Table successfully!');
    }
)

const insertStatement = [
    `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (1, 'Paul', 32, 'California', 20000.00 );`,
    `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (2, 'Allen', 25, 'Texas', 15000.00 );`,
    `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );`
];

// 插入数据
// insertStatement.forEach(item => {
//     database.run(item);
// })

// 查询语句
database.get("select * from COMPANY;", [], (err, row) => {
    if (err) {
        console.log(err);
    } else {
        console.log(row);
    }
});