import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Product from './Product';
import ProductCategory from './ProductCategory';

export interface ICategory {
  id?: number;
  parent_id: number;
  title: string;
  description: string;

  updatedAt?: Date;
  createdAt?: Date;
}

class Category extends Model<ICategory> implements ICategory {
  declare parent_id: number;
  declare title: string;
  declare description: string;

  declare readonly updatedAt: Date;
  declare readonly createdAt: Date;
}

Category.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    parent_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
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
    modelName: 'category',
  }
);

Category.belongsTo(Category, {
  foreignKey: 'parent_id',
});

export default Category;
