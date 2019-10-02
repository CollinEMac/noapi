
// See "06-define-api-[completely]" to learn more.

const me = [
	{
		url: 'http://localhost:3000/erp:/report/purchase/order?billId=1&formName=abc',
		result: {
			"success": true,
			"data": {
				"str": "abcd",
				"msg": "do something for form abc by api-forms"
			}
		}
	},

	{
		url: 'http://localhost:3000/erp:/bill/form/crud?formName=trader',
		result: {
			"success": true,
			"data": {
				"str": "abcd",
				"formresult": {
					"str": "abcd",
					"formName": "trader"
				}
			}
		}
	}
];

module.exports = me;
