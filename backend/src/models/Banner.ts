import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Image from './Image';
import BannerImage from './BannerImage';

export interface IBanner {
  id?: number;
  section: string;
  link: string;

  updatedAt?: Date;
  createdAt?: Date;
}

class Banner extends Model<IBanner> implements IBanner {
  declare section: string;
  declare link: string;

  declare readonly updatedAt: Date;
  declare readonly createdAt: Date;
}

Banner.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    section: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    link: {
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
    modelName: 'banner',
  }
);

Banner.belongsToMany(Image, {
  through: BannerImage,
});

export default Banner;
