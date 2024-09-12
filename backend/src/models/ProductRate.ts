import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Product from './Product';
import User from './User';
import Purchase from './Purchase';

export interface IProductRate {
  id?: number;
  product_id: number;
  user_id: number;
  purchase_id: number;
  title: string;
  description: string;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}

class ProductRate extends Model<IProductRate> implements IProductRate {
  declare product_id: number;
  declare user_id: number;
  declare purchase_id: number;
  declare title: string;
  declare description: string;
  declare rate: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

ProductRate.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    purchase_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Purchase,
        key: 'id',
      },
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    rate: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
    modelName: 'product_rate',
  }
);

ProductRate.belongsTo(User);
ProductRate.belongsTo(Purchase);

export default ProductRate;
