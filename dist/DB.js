"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    const db = await (0, mongoose_1.connect)('mongodb://localhost/galeria-db', {
    //useNewUrlParser: true
    });
    console.log('Database is --> OKAY <-- ');
}
exports.startConnection = startConnection;
