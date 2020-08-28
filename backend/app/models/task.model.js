module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    label: {
      type: Sequelize.STRING
    },
    done: {
      type: Sequelize.BOOLEAN
    }
  });

  return Task;
};