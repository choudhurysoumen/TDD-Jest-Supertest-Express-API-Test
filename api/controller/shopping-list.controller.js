const ShopItemModel = require("../../database/models/ShopItem");

exports.addItem = (req, res, next) => {
    ShopItemModel.create();
}