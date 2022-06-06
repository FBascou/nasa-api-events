import React from 'react';

const NewsItem = ({ name, type, date, description, definition }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{description}</td>
    </tr>
  );
};

export default NewsItem;
