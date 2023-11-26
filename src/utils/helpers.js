export const DemoChartData = (direction) => {
  const get12Months =
    direction === "ltr"
      ? [
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
          "December",
        ]
      : [
          "يناير",
          "فبراير",
          "مارس",
          "إبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ];

  const DEMO_TOTALSALES = [
    480, 200, 850, 1000, 400, 900, 700, 650, 800, 550, 700, 800,
  ];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();

  // Get the current month and the next 11 months
  const result = Array.from({ length: 12 }, (_, index) => {
    const monthIndex = (currentMonthIndex + index) % 12;
    return get12Months[monthIndex];
  });

  return result.map((label, ind) => {
    return { label: label, totalSales: DEMO_TOTALSALES[ind] };
  });
};
