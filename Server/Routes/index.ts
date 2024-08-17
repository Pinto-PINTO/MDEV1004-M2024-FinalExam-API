//=========================================
// File Name     : index.ts
// Student Name  : Menuka Pinto
// Student ID    : 200574919
// Date          : Aug 16th 2024
//=========================================
import express from 'express';
const router = express.Router();

import { DisplayArtList, DisplayArtById, AddArt, UpdateArt, DeleteArt } from '../Controllers/art';
import { ProcessLogin, ProcessLogout, ProcessRegistration } from '../Controllers/auth';

/* List of Authentication Routes (endpoints) */

/* Register User */
router.post('/register', (req, res, next) => {  ProcessRegistration(req, res, next); });

/* Login User */
router.post('/login', (req, res, next) => {  ProcessLogin(req, res, next); });

/* Logout User */
router.get('/logout', (req, res, next) => {  ProcessLogout(req, res, next);});


/* List of Movie Routes (endpoints) */

/* GET Movie List. */
router.get('/', (req, res, next) => {  DisplayArtList(req, res, next); });

/* GET Movie by ID. */
router.get('/find/:id', (req, res, next) => {  DisplayArtById(req, res, next); });

/* Add Movie */
router.post('/add', (req, res, next) => {  console.log(">>>>>>>", req.body); AddArt(req, res, next); });

/* Update Movie */
router.put('/update/:id', (req, res, next) => {  UpdateArt(req, res, next); });

/* Delete Movie */
router.delete('/delete/:id', (req, res, next) => {  DeleteArt(req, res, next); });


export default router;
