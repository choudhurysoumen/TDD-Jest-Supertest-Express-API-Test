# TDD-Jest-Supertest-Express-API-Test
TDD approach to write Unit/ Integartion using Jest/ Supertest for Express REST API.

# s1-setup-app-server
1. Setup app folder: npm init -y
2. npm install express --save
3. Create new file app.js and create express server
4. Note: res.json sets content-type application/JSON response where res.send sets the content-type text/Html 
5. Verify the response on browser in "Response goes here"

# s2-setup-test-environment
1. Create test folder: test: all test goes here. test\unit: create unit test under this folder. shopping-list.controller.test.js will contain unit tests.
2. Create api controller folder: api\controller: hosts actual api controller. shopping-list.controller.js will contain all api code.
3. setup jest: npm install jest --save-dev
4. package.json: update scripts.test with following: "test": "jest"
5. npm run test - run this command. This will fail as "Your test suite must contain at least one test."

# s3-tdd-approach-to-create-api
1. shopping-list.controller.test.js: require shopping-list.controller. 
2. Add "describe" and "it" section. 
3. npm run test: this will fail as ShoppingListController.addItem function is not implemented
4. shopping-list.controller.js: implement addItem function signature
5. npm run test: should pass
6. package.json: update "test":"jest --watchAll" this will keep monitoring the changes on save, no need re-run test command 

# s4-setup-mongoose
1. Install MongoDB and Robo 3T. MongoDB Compass is also very useful.
2. npm install mongoose --save
3. Create schema /database/models/ShopItem.js
4. ShopItem.js: define ShopItemSchema and export ShopItemModel 

# s5-jest.fn-mock-mongoose-model
1. shopping-list.controller.test.js: require ShopItemModel
2. Use jest.fn() to mock mongoose create method
3. create new test: it "should call ShopItemModel.create" - check console: to confirm the test failed
4. shopping-list.controller.js: invoke ShopItemModel.create() inside the addItem() - observe test is passing
5. Observe Mongoose "console.warn", follow the step mentioned in the url to enable node test environement. create jest.config.js in the root folder and add the mentioned content.
6. re-run the test and confirm the warning is gone

# s6-setup-node-mocks-http-to-mock-req-res-next
1. npm install node-mocks-http --save-dev
2. shopping-list.controller.test.js: setup node-mocks-http and mock req, res
3. Create ./test/mock-data/shop-item.json mock data file and use it in the test.
4. Modify the test to pass req, res, next in ShoppingListController.addItem(req, res, next) 
5. Observe the test is failing, modify shopping-list.controller.js to accept req, res, next params
6. Update .toBeCalled() to alledWith(newShopItem): monitor the test is failing.
7. shopping-list.controller.js: pass req.body to ShopItemModel.create and test will pass now
8. Create a new test to validate HTTP response code 201. it "should return HTTP response 201" test should fail at this time.
9. shopping-list.controller.js: add following - res.status(201) to make the test pass
10. To ensure response it send back modify the test and expect res._isEndCalled() toBeTruthy: test should fail at this moment.
11. shopping-list.controller.js: res.status(201).send() append send() - all test should pass at this moment.

# s7-test-to-validate-response-has-new-shop-item-and-refactor-using-beforeEach
1. shopping-list.controller.test.js: extract req, res and next to global beforeEach
2. extract request.body to beforeEach of describe
3. it "should return json body in response": use mockReturnValue to mock the response whenever the respective method is called.
4. use _getJSONData() on res to get the data from the response. At this moment observe the test is failing.
5. shopping-list.controller.js: modify the addItem method and return savedItem in json format by changing .send() to .json(savedItem)
6. Observe the test is still failing.
7. Test is still failing because the memory of expected object and the response object are different. Use toStrictEqual in test instead of toBe to validate the response 