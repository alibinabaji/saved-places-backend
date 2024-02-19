crete database -> saved_places

CREATE TABLE lists (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  list_id INT,
  name VARCHAR(255) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  FOREIGN KEY (list_id) REFERENCES lists(id)
);

