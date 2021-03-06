module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
