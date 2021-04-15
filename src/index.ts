import app from './app';
import './database';

app.listen(app.get('port'));
console.log(`Listening on http://${process.env.DOMAIN || 'localhost'}:${app.get('port')}`);