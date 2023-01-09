import { Sequelize, Model, DataTypes } from "sequelize";

export const getUsersSQL = async (): Promise<Model<any, any>[]> => {
  const sequelize = new Sequelize("sqlite::memory:");
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  });

  await sequelize.sync();

  await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });

  return await User.findAll();
};
