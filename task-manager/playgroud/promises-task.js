require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndRemove('5f3a8ecd2ce2f52a87b7a6e4')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => console.log(e));

const findTaskAndDelete = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

findTaskAndDelete('5f3ba912e86e343695e85d29')
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
