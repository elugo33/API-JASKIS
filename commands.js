// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB and created the database: jaskis');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });


// 2. Create a collection called bounties
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
    });

    // Create a model (this creates the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Insert a sample document to create the collection
    const newBounty = new Bounty({
      name: 'Blackbeard',
      reward: 50000,
      location: 'Caribbean Sea',
      captured: false,
    });

    return newBounty.save();
  })
  .then(() => {
    console.log('Collection bounties created and sample document inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });


// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Define the "Thanoceros" bounty object
    const thanocerosBounty = new Bounty({
      name: 'Thanoceros',
      reward: 1000000,
      location: 'Savannah Plains',
      captured: false,
    });

    // Insert the "Thanoceros" bounty into the collection
    return thanocerosBounty.save();
  })
  .then(() => {
    console.log('Thanoceros bounty inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });


// 2. Query for all bounties in the bounties collection
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Query for all bounties
    return Bounty.find();
  })
  .then(bounties => {
    console.log('All bounties:', bounties);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });


// 3. Insert many bounties at once using the given objects
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Define the array of bounty objects
    const bounties = [
      { name: 'Thanoceros', reward: 1000000, location: 'Savannah Plains', captured: false },
      { name: 'Redbeard', reward: 750000, location: 'Open Sea', captured: true },
      { name: 'Shadowfang', reward: 500000, location: 'Dark Forest', captured: false },
      { name: 'Silverclaw', reward: 600000, location: 'Snowy Mountains', captured: false },
    ];

    // Insert the array of bounties into the collection
    return Bounty.insertMany(bounties);
  })
  .then(() => {
    console.log('Bounties inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Query for all bounties in the "Grasslands" location
    return Bounty.find({ location: 'Grasslands' });
  })
  .then(bounties => {
    console.log('Bounties

// 2. Query for all bounties with a reward worth 10000 or more
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Query for all bounties with a reward of 10,000 or more
    return Bounty.find({ reward: { $gte: 10000 } });
  })
  .then(bounties => {
    console.log('Bounties with a reward of 10,000 or more:', bounties);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });

// 3. Query for all bounties, but exclude the client attribute from being shown
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
      client: String, // Assume client is one of the fields in your schema
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Query for all bounties, excluding the 'client' field
    return Bounty.find({}, { client: 0 });
  })
  .then(bounties => {
    console.log('Bounties without the client field:', bounties);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });

// 4. Query for a Groundhog in the Woodlands
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
      client: String, // Assume client is one of the fields in your schema
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Query for a Groundhog in the Woodlands
    return Bounty.findOne({ name: 'Groundhog', location: 'Woodlands' });
  })
  .then(bounty => {
    console.log('Groundhog in the Woodlands:', bounty);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });


// Update and Delete
// 1. Update the reward for Polarwind to 10000
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
      client: String, // Assume client is one of the fields in your schema
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Update the reward for Polarwind to 10000
    return Bounty.updateOne({ name: 'Polarwind' }, { $set: { reward: 10000 } });
  })
  .then(result => {
    console.log('Update result:', result);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });

// 2. Remove Lokinkajou
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
      client: String, // Assume client is one of the fields in your schema
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Remove the bounty named Lokinkajou
    return Bounty.deleteOne({ name: 'Lokinkajou' });
  })
  .then(result => {
    console.log('Removal result:', result);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });

// 3. Delete all bounties sent by Songbird
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
      client: String, // Assume client is one of the fields in your schema
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Delete all bounties sent by Songbird
    return Bounty.deleteMany({ client: 'Songbird' });
  })
  .then(result => {
    console.log('Deletion result:', result);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  });

// 4. Update all captured statuses to true
const mongoose = require('mongoose');

// Replace 'yourMongoDBConnectionString' with your actual connection string
const connectionString = 'yourMongoDBConnectionString/jaskis';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a schema for the collection (optional, but recommended)
    const bountySchema = new mongoose.Schema({
      name: String,
      reward: Number,
      location: String,
      captured: Boolean,
      client: String, // Assume client is one of the fields in your schema
    });

    // Create a model (this uses the 'bounties' collection)
    const Bounty = mongoose.model('Bounty', bountySchema);

    // Update all captured statuses to true
    return Bounty.updateMany({}, { $set: { captured: true } });
  })
  .then(result => {
    console.log('Update result:', result);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
  })
