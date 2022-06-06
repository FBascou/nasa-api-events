import React from 'react';
import NewsList from '../../components/NewsList/NewsList';
import './Events.css';

const Events = ({ apiList }) => {
  return (
    <div className="events-container">
      <NewsList apiList={apiList} />
    </div>
  );
};

export default Events;
