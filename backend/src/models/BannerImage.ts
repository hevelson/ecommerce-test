import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Image from './Image';
import Banner from './Banner';

export interface IBannerImage {
  banner_id: number;
  image_id: number;
}

class BannerImage extends Model<IBannerImage> implements IBannerImage {
  declare banner_id: number;
  declare image_id: number;
}

BannerImage.init(
  {
    banner_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Banner,
        key: 'id',
      },
    },
    image_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Image,
        key: 'id',
      },
    },
  },
  {
    sequelize: sequelize,
    modelName: 'banner_image',
  }
);

export default BannerImage;
