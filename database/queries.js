const { pool } = require("./pool");

async function getAllCategories() {
  const result = await pool.query("SELECT * FROM categories;");
  return result.rows;
}

async function getAllUrgencyById(categoryId) {
  const result = await pool.query(
    `SELECT * FROM urgency WHERE category_id=$1;`,
    [categoryId]
  );
  return result.rows;
}

async function getTasks(categoryId, urgencyId) {
  try {
    const query = `
      SELECT t.id, t.name, t.description, u.name AS urgency
      FROM tasks t
      JOIN urgency u ON t.urgency_id = u.id
      WHERE t.category_id = $1
        AND t.urgency_id = $2;
    `;

    const values = [categoryId, urgencyId];

    const { rows } = await pool.query(query, values);
    return rows;
  } catch (err) {
    console.error(
      `Error fetching tasks for category ID ${categoryId} and urgency ID ${urgencyId}:`,
      err
    );
    throw err;
  }
}

module.exports = {
  getAllCategories,
  getAllUrgencyById,
  getTasks,
};
