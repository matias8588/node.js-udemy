const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method) {
//     res.status(503).send('Maintenance mode');
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismytoken', { expiresIn: '7 days' });
//   console.log(token);

//   const match = jwt.verify(token, 'thisismytoken');

//   console.log(match);
// };

// myFunction();
