const tableCol = [
    'id INTEGER PRIMARY KEY,',
    'name TEXT NOT NULL,',
    'experiment_number TEXT NOT NULL,',
    'stu_id TEXT NOT NULL,',
    'score_total REAL NOT NULL,',
    'comment TEXT NOT NULL,',
    'is_review INTEGER NOT NULL,',
    `last_modified NOT NULL DEFAULT (datetime('now','localtime'))`,
];

const tableData = [{
    name: 'linux教学实验',
    experiment_number: 1,
    stu_id: '5120150000',
    score_total: 89,
    comment: '优秀',
    is_review: 0,
}, {
    name: 'linux教学实验',
    experiment_number: 1,
    stu_id: '5120150001',
    score_total: 89,
    comment: '一般',
    is_review: 0,
}];

module.exports = {
    tableCol,
    tableData
}