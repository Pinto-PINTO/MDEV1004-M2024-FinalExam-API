"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const movie_1 = require("../Controllers/art");
const auth_1 = require("../Controllers/auth");
router.post('/register', (req, res, next) => { (0, auth_1.ProcessRegistration)(req, res, next); });
router.post('/login', (req, res, next) => { (0, auth_1.ProcessLogin)(req, res, next); });
router.get('/logout', (req, res, next) => { (0, auth_1.ProcessLogout)(req, res, next); });
router.get('/', (req, res, next) => { (0, movie_1.DisplayArtList)(req, res, next); });
router.get('/find/:id', (req, res, next) => { (0, movie_1.DisplayArtById)(req, res, next); });
router.post('/add', (req, res, next) => { console.log("js>>>", req.body); (0, movie_1.AddArt)(req, res, next); });
router.put('/update/:id', (req, res, next) => { (0, movie_1.UpdateArt)(req, res, next); });
router.delete('/delete/:id', (req, res, next) => { (0, movie_1.DeleteArt)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map