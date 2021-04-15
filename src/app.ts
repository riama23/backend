import express from 'express'
import passport from 'passport'
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    return res.send(`The API is at http://${process.env.DOMAIN || 'localhost'}:${app.get('port')}`);
})

export default app;