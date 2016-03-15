var logger = require('./logger');
var getMsg = require('./http').getMsgByCode;

logger.logSuccess(getMsg(200));
logger.logError(getMsg(404));