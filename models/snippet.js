module.exports = function(sequelize, DataTypes) {
  var Snippet = sequelize.define("Snippet", {
    title: DataTypes.STRING,
    code: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    category: DataTypes.STRING
  });

  return Snippet;
};
