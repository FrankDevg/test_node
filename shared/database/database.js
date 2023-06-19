import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

const sequelize = new Sequelize(Buffer.from(process.env.DATABASE_NAME, 'base64').toString('utf-8'),
                                Buffer.from(process.env.DATABASE_USER, 'base64').toString('utf-8'),  
                                Buffer.from(process.env.DATABASE_PASSWORD, 'base64').toString('utf-8'), {
  dialect: 'sqlite',
  storage: './dev.sqlite'
});

export default sequelize;


