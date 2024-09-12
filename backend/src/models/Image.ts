import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Banner from './Banner';
import BannerImage from './BannerImage';
import Product from './Product';
import ProductImage from './ProductImage';

export interface IImage {
  id?: number;
  file_name: string;
  path: string;

  updated_at?: Date;
  created_at?: Date;
}

class Image extends Model<IImage> implements IImage {
  declare file_name: string;
  declare path: string;

  declare readonly updated_at: Date;
  declare readonly created_at: Date;
}

Image.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    file_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    path: {
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
    modelName: 'image',
  }
);

export default Image;
