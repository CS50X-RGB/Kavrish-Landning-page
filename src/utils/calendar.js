import dayjs from 'dayjs';

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDayOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDayOfMonth = dayjs().year(year).month(month).endOf('month');
  const arrayOfDate = [];

  // Create prefix dates
  for (let i = 0; i < firstDayOfMonth.day(); i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: firstDayOfMonth.subtract(i + 1, 'day') // Adjust subtract logic
    });
  }

  // Generate dates for the current month
  for (let i = 1; i <= lastDayOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: dayjs().year(year).month(month).date(i),
      today: dayjs().year(year).month(month).date(i).isSame(dayjs(), 'day')
    });
  }

  // Create suffix dates
  const remainingDate = 42 - arrayOfDate.length;
  for (let i = 1; i <= remainingDate; i++) {
    arrayOfDate.push({
      currentMonth: false,
      date: lastDayOfMonth.add(i, 'day') // Adjust add logic
    });
  }

  return arrayOfDate;
};

// Usage example
const dates = generateDate();
console.log(dates);


export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

