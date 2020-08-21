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

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  //   const task = await Task.findById('5f3fa7e3ebb55c1ff20ed5ca');
  //   await task.populate('owner').execPopulate();
  //   console.log(task.owner);
  const user = await User.findById('5f3fa6d44e54931f5613789a');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};

main();
