import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username || "postgres",
  'password': config.password || "postgres",
  'database': config.database || "udagramdb",
  'host': config.host || "localhost",

  'dialect': config.dialect || "postgres",
  'storage': ':memory:',
});
