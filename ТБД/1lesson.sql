-- CREATE TABLE students(
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(100) NOT NULL,
-- 	email VARCHAR(150) UNIQUE NOT NULL,
-- 	age INTEGER,
-- 	group_name VARCHAR(50)
-- );

-- INSERT INTO students(name,email,age,group_name)
-- VALUES
-- ('Dias','dias@gmail.com',18,'IT-101')

-- SELECT * FROM students
-- WHERE id = 2

-- SELECT * FROM students
-- WHERE age > 18

-- SELECT * FROM students
-- WHERE age < 20

-- SELECT * FROM students
-- WHERE age = 18

-- SELECT * FROM students
-- WHERE age != 18

-- SELECT * FROM students
-- WHERE age <> 18

-- INSERT INTO students(name,email,age,group_name)
-- VALUES
-- ('Amina','amina@gmail.com',18,'IT-101'),
-- ('Olzhas','olzhas@gmail.com',19,'IT-102'),
-- ('Kirill','kirll@gmail.com',19,'IT-103'),
-- ('Erzhan','erzhan@gmail.com',20,'IT-101'),
-- ('Marlen','marlen@gmail.com',21,'IT-102');

-- SELECT * FROM students
-- WHERE group_name = 'IT-101'

-- SELECT * FROM students
-- WHERE email = 'amina@gmail.com'

-- SELECT * FROM students
-- WHERE name = 'Dias'

-- SELECT * FROM students
-- WHERE group_name = 'IT-101' AND age > 18

-- SELECT * FROM students
-- WHERE group_name = 'IT-101' OR group_name = 'QA-202'

-- SELECT * FROM students
-- WHERE age BETWEEN 18 AND 20

-- SELECT * FROM students
-- WHERE group_name IN('IT-101', 'QA-202')

-- SELECT * FROM students
-- WHERE name LIKE '%a%'

-- SELECT * FROM students
-- ORDER BY age ASC

-- SELECT * FROM students
-- ORDER BY name ASC
-- LIMIT 3


