var mongoose = require("mongoose");

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: false,
        default: ""
    }, 
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    goldstars: {
        type: Number,
        required: true,
        default: 0
    },
    captions: [{
        type: Schema.Types.ObjectId,
        ref: "Captions"
    }], 
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Commentss"
    }],
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var User = mongoose.model("User", UserSchema);

module.exports = User;