const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duracion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    temporada:{
        type:DataTypes.STRING,
        allowNull:false,
    },
  });
};