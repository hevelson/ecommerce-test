import sequelize from '@/db/connection';
import { DataTypes, Model } from 'sequelize';
import Purchase from './Purchase';
import Product from './Product';
import ProductInvoice from './ProductInvoice';

export interface IInvoice {
  id?: number;
  purchase_id: number;
  amount: number;
  status: string;

  updated_at?: Date;
  created_at?: Date;
}

class Invoice extends Model<IInvoice> implements IInvoice {
  declare purchase_id: number;
  declare amount: number;
  declare status: string;

  declare readonly updated_at: Date;
  declare readonly created_at: Date;
}

Invoice.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    purchase_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
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
    modelName: 'invoice',
  }
);

Invoice.belongsTo(Purchase);

Invoice.belongsToMany(Product, {
  through: ProductInvoice,
});

export default Invoice;
