#! /usr/bin/env node

const { client } = require("./pool");

const SQL = `
-- Drop tables if they exist
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS urgency CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

-- Create categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL
);

-- Create urgency table
CREATE TABLE urgency (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  category_id INTEGER NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Create tasks table
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  description TEXT,
  category_id INTEGER NOT NULL,
  urgency_id INTEGER NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  FOREIGN KEY (urgency_id) REFERENCES urgency(id)
);

-- Insert categories
INSERT INTO categories (name) VALUES ('Personal'), ('Professional')
ON CONFLICT (id) DO NOTHING;

-- Insert urgency levels for Personal category
INSERT INTO urgency (name, category_id) VALUES 
  ('RIGHT NOW!!!', 1), 
  ('TILL TODAY!!', 1), 
  ('THIS WEEK!', 1), 
  ('THIS MONTH', 1), 
  ('THIS YEAR', 1)
ON CONFLICT (id) DO NOTHING;

-- Insert urgency levels for Professional category
INSERT INTO urgency (name, category_id) VALUES 
  ('RIGHT NOW!!!', 2), 
  ('TILL TODAY!!', 2), 
  ('THIS WEEK!', 2), 
  ('THIS MONTH', 2), 
  ('THIS YEAR', 2)
ON CONFLICT (id) DO NOTHING;

-- Example Insertions into the tasks table
INSERT INTO tasks (name, description, category_id, urgency_id) VALUES 
  ('Buy Groceries', 'Get vegetables and fruits for the week', 1, 3),
  ('Plan Birthday Party', 'Organize a surprise birthday party for a friend', 1, 2),
  ('Exercise', 'Morning run and workout', 1, 1),
  ('Finish Project Report', 'Complete the quarterly project report', 2, 1),
  ('Team Meeting', 'Weekly sync with the team on ongoing projects', 2, 3),
  ('Client Presentation', 'Prepare slides for the upcoming client meeting', 2, 2);
`;

async function main() {
  console.log("Seeding database...");
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeded successfully.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

main();
