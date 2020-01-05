import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { PORT, mongo } from './config';
import * as routes from './routes';

mongoose.connect(mongo.uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connected = 200;
const error = 400;
const disconnected = 500;

mongoose.connection.on('connected', function() {
	console.log(connected + ' - Mongoose default connection is open to ', mongo.uri);
});
mongoose.connection.on('error', function(err) {
	console.log(error + ' - Mongoose default connection has occured ' + err + ' error. string: ' + mongo.uri);
});
mongoose.connection.on('disconnected', function() {
	console.log(disconnected + ' - Mongoose default connection is disconnected');
});
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose default connection is disconnected due to application termination');
	});
});

const app = express();

app.use(helmet());
app.use(helmet.noCache());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
	console.log(`The server is listening closely on port ${PORT}`);
});

process.on('uncaughtException', (err: Error) => {
	console.log('uncaughtException:', err);
	process.exit(1);
});

export = app;