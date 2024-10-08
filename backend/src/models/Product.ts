import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Image from './Image';
import ProductImage from './ProductImage';
import Category from './Category';
import ProductCategory from './ProductCategory';
import Invoice from './Invoice';
import ProductInvoice from './ProductInvoice';
import ProductRate from './ProductRate';

export interface IProduct {
  id?: number;
  title: string;
  description: string;
  price: number;
  promotional_price: number;
  available_quantity: number;

  updated_at?: Date;
  created_at?: Date;
}

class Product extends Model<IProduct> implements IProduct {
  declare title: string;
  declare description: string;
  declare price: number;
  declare promotional_price: number;
  declare available_quantity: number;

  declare readonly updated_at: Date;
  declare readonly created_at: Date;
}

Product.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    promotional_price: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    available_quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
    modelName: 'product',
  }
);

Product.belongsToMany(Image, {
  through: ProductImage,
});

Product.belongsToMany(Category, {
  through: ProductCategory,
});

Product.hasMany(ProductRate);

export default Product;
