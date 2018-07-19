const date = require('date-and-time');

exports.get = () =>
{
	return date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
};