var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    category: {
        type: String,
        required: true,
        unique: false
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tags"
    }],
    likes: {
        type: Number,
        required: true,
        default: 0
    }, 
    uses: {
        type: Number,
        required: true,
        default: 0
    }, 
    images: {
        type: [String],
        required: false,
        unique: false
    }, 
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }], 
    
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Category = mongoose.model("Category", CategorySchema);

module.exports = Category;