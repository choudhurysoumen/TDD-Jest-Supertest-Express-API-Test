const mongoose = require('mongoose');

const ShopItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    buy: {
        type: Boolean,
        required: true
    }
});

const ShopItemModel = mongoose.model("ShopItemModel", ShopItemSchema);
module.exports = ShopItemModel;