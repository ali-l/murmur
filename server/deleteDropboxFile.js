import dropbox from './resources/dropbox';

const handler = (event, context, callback) => {
  event.Records.forEach(record => {
    if (record.eventName == 'REMOVE') dropbox.deleteFile(record.dynamodb.OldImage.accessToken.S, record.dynamodb.OldImage.fileName.S)
  });

  callback(null, `Successfully processed ${event.Records.length} records.`);
};

export {handler as handler}
