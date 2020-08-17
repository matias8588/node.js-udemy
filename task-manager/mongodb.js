const mongodb = require('mongodb');
const { MongoClient, ObjectID } = mongodb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Error ', error);
  }

  const db = client.db(databaseName);

  db.collection('users')
    .deleteMany({ age: 32 })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
