-- Show databases --
SHOW DATABASES;

-- Create bookstore databases --
CREATE DATABASE bookstore;

-- use bookstore databases --
USE bookstore;

-- show all tables in bookstore --
SHOW TABLES;

-- Create books table --
CREATE TABLE books(
    id int auto_increment primary key,
    author1 varchar(100) not null,
    author2 varchar(100),
    author3 varchar(100),
    title varchar(100),
    description text,
    place_sell char(3),
    stock int default 0,
    creation_date datetime not null default current_timestamp on update current_timestamp
);

-- Update books table --
ALTER TABLE books
    add price int default 0,
    add status enum('available', 'out of stock', 'limited'),
    drop place_sell;

-- Insert data --
INSERT INTO books VALUES
    (1, 'bejo', 'begas', 'bagus', 'Title1', 'urutan pertama', 7, DEFAULT, 15000, 'available'),
    (2, 'joko', 'jaka', 'jiki', 'Title2', 'urutan kedua', 9, DEFAULT, 10000, 'limited'),
    (3, 'maman', 'mimin', 'mumun','Title3', 'urutan ketiga', 20, DEFAULT, 20000, 'out of stock');

-- Query data --
SELECT * FROM books;

SELECT id as ID, author1 as A1, author2 as A2, author3 as A3 FROM books;

SELECT * FROM books
    WHERE id = 1;

SELECT * FROM books
    WHERE id = 2 AND status = 'limited';

SELECT * FROM books
    WHERE stock < 15 OR author3 = 'jiki';

SELECT * FROM books
    WHERE NOT id = 3;

SELECT * FROM books
    WHERE BY id;

SELECT * FROM books
    LIMIT 2;

UPDATE books
    SET author1 = 'agus', price = 150000,
    WHERE id = 2;

DELETE FROM books
    WHERE id = 3;