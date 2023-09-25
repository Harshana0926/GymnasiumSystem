// Insert data into MongoDB
app.post('/insert', (req, res) => {
    const data = req.body; // Assumes you send JSON data in the request body
    const collection = client.db('your_db_name').collection('your_collection_name');
  
    collection.insertOne(data, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
      } else {
        res.status(200).send('Data inserted successfully');
      }
    });
  });
  
  // Retrieve data from MongoDB
  app.get('/retrieve', (req, res) => {
    const collection = client.db('your_db_name').collection('your_collection_name');
  
    collection.find({}).toArray((err, data) => {
      if (err) {
        console.error('Error retrieving data:', err);
        res.status(500).send('Error retrieving data');
      } else {
        res.json(data);
      }
    });
  });
  