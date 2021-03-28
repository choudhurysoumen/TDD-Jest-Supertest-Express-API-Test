const { it, expect } = require("@jest/globals");
const ShoppingListController = require("../../api/controller/shopping-list.controller");
const ShopItemModel = require("../../database/models/ShopItem");

ShopItemModel.create = jest.fn();

describe("ShoppingListController.addItem", () => {
    it("should have a addItem function", () => {
        expect(typeof ShoppingListController.addItem).toBe("function");
    })
    it("should call ShopItemModel.create", () => {
        ShoppingListController.addItem();
        expect(ShopItemModel.create).toBeCalled();
    })
})