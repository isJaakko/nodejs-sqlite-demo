const tableCol = [
    'id INT PRIMARY KEY NOT NULL,',
    'name TEXT NOT NULL,',
    'experiment_number TEXT NOT NULL,',
    'stu_id TEXT NOT NULL,',
    'score_total REAL NOT NULL,',
    'comment TEXT NOT NULL,',
    'is_review INTEGER NOT NULL,',
    // 'last_modified TEXT NOT NULL',
];

const tableData = [{
    id: 1,
    name: 'linux教学实验',
    experiment_number: 1,
    stu_id: '5120150000',
    score_total: 89,
    comment: '优秀',
    is_review: 0,
    last_modified: '2019-02-23 22:18:16.284'
}, {
    id: 2,
    name: 'linux教学实验',
    experiment_number: 1,
    stu_id: '5120150001',
    score_total: 89,
    comment: '一般',
    is_review: 0,
    last_modified: '2019-02-24 01:08:26.577'
}];

const insertStatement = [
    `INSERT INTO course_score (id, name, experiment_number, stu_id, comment, is_review, last_modified)
    VALUES (1, 'linux教学实验', '1', '5120151234', '优秀', 0, '2019-02-23 22:18:16.284');`,
];

module.exports = {
    tableCol,
    tableData
}