const { pool } = require("./pool");

async function getAllCategories() {
  console.log("hl");
  const result = await pool.query("SELECT * FROM categories;");
  console.log("fk");
  return result.rows;
}

module.exports = {
  getAllCategories,
};
