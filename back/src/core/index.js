import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import helmet from 'helmet';
import Ddos from 'ddos';
import cors from 'cors';

import Xlog from '../xdk/Xlog';
import logger from '../tools/logger';

import * as userController from '../controllers/userController';

import { update } from 'ddos/lib';

const X = new Xlog('core:index');

const port = (process.env.NODE_ENV === 'PRODUCTION') ? 3000 : 3080;
const mongooseurl = (process.env.NODE_ENV === "PRODUCTION") ? `mongodb://localhost:27017/recipesManager` : `mongodb://localhost:27017/recipesManager-dev`;

console.time('[*] Booting');

const app = express();

function configRouter() {
    const router = express.Router();
    if (process.env.NODE_ENV === 'PRODUCTION') {
        const ddos = new Ddos({burst: 5, limit: 10});
        router.use(ddos.express);
    }
    router.route('/')
        .get(logger, (req, res) => {
            return res.status(200).send('Recipe\'s Manager')
        });

    router.route('/register')
        .post(logger, userController.registerUser);

    router.route('/login')
        .post(logger, userController.logUser);
    

    router.route('/user/delete')
        .delete(logger, userController.deleteUser);

    router.route('/user/:id')
        .get(logger, userController.getInfosUser)
        .put(logger, userController.editInfosUser);

    app.use(router);
}

function configApp(app){
    app.use(cors((req, next) => {
        const options = {
            origin: "*",
            optionsSuccesStatus: 200,
        };
        next(null, options);
    }));
    app.use(helmet());
    app.use((req, res, next) => { // Overrides some of Helmet's properties
        res.header('Content-Security-Policy', 'default-src \'self\''); // Added layer to prevent from injections (See: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP to write the appropriate policy)
        res.header('X-Frame-Options', 'SAMEORIGIN'); // ClickJacking/ClickBaiting Protection
        res.header('X-XSS-Protection', '1; mode=block'); // XSS Protection (see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
        res.header('X-Content-Type-Options', 'nosniff'); // No-Sniffing Content-Type
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH'); // General Allowed Methods
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, x-access-token, Accept'); // Access Control Exhaustive List
        next();
    });
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
    app.use(passport.initialize());

    configRouter(app);
}

function initMongoConnect() {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongooseurl, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(() => {
        X.boot('successfully connected to the mongoDb Server', 'INF');
    }).catch(err => {
        X.error(err, 'ERR');
    });
}

initMongoConnect();


configApp(app);

const server = app.listen(port, () => {
    console.log(`Recipe\'s Manager API listening at: ${server.address().address}:${server.address().port}`);

    console.timeEnd('[*] Booting');
    process.on('SIGINT', () => {
        process.exit(0);
    });
});

module.exports = app;