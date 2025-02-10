CREATE TABLE Specilisation(
	specilisation_code VARCHAR(15),
	specilisation_category VARCHAR(50),
    PRIMARY KEY(specilisation_code)
);

CREATE TABLE Doctor(
	doctor_id VARCHAR(25) PRIMARY KEY, -- ID WILL BE LIKE CARDIO_001 
    name VARCHAR(50),
    gender VARCHAR(1), -- M/F/O
    languanges VARCHAR(10), -- E (ENGLISH)/T (TELUGU)/TA(TAMIL)
    experience INTEGER,
    graduated_from VARCHAR(100),
    amount_for_medication INTEGER,
    hire_date DATE NOT NULL,
    salary INTEGER NOT NULL,
    status VARCHAR(10) DEFAULT 'active'
);

CREATE TABLE Doctor_Specilisation(
	specilisation_code VARCHAR(15),
	doctor_id VARCHAR(25),
    FOREIGN KEY(doctor_id) REFERENCES Doctor(doctor_id),
    FOREIGN KEY(specilisation_code) REFERENCES Specilisation(specilisation_code)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE Patient(
	user_id INTEGER,
	appointment_id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    DOB DATE,
    phone_no LONG,
    e_mail VARCHAR(200),
    height FLOAT,
    weight FLOAT,
    allergies BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)    
);

CREATE TABLE Doctor_Patient(
	doctor_id VARCHAR(25),
    appointment_id INTEGER,
    FOREIGN KEY(doctor_id) REFERENCES Doctor(doctor_id),
    FOREIGN KEY(appointment_id) REFERENCES Patient(appointment_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE book_appointment(
	user_id INTEGER,
	appointment_id VARCHAR(15),
	branch VARCHAR(50),
    appointment_date DATE,
    specialty VARCHAR(50),
    PRIMARY KEY (appointment_id),
    FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)  
);