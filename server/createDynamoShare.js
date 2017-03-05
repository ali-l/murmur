'use strict';

const sharesTable = require('resources/SharesTable');

exports.handler = (event, context, callback) => {
	let body = JSON.parse(event.body);
	let item = {
		id: body.id,
		iv: new Uint8Array(body.iv),
		fileName: body.fileName,
		accessToken: body.accessToken,
		shareLink: body.shareLink
	};

	sharesTable.putItem(item.id, item.iv, item.fileName, item.accessToken, item.shareLink)
		.then(() => {
	    context.succeed({
	      "statusCode": 200,
		    "headers": {'Access-Control-Allow-Origin': '*'},
	      "body": "" 
	    })
		})
		.catch(err => {
	    context.succeed({
	      "statusCode": 500,
	      "headers": {'Access-Control-Allow-Origin': '*'},
	      "body": JSON.stringify(err)
	    })
		})
};