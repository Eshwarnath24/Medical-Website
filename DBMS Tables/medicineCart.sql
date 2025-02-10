CREATE TABLE User_MedicineCart(
    user_id INTEGER,
	medicineCart_id INTEGER,
    PRIMARY KEY(medicineCart_id),
    FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
CREATE TABLE Medicine(
	medicine_id VARCHAR(50) PRIMARY KEY,
    product_name VARCHAR(200),
    price FLOAT,
    company_name VARCHAR(200),
	expiry_date DATE
);
CREATE TABLE MedicineCart_Item(
	medicineCart_id INTEGER NOT NULL,
    medicine_id VARCHAR(50) NOT NULL,
    quantity INTEGER,
    FOREIGN KEY (medicineCart_id) REFERENCES User_MedicineCart(medicineCart_id),
    FOREIGN KEY (medicine_id) REFERENCES Medicine(medicine_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
CREATE TABLE OrderedMedicines(
	order_id VARCHAR(12) PRIMARY KEY,
    user_id INTEGER,
	medicineCart_id INTEGER NOT NULL,
    FOREIGN KEY (medicineCart_id) REFERENCES User_MedicineCart(medicineCart_id),
    FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);