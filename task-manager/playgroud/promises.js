require('../src/db/mongoose');

const User = require('../src/models/user');

// User.findByIdAndUpdate('5f3a8e0ef761582a080f7ac7', { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => console.log(e));

const updateAgeAndCount = async (id, age) => {
  await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5f3a8e0ef761582a080f7ac7', 2)
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
