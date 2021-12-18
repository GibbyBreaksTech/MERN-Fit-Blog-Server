import mongoose from 'mongoose';

const CreatorSchema = new mongoose.Schema({
    creator: {
        type: String,
        allowNull: false,
        unique: true,
    },
    avatar: {
        type: String,
    },
    username: {
        type: String,
    },
    role: {
        type: String,
    },
    bio: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    youtube: {
        type: String,
    },
    other: {
        type: String,
    },
})

export const CreatorModel = mongoose.model("Creator", CreatorSchema);