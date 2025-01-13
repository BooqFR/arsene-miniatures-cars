-- Final Normalized and Optimized Model

CREATE TABLE nationalities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nationality_id INT REFERENCES nationalities(id)
);

CREATE TABLE races (
    id SERIAL PRIMARY KEY,
    year INT NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE tires (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    nationality_id INT REFERENCES nationalities(id)
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    team_id INT REFERENCES teams(id),
    category_id INT REFERENCES categories(id),
    engine VARCHAR(255) NOT NULL,
    tire_id INT REFERENCES tires(id),
    chassis_number VARCHAR(100),
    image_url TEXT
);

CREATE TABLE car_race_mapping (
    id SERIAL PRIMARY KEY,
    car_id INT REFERENCES cars(id),
    race_id INT REFERENCES races(id),
    UNIQUE(car_id, race_id)
);

CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    car_race_id INT REFERENCES car_race_mapping(id),
    position INT,
    position_in_category INT,
    laps INT,
    distance_km DECIMAL(10, 3),
    avg_speed_kmh DECIMAL(10, 3),
    best_time TIME,
    best_time_speed_kmh DECIMAL(10, 3),
    status ENUM('Finished', 'DNF', 'DNS', 'DSQ'),
    non_result_reason TEXT
);

CREATE TABLE car_driver_mapping (
    id SERIAL PRIMARY KEY,
    car_race_id INT REFERENCES car_race_mapping(id),
    driver_id INT REFERENCES drivers(id),
    UNIQUE(car_race_id, driver_id)
);

-- Example Data Insertion

-- Nationalities
INSERT INTO nationalities (name) VALUES ('Netherlands'), ('Brazil'), ('United Kingdom');

-- Teams
INSERT INTO teams (name, nationality_id) VALUES ('Team Marcos', (SELECT id FROM nationalities WHERE name = 'United Kingdom'));

-- Races
INSERT INTO races (year) VALUES (1995);

-- Categories
INSERT INTO categories (name) VALUES ('LM GT2');

-- Tires
INSERT INTO tires (name) VALUES ('Dunlop');

-- Drivers
INSERT INTO drivers (first_name, last_name, nationality_id) 
VALUES 
('Cor', 'Euser', (SELECT id FROM nationalities WHERE name = 'Netherlands')),
('Thomas', 'Erdos', (SELECT id FROM nationalities WHERE name = 'Brazil')),
('Chris', 'Hodgetts', (SELECT id FROM nationalities WHERE name = 'United Kingdom'));

-- Cars
INSERT INTO cars (name, team_id, category_id, engine, tire_id, chassis_number, image_url) 
VALUES 
('MARCOS LM600', 
 (SELECT id FROM teams WHERE name = 'Team Marcos'), 
 (SELECT id FROM categories WHERE name = 'LM GT2'), 
 'Chevrolet 6130 V8', 
 (SELECT id FROM tires WHERE name = 'Dunlop'), 
 '9501', 
 'http://example.com/images/marcos-lm600.jpg');

-- Car Race Mapping
INSERT INTO car_race_mapping (car_id, race_id) 
VALUES ((SELECT id FROM cars WHERE name = 'MARCOS LM600'), (SELECT id FROM races WHERE year = 1995));

-- Results
INSERT INTO results (car_race_id, position, position_in_category, laps, distance_km, avg_speed_kmh, best_time, best_time_speed_kmh, status, non_result_reason)
VALUES
((SELECT id FROM car_race_mapping WHERE car_id = (SELECT id FROM cars WHERE name = 'MARCOS LM600') AND race_id = (SELECT id FROM races WHERE year = 1995)), 
 NULL, NULL, 133, 1808.800, NULL, '04:23.500', 185.800, 'DNF', 'Transmission failure');

-- Car Driver Mapping
INSERT INTO car_driver_mapping (car_race_id, driver_id) 
VALUES
((SELECT id FROM car_race_mapping WHERE car_id = (SELECT id FROM cars WHERE name = 'MARCOS LM600') AND race_id = (SELECT id FROM races WHERE year = 1995)), (SELECT id FROM drivers WHERE first_name = 'Cor' AND last_name = 'Euser')),
((SELECT id FROM car_race_mapping WHERE car_id = (SELECT id FROM cars WHERE name = 'MARCOS LM600') AND race_id = (SELECT id FROM races WHERE year = 1995)), (SELECT id FROM drivers WHERE first_name = 'Thomas' AND last_name = 'Erdos')),
((SELECT id FROM car_race_mapping WHERE car_id = (SELECT id FROM cars WHERE name = 'MARCOS LM600') AND race_id = (SELECT id FROM races WHERE year = 1995)), (SELECT id FROM drivers WHERE first_name = 'Chris' AND last_name = 'Hodgetts'));

-- Example Query to Fetch Car Details with All Associated Data

SELECT 
    c.name AS car_name,
    c.image_url,
    t.name AS team_name,
    n1.name AS team_nationality,
    cat.name AS category,
    c.engine,
    ti.name AS tire,
    c.chassis_number,
    r.year AS race_year,
    res.position,
    res.position_in_category,
    res.laps,
    res.distance_km,
    res.avg_speed_kmh,
    res.best_time,
    res.best_time_speed_kmh,
    res.status,
    res.non_result_reason,
    ARRAY_AGG(d.first_name || ' ' || d.last_name || ' (' || n2.name || ')') AS drivers
FROM cars c
JOIN teams t ON c.team_id = t.id
JOIN nationalities n1 ON t.nationality_id = n1.id
JOIN categories cat ON c.category_id = cat.id
JOIN tires ti ON c.tire_id = ti.id
JOIN car_race_mapping crm ON c.id = crm.car_id
JOIN races r ON crm.race_id = r.id
LEFT JOIN results res ON crm.id = res.car_race_id
JOIN car_driver_mapping cdm ON crm.id = cdm.car_race_id
JOIN drivers d ON cdm.driver_id = d.id
JOIN nationalities n2 ON d.nationality_id = n2.id
GROUP BY c.id, t.id, n1.id, cat.id, ti.id, r.id, res.id;
