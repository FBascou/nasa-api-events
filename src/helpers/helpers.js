export const sortDatePast = (list) => {
  const sortedDates = list.sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    return dateA - dateB;
  });
  return [...sortedDates];
};

export const sortDateFuture = (list) => {
  const sortedDates = list.sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    return dateB - dateA;
  });
  return [...sortedDates];
};

export const formatDate = (item) => {
  return new Date(item).toLocaleDateString(`en-CA`, {
    year: 'numeric',
    month: `2-digit`,
    day: '2-digit',
  });
};
