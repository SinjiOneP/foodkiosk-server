-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    category VARCHAR(100),
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample products
INSERT INTO products (name, description, price, category) VALUES
    ('Big Mac', 'Two 100% beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun', 5.99, 'Burgers'),
    ('McChicken', 'Crispy chicken patty topped with lettuce and creamy mayonnaise', 4.99, 'Burgers'),
    ('French Fries', 'Crispy golden fries', 2.99, 'Sides'),
    ('McFlurry', 'Creamy vanilla soft serve with your favorite toppings', 3.99, 'Desserts'); 