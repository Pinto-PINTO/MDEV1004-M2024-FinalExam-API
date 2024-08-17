//=========================================
// File Name     : art.ts
// Student Name  : Menuka Pinto
// Student ID    : 200574919
// Date          : Aug 16th 2024
//=========================================
import { Request, Response, NextFunction } from 'express';

import Movie from '../Models/art';
import { SanitizeArray } from '../Util';

/**
 * This function displays the art list in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayArtList(req: Request, res: Response, next: NextFunction): void
{
    Movie.find({})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "Art List Retrieved and Displayed", data: data})
    })
    .catch((err) =>
    {
        console.error(err);
    })
}

/**
 * This function displays a single movie by ID in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayArtById(req: Request, res: Response, next: NextFunction) : void
{
    // endpoint should be /api/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to retrive an artwork", data: ""});
    }
    else
    {
        Movie.findById({_id: id})
        .then((data) =>
        {
            if(data)
            {
                res.status(200).json({success: true, msg: "One Art Retrived and Displayed", data: data})
            }
            else
            {
                res.status(404).json({success: false, msg: "Art not found", data: ""});
            }
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}

/**
 * This function adds a movie to the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function AddArt(req: Request, res:Response, next: NextFunction): void
{
    console.log(">>>", req.body)
    // let genres = (req.body.genres) ?  SanitizeArray(req.body.genres as string) : SanitizeArray("");
    // let directors = (req.body.directors) ? SanitizeArray(req.body.directors as string) : SanitizeArray("");
    // let actors = (req.body.actors) ? SanitizeArray(req.body.actors as string) : SanitizeArray("");
    // let writers = (req.body.writers) ? SanitizeArray(req.body.writers as string) : SanitizeArray("");

    let movie = new Movie({
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
 
     Movie.create(movie)
     .then(() =>
     {
        res.status(200).json({success: true, msg: "Art added", data: movie});
     })
     .catch((err) =>
     {
        console.error(err);
     })
}

/**
 * This function updates a movie in the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function UpdateArt(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/update/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to update a art", data: ""});
    }
    else
    {
        let artToUpdate = new Movie({
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

        Movie.updateOne({_id: id}, artToUpdate)
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Art updated", data: artToUpdate});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}

/**
 * This function deletes a movie from the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DeleteArt(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/delete/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to delete a art", data: ""});
    }
    else
    {
        Movie.deleteOne({_id: id})
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Art deleted", data: id});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}