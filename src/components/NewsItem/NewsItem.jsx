import React from 'react';

const NewsItem = ({ name, type, date, description, definition }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{definition}</td>
    </tr>
  );
};

export default NewsItem;
