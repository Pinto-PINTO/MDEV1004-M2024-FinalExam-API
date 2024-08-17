"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let artSchema = new mongoose_1.Schema({
    artworkID: String,
    title: String,
    artist: String,
    medium: String,
    subject: String,
    yearCreated: Number,
    description: String,
    dimensions: String,
    imageURL: String,
    style: String,
    currentLocation: String
});
let Movie = (0, mongoose_1.model)('favouriteFamousArtworks', artSchema);
exports.default = Movie;
//# sourceMappingURL=movie.js.map