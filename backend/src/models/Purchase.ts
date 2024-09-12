import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import User from './User';

export interface IPurchase {
  id?: number;
  user_id: number;
  status: string;

  updatedAt?: Date;
  createdAt?: Date;
}

class Purchase extends Model<IPurchase> implements IPurchase {
  declare user_id: number;
  declare status: string;

  declare readonly updatedAt: Date;
  declare readonly createdAt: Date;
}

Purchase.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'purchase',
  }
);

Purchase.belongsTo(User);

export default Purchase;
