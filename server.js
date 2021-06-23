#!node
const { logger } = require('./winston');


logger.log('error', 'hello', { message: 'world' });
logger.info('hello', { message: 'world' });
