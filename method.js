const createTable = (database, tableName, column) => {
    let sql = `CREATE TABLE IF NOT EXISTS ${tableName} (`;
    column.map(item => {
        sql += item;
    });
    sql += ');';
    database.run(sql);
    console.log(`${tableName} has been created successfully...`);
}

const insertData = (database, tableName, column) => {
    let sql = `INSERT INTO ${tableName} ( id, name, experiment_number, stu_id, comment, is_review, last_modified)
    VALUES(1, 'linux教学实验', '1', '5120151234', '优秀', 0, '2019-02-23 22:18:16.284'); `;
    database.run(sql);
}

const updateData = () => {

}

module.exports = {
    createTable,
    insertData,
}