CREATE TABLE Page_Feedback(
	user_id INTEGER,
    feedback VARCHAR(550),
    rating FLOAT,
	FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)
);

CREATE TABLE Doctor_Feedback(
	user_id INTEGER,
    feedback VARCHAR(550),
    rating FLOAT,
    doctor_id VARCHAR(25),
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id),
	FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)
);

CREATE TABLE Delivery_Feedback(
	user_id INTEGER,
    feedback VARCHAR(550),
    rating FLOAT,
    employee_id INTEGER,
	FOREIGN KEY (employee_id) REFERENCES delivery_employee(employee_id),
	FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)
);