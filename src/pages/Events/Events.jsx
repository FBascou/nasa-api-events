import React from 'react';
import NewsList from '../../components/NewsList/NewsList';

const Events = ({ apiList }) => {
  return (
    <div>
      <NewsList apiList={apiList} />
    </div>
  );
};

export default Events;
