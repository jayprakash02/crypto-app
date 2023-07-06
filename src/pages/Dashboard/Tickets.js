import React, { useState } from "react";

const Tickets = ({ tickets }) => {
  return (
    <div className="w-full bg-neutral-900  py-16">
      {tickets == "Submit" && <Submit />}
      {tickets == "list" && <List />}
    </div>
  );
};

export default Tickets;

const Submit = () => {
  // submit ticket list 
  const [ticketform, setticketform] = useState({
    department: "",
    service: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setticketform({ ...ticketform, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ticketData", ticketform);
  };

  return (
    <div className="max-w-5xl w-full mx-auto ">
      <h1 className="text-5xl font-semibold my-10">Tickets</h1>

      <div className="grid grid-cols-2 mb-4 gap-4">
        <div>
          <p className="mb-2">Choose Department</p>
          <input
            name="department"
            onChange={handleChange}
            className="px-2 py-2 rounded-lg bg-black w-full"
          />
        </div>

        <div>
          <p className="mb-2">Choose Related Service</p>
          <input
            name="service"
            onChange={handleChange}
            className="px-2 py-2 rounded-lg bg-black w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2">Subject</p>
        <input
          name="subject"
          onChange={handleChange}
          className="px-2 py-2 rounded-lg bg-black w-full"
        />
      </div>

      <div>
        <p className="mb-2">Message</p>
        <textarea
          name="message"
          onChange={handleChange}
          className="px-2 py-2 rounded-lg bg-black w-full min-h-[150px]"
        />
      </div>

      <div className="mt-4 mb-4">
        <p className="mb-2">Attachment (optional)</p>
        <input className="px-2 py-2 rounded-lg bg-black w-full" />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full max-w-[250px] font-semibold bg-gradient-to-r text-black from-blue-500 to-fuchsia-700 rounded-full p-3"
      >
        Submit
      </button>
    </div>
  );
};

const List = () => {
  // table data
  const dummyData = [
    {
      department: "AIBIB",
      category: "RED",
      lastUpdate: "22min",
      status: "active",
      position: "left",
    },
    {
      department: "AIakjBIB",
      category: "RED",
      lastUpdate: "22afmin",
      status: "active",
      position: "right",
    },
    {
      department: "AIacmhhbBIB",
      category: "RED",
      lastUpdate: "22min",
      status: "active",
      position: "left",
    },
    {
      department: "AvajnIBIB",
      category: "RED",
      lastUpdate: "22min",
      status: "active",
      position: "right",
    },
    {
      department: "AIBIB",
      category: "RED",
      lastUpdate: "22min",
      status: "active",
      position: "left",
    },
  ];

  // ticketListState
  const [totalTickets, settotalTickets] = useState("780");
  const [openTickets, setopenTickets] = useState("6250");
  const [closedTickets, setclosedTickets] = useState("17");

  // percentages state
  const [totalTicketsPercent, settotalTicketsPercent] = useState("12");
  const [openTicketsPercent, setopenTicketsPercent] = useState("32");
  const [closedTicketsPercent, setclosedTicketsPercent] = useState("17");

  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className="flex rounded-2xl p-4 justify-between bg-gradient-to-tr from-indigo-400 to-fuchsia-600  max-h-[280px]">
        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl ">Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{totalTickets}</p>{" "}
            <span className="rounded-xl px-4 flex text-rose-700 bg-rose-300 font-semibold py-2">
              {totalTicketsPercent}%{" "}
              <img src="./images/icons/down.png" className="w-6  h-5" />
            </span>
          </div>
          <p className="text-xl">Total Tickets</p>
        </div>

        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl ">Open Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{openTickets}</p>{" "}
            <span className="rounded-xl px-4 text-green-600  flex font-semibold bg-green-200 py-2">
              {openTicketsPercent}%{" "}
              <img src="./images/icons/up.png" className="w-6  h-5" />
            </span>
          </div>
          <p className="text-xl">In the order</p>
        </div>

        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl "> Closed Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{closedTickets}</p>{" "}
            <span className="rounded-xl px-4 text-green-600  flex font-semibold bg-green-200 py-2">
              {closedTicketsPercent}%{" "}
              <img src="./images/icons/up.png" className="w-6  h-5" />
            </span>
          </div>
          <p className="text-xl">Answered</p>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-4xl my-12 font-semibold">Tickets</h1>
        <table className="w-full">
          <thead className="bg-black w-full px-12 py-4 text-left flex ">
            <th className=" w-full max-w-[180px] ">Department</th>
            <th className=" w-full max-w-[180px] ml-12">Category</th>
            <th className=" w-full max-w-[180px] ml-12 ">Last Update</th>
            <th className=" w-full max-w-[180px] ml-12 ">Status</th>
            <th className=" w-full max-w-[180px] ml-12 ">Position</th>
          </thead>
          <tbody className="w-full">
            {dummyData.map((e, key) => {
              return (
                <tr
                  key={key}
                  className="bg-black w-full px-12 py-4 text-left flex "
                >
                  <td className=" w-full max-w-[180px] ">{e.department}</td>
                  <td className=" w-full max-w-[180px] ml-12">{e.category}</td>
                  <td className=" w-full max-w-[180px] ml-12 ">
                    {e.lastUpdate}
                  </td>
                  <td className=" w-full max-w-[180px] ml-12 ">{e.status}</td>
                  <td className=" w-full max-w-[180px] ml-12 ">{e.position}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
