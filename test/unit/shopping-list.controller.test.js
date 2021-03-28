const { it, expect } = require("@jest/globals");
const ShoppingListController = require("../../api/controller/shopping-list.controller");

describe("ShoppingListController.addItem", () => {
    it("should have a addItem function", () => {
        expect(typeof ShoppingListController.addItem).toBe("function");
    })
})