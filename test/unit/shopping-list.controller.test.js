const { it, expect, beforeEach } = require("@jest/globals");
const httpMocks = require("node-mocks-http");

const ShoppingListController = require("../../api/controller/shopping-list.controller");
const ShopItemModel = require("../../database/models/ShopItem");
const newShopItem = require("../mock-data/shop-item.json");

ShopItemModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next= null;
})

describe("ShoppingListController.addItem", () => {
    it("should have a addItem function", () => {
        expect(typeof ShoppingListController.addItem).toBe("function");
    })
    it("should call ShopItemModel.create", () => {
        req.body = newShopItem;
        ShoppingListController.addItem(req, res, next);
        expect(ShopItemModel.create).toBeCalledWith(newShopItem);
    })
    it("should return HTTP response 201", () => {
        req.body = newShopItem;
        ShoppingListController.addItem(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    })
})