const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 회원 정보를 데이터베이스에 저장
exports.createUser = async (id, name, password) => {
  const sql = `INSERT INTO user (id, name, password) VALUES (?, ?, ?)`;
  await pool.execute(sql, [id, name, password]);
};

// 회원 정보로 사용자 조회
exports.findUserById = async (id) => {
  const sql = `SELECT * FROM user WHERE id = ?`;
  const [rows] = await pool.execute(sql, [id]);
  return rows[0];
};
