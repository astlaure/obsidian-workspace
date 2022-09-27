import { DataTypes, Model } from 'sequelize';
import { database } from '@astlaure/obsidian-common';

export class Page extends Model {
  id!: number;

  title!: string;

  url!: string;

  published!: boolean;

  language!: string;

  template!: string;

  readonly createdAt!: Date;

  readonly updatedAt!: Date;
}

Page.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  template: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: database,
  tableName: 'pages',
});
