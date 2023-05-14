import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    distance: { type: String, required: true },
    split: { type: String, required: true },
    where: { type: String, required: true },
    recommend: { type: String, required: true },
    rating: { type: Number, required: true },
    notes: { type: String, required: false },
});

const Exercises = mongoose.model("Exercise", exerciseSchema);

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */

const createExercise = async (distance, split, where, recommend, rating, notes) => {
    const exercise = new Exercises({distance: distance, split: split, where: where, recommend: recommend, rating: rating, notes: notes})
    console.log(exercise)
    return exercise.save();
}


const allExercises = async () => {
    const allExercises = await Exercises.find()
    return allExercises 
}


export {createExercise, allExercises}
