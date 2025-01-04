  
  const express = require('express');
  const mongoose = require('mongoose');
  const app = express();
  app.use(express.json());

  const MONGO_URI = 'mongodb+srv://fatimammcy:Faag10661@flowerappcluster.tcjxo.mongodb.net/?retryWrites=true&w=majority&appName=FlowerAppCluster';

 mongoose
    .connect(MONGO_URI)
    .then(() => {
      const PORT = 5001;
      app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })

  .catch(( error) => {
    console.error(  error);
  });

app.get('/', (req, res) => {
  res.send('Flower website!');
});
