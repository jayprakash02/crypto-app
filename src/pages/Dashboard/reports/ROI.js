const ROI = () => {
  // Dummy data for the table
  const dummyData = [
    {
      siNo: 1,
      date: "2023-06-01",
      package: "Package A",
      percentage: 10,
      amount: 1000,
    },
    {
      siNo: 2,
      date: "2023-06-02",
      package: "Package B",
      percentage: 15,
      amount: 1500,
    },
    {
      siNo: 3,
      date: "2023-06-03",
      package: "Package C",
      percentage: 12,
      amount: 1200,
    },
    // Add more rows as needed
  ];

  return (
    <>
      <h1 className="text-4xl px-12 mb-8">ROI Report</h1>

      <div className="bg-black w-full px-12 py-4 justify-between flex">
        <div className="">SI No</div>
        <div className="">Date</div>
        <div className="">Package</div>
        <div className="">Percentage</div>
        <div className="">Amount</div>
      </div>

      {/* Render the table rows */}
      {dummyData.map((row, index) => (
        <div
          key={index}
          className="bg-black w-full px-12 py-4 justify-between flex"
        >
          <div className="">{row.siNo}</div>
          <div className="">{row.date}</div>
          <div className="">{row.package}</div>
          <div className="">{row.percentage}%</div>
          <div className="">{row.amount}</div>
        </div>
      ))}
    </>
  );
};

export default ROI;
