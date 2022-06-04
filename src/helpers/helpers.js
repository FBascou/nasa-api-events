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

export const sortDate = (list) => {
  const sortedDates = list.sort((a, b) => {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    return dateA - dateB;
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
