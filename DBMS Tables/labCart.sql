CREATE TABLE LabTests(
	labTest_id VARCHAR(50) PRIMARY KEY,
    labTest_image VARCHAR(400),
    labTest_name VARCHAR(100)
);

CREATE TABLE Sub_LabTest(
	labTest_id VARCHAR(50),
    subLabTest_id VARCHAR(50) PRIMARY KEY,
    subLabTest_name VARCHAR(50),
    subLabTest_price INTEGER,
    FOREIGN KEY (labTest_id) REFERENCES LabTests(labTest_id)
);
CREATE TABLE User_LabCart(
    user_id INTEGER,
	labcart_id INTEGER,
	PRIMARY KEY (labcart_id),
    FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE LabCartTest(
	labcart_id INTEGER,
    subLabTest_id VARCHAR(50),
    FOREIGN KEY (subLabTest_id) REFERENCES Sub_LabTest(subLabTest_id),
    FOREIGN KEY (labcart_id) REFERENCES User_LabCart(labcart_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
CREATE TABLE OrderedLabCart(
	order_id VARCHAR(12) PRIMARY KEY,
	labcart_id INTEGER NOT NULL,
    subLabTest_id VARCHAR(50),
    FOREIGN KEY (labcart_id) REFERENCES User_LabCart(labcart_id),
    FOREIGN KEY (subLabTest_id) REFERENCES Sub_LabTest(subLabTest_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);