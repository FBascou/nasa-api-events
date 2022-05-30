const months = {
	Jan: '01',
	Feb: '02',
	Mar: '03',
	Apr: '04',
	May: '05',
	Jun: '06',
	Jul: '07',
	Aug: '08',
	Sep: '09',
	Oct: '10',
	Nov: '11',
	Dec: '12',
};

export const eventDate = (list) => {
	const regex = /[A-z]{3}/;
	for (let key in months) {
		if (list.includes(key)) {
			return list.replace(regex, months[key]);
		} else {
			console.log('No');
		}
	}
};

export const sortDate = (list) => {
	list.sort((a, b) => b['date'] - a['date']);
};

CAD: '2022-Jun-03 04:14';
SWM: '2022-05-26T20:53Z';
Eclipse: '2022-10-25';
