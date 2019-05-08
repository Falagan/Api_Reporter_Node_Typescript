import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String
    },
    password: {
        type: String
    },
    trelloUser: {
        type: String
    },
    trelloApiKey: {
        type: String
    },
    trelloToken: {
        type: String
    }
});

export const User = mongoose.model('User', userSchema, 'User');
