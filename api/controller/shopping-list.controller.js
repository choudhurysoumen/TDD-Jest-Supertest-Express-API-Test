const ShopItemModel = require("../../database/models/ShopItem");

exports.addItem = (req, res, next) => {
    const savedItem = ShopItemModel.create(req.body);
    res.status(201).json(savedItem);
}