const ShopItemModel = require("../../database/models/ShopItem");

exports.addItem = () => {
    ShopItemModel.create();
}