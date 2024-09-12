import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Product from './Product';
import Category from './Category';

export interface IProductCategory {
  product_id: number;
  category_id: number;
}

class ProductCategory extends Model<IProductCategory> implements IProductCategory {
  declare product_id: number;
  declare category_id: number;
}

ProductCategory.init(
  {
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
    },
  },
  {
    sequelize: sequelize,
    modelName: 'product_category',
    tableName: 'products_categories',
    timestamps: false,
  }
);

export default ProductCategory;
