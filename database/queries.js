const { pool } = require("./pool");

async function getAllCategories() {
  const result = await pool.query("SELECT * FROM categories;");
  return result.rows;
}

async function getAllUrgencyById(categoryId) {
  const result = await pool.query(
    "SELECT * FROM urgency WHERE category_id=$1;",
    [categoryId]
  );
  return result.rows;
}

module.exports = {
  getAllCategories,
  getAllUrgencyById,
};
