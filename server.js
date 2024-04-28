const espress = require('express');

const mongodb = require('./data/database');
const app = espress();

const port = process.env.port || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } 
    else {
      app.listen(port, () => {
        console.log(`Database is listening and node Running on port ${port}`);
      });
    }
});