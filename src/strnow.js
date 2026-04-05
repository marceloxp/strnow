import { format } from 'date-and-time';

export const get = () => {
	return format(new Date(), 'YYYY-MM-DD HH:mm:ss');
};

export default {
	get
};