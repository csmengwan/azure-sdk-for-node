// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt?api-version=2017-01-01.4.0')
  .reply(200, "hello world\r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Fri, 03 Feb 2017 21:54:32 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '393a8bc0-0de4-4e65-974d-f5ae9ba07181',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Fri, 03 Feb 2017 21:54:32 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstdout.txt',
  date: 'Fri, 03 Feb 2017 21:56:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt?api-version=2017-01-01.4.0')
  .reply(200, "hello world\r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Fri, 03 Feb 2017 21:54:32 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '393a8bc0-0de4-4e65-974d-f5ae9ba07181',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Fri, 03 Feb 2017 21:54:32 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fjstesteastus2.eastus2.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstdout.txt',
  date: 'Fri, 03 Feb 2017 21:56:34 GMT',
  connection: 'close' });
 return result; }]];