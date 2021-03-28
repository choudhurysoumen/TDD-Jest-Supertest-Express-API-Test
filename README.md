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