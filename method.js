const createTable = (database, tableName, column) => {
    let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
    column.map(item => {
        sql += item;
    });
    sql += ');';
    database.run(sql);
    console.log(`${tableName} has been created successfully...`);
}

const convertInsertSql = (obj, tableName) => {
    const data = Object.keys(obj);
    let sql = `INSERT INTO ${tableName} (`;
    data.map((item, index) => {
        sql += `'${item}'`;
        if (index < data.length - 1) {
            sql += ',';
        }
    });
    sql += 'last_modified) \n VALUES (';
    data.map((item, index) => {
        if (typeof obj[item] === 'string') {
            sql += `'${obj[item]}'`;
        } else {
            sql += `${obj[item]}`;
        }
        if (index < data.length - 1) {
            sql += ',';
        }
    })
    sql += `date('now')`;
    sql += ');';

    return sql;
}

const insertData = (database, tableName, data) => {
    data.map(item => {
        let sql = convertInsertSql(item, tableName);
        console.log(sql)
        database.run(sql);
    })
}

// const insertData = (database, tableName, column) => {
//     let sql = `INSERT INTO ${tableName} ( id, name, experiment_number, stu_id, comment, is_review, last_modified)
//     VALUES(1, 'linux教学实验', '1', '5120151234', '优秀', 0, '2019-02-23 22:18:16.284'); `;
//     database.run(sql);
// }

const updateData = () => {

}

module.exports = {
    createTable,
    insertData,
}