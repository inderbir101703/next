"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { MongoClient , ServerApiVersion  } = __webpack_require__(/*! mongodb */ \"mongodb\");\nasync function handler(req, res) {\n    console.log(\"tsting of the env\");\n    if (req.method === \"POST\") {\n        console.log(\"s\");\n        const data = req.body;\n        // const client =await MongoClient.connect('mongodb+srv://inderbirsingh:quertquerty@cluster0.xvxbhbp.mongodb.net/meetups?retryWrites=true&w=majority&appName=@Cluster0').catch(error => console.log(error))\n        // console.log('after connectin',client)\n        const uri = \"mongodb+srv://inderbirsingh:qwertyqwerty@cluster0.xvxbhbp.mongodb.net/?retryWrites=true&w=majority&appName=nextjs\";\n        // Create a MongoClient with a MongoClientOptions object to set the Stable API version\n        const client = new MongoClient(uri, {\n            serverApi: {\n                version: ServerApiVersion.v1,\n                strict: true,\n                deprecationErrors: true\n            }\n        });\n        //mongodb+srv://inderbir:WILDstone@123@cluster0.xvxbhbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\n        await client.connect();\n        // db=client.db()\n        await client.db(\"admin\").command({\n            ping: 1\n        });\n        console.log(\"Pinged your deployment. You successfully connected to MongoDB!\");\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        client.close();\n        console.log(\"inserting\");\n        res.status(201).json({\n            message: \"meetup inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxXQUFXLEdBQUVDLGdCQUFnQixHQUFFLEdBQUdDLG1CQUFPLENBQUMsd0JBQVMsQ0FBQztBQUM1RCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0lBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQyxJQUFHSCxHQUFHLENBQUNJLE1BQU0sS0FBRyxNQUFNLEVBQUM7UUFDbkJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNoQixNQUFNRSxJQUFJLEdBQUNMLEdBQUcsQ0FBQ00sSUFBSTtRQUV2QiwyTUFBMk07UUFDM00sd0NBQXdDO1FBQ3hDLE1BQU1DLEdBQUcsR0FBRyxtSEFBbUg7UUFDL0gsc0ZBQXNGO1FBQ3RGLE1BQU1DLE1BQU0sR0FBRyxJQUFJWixXQUFXLENBQUNXLEdBQUcsRUFBQztZQUMvQkUsU0FBUyxFQUFFO2dCQUNUQyxPQUFPLEVBQUViLGdCQUFnQixDQUFDYyxFQUFFO2dCQUM1QkMsTUFBTSxFQUFFLElBQUk7Z0JBQ1pDLGlCQUFpQixFQUFFLElBQUk7YUFDeEI7U0FDRixDQUFDO1FBQ0osaUhBQWlIO1FBQ2pILE1BQU1MLE1BQU0sQ0FBQ00sT0FBTyxFQUFFO1FBQ3RCLGlCQUFpQjtRQUNqQixNQUFNTixNQUFNLENBQUNPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO1lBQUVDLElBQUksRUFBRSxDQUFDO1NBQUUsQ0FBQyxDQUFDO1FBQzlDZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBQzlFLE1BQU1lLGlCQUFpQixHQUFDSCxFQUFFLENBQUNJLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDaEQsTUFBTUMsTUFBTSxHQUFDLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFTLENBQUNoQixJQUFJLENBQUM7UUFDcERHLE1BQU0sQ0FBQ2MsS0FBSyxFQUFFO1FBQ2RwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDeEJGLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBQyxpQkFBaUI7U0FBQyxDQUFDO0lBQ2pELENBQUM7QUFDRCxDQUFDO0FBQ0QsaUVBQWUxQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNb25nb0NsaWVudCwgU2VydmVyQXBpVmVyc2lvbiB9ID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcbiAgICBjb25zb2xlLmxvZygndHN0aW5nIG9mIHRoZSBlbnYnKVxuaWYocmVxLm1ldGhvZD09PVwiUE9TVFwiKXtcbiAgICBjb25zb2xlLmxvZygncycpXG4gICAgY29uc3QgZGF0YT1yZXEuYm9keVxuXG4vLyBjb25zdCBjbGllbnQgPWF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vaW5kZXJiaXJzaW5naDpxdWVydHF1ZXJ0eUBjbHVzdGVyMC54dnhiaGJwLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9QENsdXN0ZXIwJykuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuLy8gY29uc29sZS5sb2coJ2FmdGVyIGNvbm5lY3RpbicsY2xpZW50KVxuY29uc3QgdXJpID0gXCJtb25nb2RiK3NydjovL2luZGVyYmlyc2luZ2g6cXdlcnR5cXdlcnR5QGNsdXN0ZXIwLnh2eGJoYnAubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPW5leHRqc1wiO1xuLy8gQ3JlYXRlIGEgTW9uZ29DbGllbnQgd2l0aCBhIE1vbmdvQ2xpZW50T3B0aW9ucyBvYmplY3QgdG8gc2V0IHRoZSBTdGFibGUgQVBJIHZlcnNpb25cbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkse1xuICAgIHNlcnZlckFwaToge1xuICAgICAgdmVyc2lvbjogU2VydmVyQXBpVmVyc2lvbi52MSxcbiAgICAgIHN0cmljdDogdHJ1ZSxcbiAgICAgIGRlcHJlY2F0aW9uRXJyb3JzOiB0cnVlLFxuICAgIH1cbiAgfSk7XG4vL21vbmdvZGIrc3J2Oi8vaW5kZXJiaXI6V0lMRHN0b25lQDEyM0BjbHVzdGVyMC54dnhiaGJwLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFxuYXdhaXQgY2xpZW50LmNvbm5lY3QoKVxuLy8gZGI9Y2xpZW50LmRiKClcbmF3YWl0IGNsaWVudC5kYihcImFkbWluXCIpLmNvbW1hbmQoeyBwaW5nOiAxIH0pO1xuY29uc29sZS5sb2coXCJQaW5nZWQgeW91ciBkZXBsb3ltZW50LiBZb3Ugc3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byBNb25nb0RCIVwiKTtcbmNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uPWRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxuY29uc3QgcmVzdWx0PWF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKVxuY2xpZW50LmNsb3NlKClcbmNvbnNvbGUubG9nKCdpbnNlcnRpbmcnKVxucmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6XCJtZWV0dXAgaW5zZXJ0ZWRcIn0pXG59XG59XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiU2VydmVyQXBpVmVyc2lvbiIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwidXJpIiwiY2xpZW50Iiwic2VydmVyQXBpIiwidmVyc2lvbiIsInYxIiwic3RyaWN0IiwiZGVwcmVjYXRpb25FcnJvcnMiLCJjb25uZWN0IiwiZGIiLCJjb21tYW5kIiwicGluZyIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();