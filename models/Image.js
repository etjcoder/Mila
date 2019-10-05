var mongoose = require("mongoose");

var Schema = mongoose.Schema;
// commit check
console.log('commit')
var ImageSchema = new Schema({
    imageURL: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        unique: false
    },
    tags: {
        type: [String],
        required: false,
        unique: false
    },
    author: {
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
    suggestedCaptions: [{
        type: Schema.Types.ObjectId,
        ref: "Suggestedcaption"
    }], 
    
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Image = mongoose.model("Image", ImageSchema);

module.exports = Image;