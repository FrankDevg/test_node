import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

const databaseName = Buffer.from(process.env.DATABASE_NAME, 'base64').toString('utf-8');
const databaseUser = Buffer.from(process.env.DATABASE_USER, 'base64').toString('utf-8');
const databasePassword = Buffer.from(process.env.DATABASE_PASSWORD, 'base64').toString('utf-8');

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
  dialect: 'sqlite',
  storage: './dev.sqlite'
});

export default sequelize;


