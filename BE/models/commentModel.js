const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    }
    // Các trường thông tin khác về bình luận
});

const Comment = mongoose.model('Comments', CommentSchema);

module.exports = Comment;