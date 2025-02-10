CREATE TABLE delivery_employee (
    employee_id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    address VARCHAR(255),
    hire_date DATE NOT NULL,
    position VARCHAR(50),
    salary INTEGER NOT NULL,
    status VARCHAR(10) DEFAULT 'active'
);
