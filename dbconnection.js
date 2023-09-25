const MongoClient = require('mongodb').MongoClient;

// Replace with your MongoDB connection string
const uri = 'mongodb://localhost:27017/your_db_name';

// Create a new MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(async (err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  // Select the database
  const db = client.db('your_db_name'); // Replace with your database name

  try {
    // Specify the collection you want to query
    const collection = db.collection('users'); // Replace with your collection name

    // Query the collection to find documents
    const query = {}; // You can specify a query filter here if needed

    const result = await collection.find(query).toArray();

    // Print the retrieved documents
    console.log('Retrieved documents:');
    console.log(result);
  } catch (error) {
    console.error('Error retrieving data:', error);
  } finally {
    // Close the MongoDB client
    client.close();
  }
});

