"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const DB_1 = require("./DB");
async function main() {
    (0, DB_1.startConnection)();
    await app_1.default.listen(app_1.default.get('port'));
    console.log('Server on PORT -->  --> ', app_1.default.get('port'));
}
main();
