const API_KEY = 'q0W8trWIeEZOKtTk2prwVmoiMbnWf0aLiYXYbe9d';
const date = new Date();
const todayDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
	.toISOString()
	.split('T')[0];
const todayYear = date.getFullYear();
// let addThirtyDays = new Date(date.setDate(date.getDate() + 30)- (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];

const endpoints = () => {
	let endpointCAD = `?dist-max=0.05&fullname=true&date-min=${todayDate}&date-max=${todayYear}-12-31&sort=date`;
	let endpointSWN = `?startDate=${todayDate}&type=all&api_key=${API_KEY}`;
	let endpointFD = `?req-loc=true&req-alt=true&date-min=${todayDate}&date-max=${todayYear}-12-31&sort=date`;

	return [endpointCAD, endpointSWN, endpointFD];
};

export default endpoints;
