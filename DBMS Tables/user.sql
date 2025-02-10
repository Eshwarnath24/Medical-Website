CREATE DATABASE app;
USE app;

CREATE TABLE UserInfo(
	user_id INTEGER PRIMARY KEY,
	firstName VARCHAR(100),
    secondName VARCHAR(100),
    DOB DATE,
    gender VARCHAR(25),
    height INTEGER,
    maratalStatus BOOLEAN,
    password1 VARCHAR(50),
    password2 VARCHAR(50),
    phoneNumber LONG,
    email VARCHAR(100),
    profile_image VARCHAR(500)
);

CREATE TABLE address (
	id INTEGER PRIMARY KEY,
    address1 VARCHAR(100),
    address2 VARCHAR(100),
    city VARCHAR(25),
    state VARCHAR(25),
    pinCode INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES UserInfo(user_id) ON DELETE CASCADE
);