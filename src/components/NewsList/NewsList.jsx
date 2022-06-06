import React, { useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';
import { sortDatePast, sortDateFuture } from '../../helpers/helpers';

const NewsList = ({ apiList }) => {
  const [toggle, setToggle] = useState(false);

  const toggleSort = () => {
    setToggle((toggle) => !toggle);
    toggle ? sortDatePast(apiList) : sortDateFuture(apiList);
  };

  return (
    <div className="container">
      <table className="table-container">
        <thead>
          <tr>
            <th onClick={toggleSort} style={{ cursor: 'pointer' }}>
              Date ↕️
            </th>
            <th>Body/Event Name</th>
            <th>Type</th>
            <th>Description</th>
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
