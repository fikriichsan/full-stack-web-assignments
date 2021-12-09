-- Create Database --
CREATE DATABASE skilvulMusicPlayer;

-- Use Database --
USE skilvulMusicPlayer;

-- Create Table --
CREATE TABLE users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE singers(
    singer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE tracks(
    track_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    singer_id INT NOT NULL,
    album_id INT NOT NULL,
    CONSTRAINT fk_singers_singer_id_tracks FOREIGN KEY(singer_id) REFERENCES singers(singer_id),
    CONSTRAINT fk_albums_album_id_tracks FOREIGN KEY(album_id) REFERENCES albums(album_id)
);

CREATE TABLE albums(
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    singer_id INT NOT NULL,
    CONSTRAINT fk_singers_singer_id_albums FOREIGN KEY(singer_id) REFERENCES singers(singer_id)
);

CREATE TABLE playlists(
    playlist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    track_id INT NOT NULL,
    CONSTRAINT fk_users_user_id_playlists FOREIGN KEY(user_id) REFERENCES users(user_id),
    CONSTRAINT fk_tracks_track_id_playlists FOREIGN KEY(track_id) REFERENCES tracks(track_id)
);