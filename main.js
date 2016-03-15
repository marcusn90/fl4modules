import * as logger from 'logger.js';
import getMsg from 'http.js';

export default function () {

	logger.logSuccess(getMsg(200));
	logger.logError(getMsg(404));
}