//=========================================
// File Name     : art.ts
// Student Name  : Menuka Pinto
// Student ID    : 200574919
// Date          : Aug 16th 2024
//=========================================
import { Collection, Schema, model } from 'mongoose';

// Art Interface - defines the structure of a art document
export interface IArt 
{
    artworkID: string,
    title: string,
    artist: string,
    medium: string,
    subject: string,
    yearCreated: number,
    description: string,
    dimensions: string,
    imageURL: string,
    style: string,
    currentLocation: string
}

// Movie Schema - defines the structure of a movie document
let artSchema = new Schema<IArt>
({
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

let Movie = model<IArt>('favouriteFamousArtworks', artSchema);

export default Movie;