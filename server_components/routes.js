const express = require('express');
const path = require('path');
const router = express.Router();

import validate from './helpers/validate';
import { verifyToken } from "./helpers/jwtToken";
import {
    getUser,
    register,
    logout,
    login,
    loginSchema,
    registerSchema
} from "./controllers/auth";

router.post('/register',
    validate(registerSchema),
    register,
);

router.get('/info',
    verifyToken, 
    getUser
);

router.post('/login',
    validate(loginSchema),
    login
);

router.get('/logout',
    verifyToken,
    logout
);

router.get('/', function (req, res) {
    console.log('qweqweqweqweqwewq')
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = router;