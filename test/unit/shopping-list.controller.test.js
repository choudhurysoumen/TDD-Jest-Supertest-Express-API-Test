const { it, expect } = require("@jest/globals");
const httpMocks = require("node-mocks-http");

const ShoppingListController = require("../../api/controller/shopping-list.controller");
const ShopItemModel = require("../../database/models/ShopItem");
const newShopItem = require("../mock-data/shop-item.json");

ShopItemModel.create = jest.fn();

describe("ShoppingListController.addItem", () => {
    it("should have a addItem function", () => {
        expect(typeof ShoppingListController.addItem).toBe("function");
    })
    it("should call ShopItemModel.create", () => {
        let req, res, next;
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next= null;
        req.body = newShopItem;

        ShoppingListController.addItem(req, res, next);
        expect(ShopItemModel.create).toBeCalled();
    })
})