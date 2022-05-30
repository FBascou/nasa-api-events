import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';
import { sortDate } from '../../helpers/helpers';

const NewsList = ({ apiList }) => {
	// console.log(apiList.sort((a, b) => b.date - a.date));

	return (
		<div>
			<table className='table-container'>
				<thead>
					<tr>
						<th>Body/Event Name</th>
						<th>Type</th>
						<th>Date</th>
						<th>Description</th>
						<th>Definition</th>
					</tr>
				</thead>
				<tbody>
					{apiList.map((item, index) => (
						<NewsItem key={index} {...item} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default NewsList;
