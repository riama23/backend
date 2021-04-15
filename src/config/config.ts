import * as dotenv from 'dotenv';

dotenv.config();

export default {
    DB: {
        URI: `postgres://${process.env.POSTGRES_USER || 'admin_db'}:${process.env.POSTGRES_PASSWORD || 'admin_12345678'}@localhost:5432/${process.env.POSTGRES_DB || 'postgres_db'}`,
    }
}