'use strict'

import * as exercises from '../Sprint 3_Microservice/Exercise_model.mjs';
import express from 'express';
// import mongoose from 'mongoose';
import path from 'path';
import 'dotenv/config';


const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
  }
  )


app.post('/row', (req, res) => {
    exercises.createExercise(req.body.distance, req.body.split, req.body.where, req.body.recommend, req.body.rating,req.body.notes)
    .then(exercise => {
        res.status(201).json(exercise)
    })
    .catch(error => {
        console.log(error)
        res.status(400).send({ Error: "Invalid Request / an Error has occured" })
    })
})



app.get('/row', (req, res) => {
    console.log("get working")
    exercises.allExercises()
    .then(exerciseCollection =>{
        if (exerciseCollection !== undefined){
            console.log(exerciseCollection)
            res.status(200).json(exerciseCollection)
        }else{
            res.status(404).json({Error: 'Not Found'})
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})