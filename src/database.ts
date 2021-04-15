import {Sequelize} from 'sequelize';
import config from "./config/config";

// Option 1: Passing a connection URI
const sequelize = new Sequelize(config.DB.URI);

console.log(config.DB.URI);

try {
    const connect = async () => await sequelize.authenticate()
    connect().then(() => console.log('Connection has been established successfully.'));
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
