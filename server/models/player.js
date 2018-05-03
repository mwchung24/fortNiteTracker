module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};
