import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Invoice from './Invoice';
import Product from './Product';

export interface IProductInvoice {
  invoice_id: number;
  product_id: number;
  price: number;
  quantity: number;
  discount: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

class ProductInvoice extends Model<IProductInvoice> implements IProductInvoice {
  declare invoice_id: number;
  declare product_id: number;
  declare price: number;
  declare quantity: number;
  declare discount: number;
  declare total: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

ProductInvoice.init(
  {
    invoice_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Invoice,
        key: 'id',
      },
    },
    product_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    discount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    total: {
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
    modelName: 'product_invoice',
  }
);

export default ProductInvoice;
