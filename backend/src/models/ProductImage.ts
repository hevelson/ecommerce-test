import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Image from './Image';
import Product from './Product';

export interface IProductImage {
  product_id: number;
  image_id: number;
}

class ProductImage extends Model<IProductImage> implements IProductImage {
  declare product_id: number;
  declare image_id: number;
}

ProductImage.init(
  {
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Product,
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
    modelName: 'product_image',
  }
);

export default ProductImage;
