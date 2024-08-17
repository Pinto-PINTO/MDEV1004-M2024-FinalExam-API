"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArt = exports.UpdateArt = exports.AddArt = exports.DisplayArtById = exports.DisplayArtList = void 0;
const movie_1 = __importDefault(require("../Models/art"));
const Util_1 = require("../Util");
function DisplayArtList(req, res, next) {
    movie_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Art List Retrieved and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayArtList = DisplayArtList;
function DisplayArtById(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrive an art", data: "" });
    }
    else {
        movie_1.default.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "One Art Retrived and Displayed", data: data });
            }
            else {
                res.status(404).json({ success: false, msg: "Art not found", data: "" });
            }
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.DisplayArtById = DisplayArtById;
function AddArt(req, res, next) {
    try{
    
        let movie = new movie_1.default({
            artworkID: req.body.artworkID,
            title: req.body.title,
            artist: req.body.artist,
            medium: req.body.medium,
            subject: req.body.subject,
            yearCreated: req.body.yearCreated,
            description: req.body.description,
            dimensions: req.body.dimensions,
            imageURL: req.body.imageURL,
            style: req.body.style,
            currentLocation: req.body.currentLocation
        });
        movie_1.default.create(movie)
            .then(() => {
            res.status(200).json({ success: true, msg: "Movie added", data: movie });
        })
            .catch((err) => {
            console.error(err);
        });
    }catch(error){
        console.log("Error:",error);
    }
}
exports.AddArt = AddArt;
function UpdateArt(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to update a movie", data: "" });
    }
    else {
        // const genres = (req.body.genres ? String(req.body.genres) : "");
        // const directors = (req.body.directors ? String(req.body.directors) : "");
        // const actors = (req.body.actors ? String(req.body.actors) : "");
        // const writers = (req.body.writers ? String(req.body.writers) : "");

        // let genres = (req.body.genres) ? (0, Util_1.SanitizeArray)(req.body.genres) : (0, Util_1.SanitizeArray)("");
        // let directors = (req.body.directors) ? (0, Util_1.SanitizeArray)(req.body.directors) : (0, Util_1.SanitizeArray)("");
        // let actors = (req.body.actors) ? (0, Util_1.SanitizeArray)(req.body.actors) : (0, Util_1.SanitizeArray)("");
        // let writers = (req.body.writers) ? (0, Util_1.SanitizeArray)(req.body.writers) : (0, Util_1.SanitizeArray)("");
        let artToUpdate = new movie_1.default({
            _id: id,
            artworkID: req.body.artworkID,
            title: req.body.title,
            artist: req.body.artist,
            medium: req.body.medium,
            subject: req.body.subject,
            yearCreated: req.body.yearCreated,
            description: req.body.description,
            dimensions: req.body.dimensions,
            imageURL: req.body.imageURL,
            style: req.body.style,
            currentLocation: req.body.currentLocation
        });
        movie_1.default.updateOne({ _id: id }, artToUpdate)
            .then(() => {
            res.status(200).json({ success: true, msg: "Art updated", data: artToUpdate });
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.UpdateArt = UpdateArt;
function DeleteArt(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to delete an art", data: "" });
    }
    else {
        movie_1.default.deleteOne({ _id: id })
            .then(() => {
            res.status(200).json({ success: true, msg: "Art deleted", data: id });
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.DeleteArt = DeleteArt;
//# sourceMappingURL=movie.js.map