
// Each of elements in array "me" is an api definition.

// There must be the following properties in the api definition:
//
// 		1. A demo "url" or a "params" (for sending data in testing).
// 		2. A "result" or a "test" (for validating data in testing).
//

// Learn more:
// 		02-define-API-and-test-cases-with-object
//		03-define-API-and-test-cases-with-file
//		04-define-API-and-test-cases-[completely]
//		05-define-API-[minimally]
//		06-define-API-with-empty-file


const me = [

	// Define an api
	{
		api: '/bill/form/crud',

		// The parameters which this api accepted.
		params: {
			formName: 'trader', // "trader" is a demo value
		},

		// Test case (the expected result which will be returned from server in testing)
		result: {
			"success": true, // The state of the result
			"data": {		 	// The data of the result
				"formName": "trader"
			}
		}
	},

	// Define an api with demo url
	{
		// You can just specify a demo url including the api and parameters,
		// click it in your editor and view the result in your browser, so convenient.
		url: "http://localhost:3000/bill/form/crud?formName=trader",

		// 'Cause the demo url is just a demo, so maybe you wanna to omit "http://localhost:3000",
		// but that will loses the meaning of the demo and the convenience mentioned above.

		result: {
			"success": true,
			"data": {
				"formName": "trader"
			}
		}
	},

	// Define another api
	{
		url: 'http://localhost:3000/bill/form/check?billid=123&act=check',

		result: {
			"success": true,
			"data": {
				"billid": "123",
				"checked": true
			}
		}
	},

	// Define more apis
	{
		url: 'http://localhost:3000/bill/form/check?billid=123&act=uncheck',
		result: {
			"success": true,
			"data": {
				"billid": "123",
				"checked": false
			}
		}
	},

	{
		url: 'http://localhost:3000/bill/form/getFields?formName=trader',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "billid",
					"type": "number"
				},
				{
					"fieldname": "billcode",
					"type": "string"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/bill/list/getData?formName=trader',
		result: {
			"success": true,
			"data": [
				{
					"billid": 1,
					"billcode": "XX-201905-00001"
				},
				{
					"billid": 2,
					"billcode": "XX-201905-00002"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/bill/list/getFields?formName=trader',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "billid",
					"type": "number"
				},
				{
					"fieldname": "billcode",
					"type": "string"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/bill/dropdownlist?formName=paymethod',
		result: {
			"success": true,
			"data": [
				"Cash",
				"MasterCard"
			]
		}
	},

	{
		url: 'http://localhost:3000/info/form/crud?formName=goods',
		result: {
			"success": true,
			"data": {
				"formName": "goods",
				"isShowBom": true
			}
		}
	},

	{
		url: 'http://localhost:3000/info/form/getFields?formName=goods',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "id",
					"type": "number"
				},
				{
					"fieldname": "code",
					"type": "string"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/info/form/crud?formName=employee',
		result: {
			"success": true,
			"data": {
				"formName": "employee",
				"isShowBom": false
			}
		}
	},

	{
		url: 'http://localhost:3000/info/list/getData?formName=goods',
		result: {
			"success": true,
			"data": [
				{
					"id": 1,
					"code": "SS-0001"
				},
				{
					"id": 2,
					"code": "SS-0002"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/info/list/getFields?formName=goods',
		result: {
			"success": true,
			"data": [
				{
					"fieldname": "id",
					"type": "number"
				},
				{
					"fieldname": "code",
					"type": "string"
				}
			]
		}
	},

	{
		url: 'http://localhost:3000/info/dropdownlist?formName=employee',
		result: {
			"success": true,
			"data": [
				"Captain America",
				"Iron Man",
				"Thor"
			]
		}
	},

	{
		url: 'http://localhost:3000/sys/getApiVersion',
		result: {
			"success": true,
			"data": {
				"apiVersion": "1.0.0"
			}
		}
	},

	{
		url: 'http://localhost:3000/about',
		result: {
			"success": true,
			"data": {
				"author": "Owen Luke"
			}
		}
	},
];

module.exports = me;
