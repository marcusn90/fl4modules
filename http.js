var httpCodes = {
	'200' : 'OK',
	'404' : 'Not Found'
};

function getMsgByCode ( code ) {
	return httpCodes[code];
}
export default getMsgByCode;