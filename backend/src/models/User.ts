import sequelize from '@/db/connection';
import * as bcrypt from 'bcrypt';
import { DataTypes, Model } from 'sequelize';

export interface IUser {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  phone_number: string;

  updated_at?: Date;
  deletedAt?: Date;
  created_at?: Date;
}

class User extends Model<IUser> implements IUser {
  declare first_name: string;
  declare last_name: string;
  declare email: string;
  declare password: string;
  declare address: string;
  declare phone_number: string;

  declare readonly updated_at: Date;
  declare readonly created_at: Date;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone_number: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'user',
    hooks: {
      beforeCreate: (record) => {
        const { password } = record.dataValues;
        record.dataValues.password = bcrypt.hashSync(password, 8);
      },
    },
  }
);

export default User;
