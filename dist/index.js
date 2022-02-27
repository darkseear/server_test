"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.get('/appget/', function (request, response) {
    response.send('hello');
});
app.use(express_1["default"].static("public"));
// app.use(bodyParser.json());
// app.use(cors());
// app.use(function (req, res, next) {
//     // console.log(req.header('Origin'));
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();
// });
// app.express.use(bodyParser.urlencoded({ extended: true }))
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
//# sourceMappingURL=index.js.map