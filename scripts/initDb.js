const sequelize = require('../config/sequelize');
const Product = require('../models/Product');

const initDatabase = async () => {
  try {
    // Sync all models with database
    await sequelize.sync({ force: true }); // force: true will drop the table if it already exists
    console.log('Database & tables created!');

    // Add some sample products
    await Product.bulkCreate([
      {
        name: 'Hamburger',
        description: 'Lekkere hamburger met rundvlees',
        price: 5.99,
        category: 'Burgers',
        imageUrl: '/images/hamburger.jpg',
        isAvailable: true
      },
      {
        name: 'Friet',
        description: 'Krokante friet met zout',
        price: 3.50,
        category: 'Snacks',
        imageUrl: '/images/friet.jpg',
        isAvailable: true
      },
      {
        name: 'Cola',
        description: 'Verfrissende cola',
        price: 2.50,
        category: 'Dranken',
        imageUrl: '/images/cola.jpg',
        isAvailable: true
      }
    ]);

    console.log('Sample products added!');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    process.exit();
  }
};

initDatabase(); 