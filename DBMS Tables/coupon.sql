CREATE TABLE Offer_coupons (
    coupon_id INTEGER PRIMARY KEY,
    company_name VARCHAR(25) NOT NULL,
    valid_date DATE,
    expiry_date DATE,
    coupon_code VARCHAR(8) NOT NULL,
    offer_money INTEGER DEFAULT 0,
    offer_percent INTEGER DEFAULT 0,
    min_purchase_amount INTEGER DEFAULT 0,
    UNIQUE (company_name, coupon_code)
);

CREATE TABLE user_coupon(
	user_id INTEGER,
    coupon_id INTEGER,
    status VARCHAR(10) DEFAULT 'active',
    FOREIGN KEY (coupon_id) REFERENCES Offer_coupons(coupon_id),
    FOREIGN KEY (user_id) REFERENCES UserInfo(user_id)
);