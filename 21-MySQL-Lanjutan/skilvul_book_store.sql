-- Create Database --
CREATE DATABASE skilvulbookstore;

-- Use database --
USE skilvulbookstore;

-- Create Table -- 
CREATE TABLE penerbit(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50),
);

CREATE TABLE penulis(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

CREATE TABLE buku(
    id INT(10) NOT NULL AUTO_INCREMENT Primary KEY,
    isbn VARCHAR(50),
    judul VARCHAR(50),
    penulis VARCHAR(50),
    penerbit INT(10),
    harga INT(10),
    stock INT(10),
    CONSTRAINT fk_penulis_id FOREIGN KEY(penulis) REFERENCES penulis(id),
    CONSTRAINT fk_penerbidt_id FOREIGN KEY(penerbit) REFERENCES penerbit(id)
);

-- Insert Data --
INSERT INTO penulis(nama, kota)
    VALUES
        ('Supardi', 'Jakarta'),
        ('Adam', 'Balikpapan');

INSERT INTO penerbit(nama, kota)
    VALUES
        ('Elex Media', 'Jakarta'),
        ('Anak Hebat', 'Jakarta');

INSERT INTO buku
    VALUES
    ('','12345678', 'Semua bisa javascript', 1, 2, 60000, 10),
    ('', '34567890', 'Buku Sakti HTML', 2, 1, 55000, 8),
    ('', '54321678', 'Otodidak Javascript', 1, 2, 48000, 6);

-- Inner Join --
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku
    INNER JOIN penerbit
    ON buku.penerbit = penerbit.id;

-- Left Join --
SELECT buku.id, isbn, judul, penerbit.nama AS penerbit, harga, stock FROM buku
    LEFT JOIN penerbit
    ON buku.penerbit = penerbit.id;

-- Right Join --
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku 
    RIGHT JOIN penerbit 
    ON buku.penerbit = penerbit.id;

-- Max, Min, Count -- 
SELECT MAX(harga) FROM buku
    WHERE stock < 10;

SELECT MIN(harga) FROM buku;

SELECT COUNT(*) FROM buku
    WHERE harga < 100000;
