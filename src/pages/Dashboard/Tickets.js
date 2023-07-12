import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { baseURL } from "../../constants/Constant";
import axios from "axios";

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
  const [ticketform, setticketform] = useState({
    department: "",
    service: "",
    subject: "",
    message: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setticketform({ ...ticketform, [name]: value });
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setticketform({ ...ticketform, attachment: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };
      try {
        const formData = {
          department: ticketform.department,
          service: ticketform.service,
          subject: ticketform.subject,
          description: ticketform.message,
          status: "Open",
          email: userData?.email,
          raisedby: userData?.userId,
        };

        const response = await axios.post(`${baseURL}/api/tickets`, formData, {
          headers,
        });

        if (response.status === 201) {
          const ticketId = response.data.data.ticketId; // Assuming the response contains the ticket ID

          // Upload the file separately
          const fileFormData = new FormData();
          fileFormData.append("file", ticketform.attachment);
          fileFormData.append("docType", "TICKET_DOC");
          const fileUploadResponse = await fetch(
            baseURL + `/api/upload/${ticketId}`,
            {
              method: "POST",
              body: fileFormData,
            }
          );

          if (fileUploadResponse.ok) {
            toast.success("Ticket and file uploaded successfully");
            // Reset the form fields after successful ticket creation and file upload
            setticketform({
              department: "",
              service: "",
              subject: "",
              message: "",
              attachment: null,
            });
          } else {
            toast.error("Failed to upload file");
          }
        } else {
          toast.error("Failed to create ticket");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please sign in again");
    }
  };

  return (
    <div className="max-w-5xl w-full mx-auto ">
      <h1 className="text-5xl font-semibold my-10">Tickets</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl w-full mx-auto"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-2 mb-4 gap-4">
          <div>
            <p className="mb-2">Choose Department</p>
            <select
              name="department"
              onChange={handleChange}
              className="px-2 py-2 rounded-lg bg-black w-full"
              value={ticketform.department}
            >
              <option value="">Select Department</option>
              <option value="Admin support">Admin Support</option>
              <option value="Technical Support">Technical Support</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Choose Related Service</p>
            <select
              name="service"
              onChange={handleChange}
              className="px-2 py-2 rounded-lg bg-black w-full"
              value={ticketform.service}
            >
              <option value="">Select Service</option>
              <option value="Package Activation">Package Activation</option>
              <option value="Downline Activation">Downline Activation</option>
              <option value="Authentication">Authentication</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <p className="mb-2">Subject</p>
          <input
            name="subject"
            onChange={handleChange}
            className="px-2 py-2 rounded-lg bg-black w-full"
            value={ticketform.subject}
          />
        </div>

        <div>
          <p className="mb-2">Message</p>
          <textarea
            name="message"
            onChange={handleChange}
            className="px-2 py-2 rounded-lg bg-black w-full min-h-[150px]"
            value={ticketform.message}
          />
        </div>

        <div className="mt-4 mb-4">
          <p className="mb-2">Attachment (optional)</p>
          <input
            type="file"
            name="attachment"
            onChange={handleAttachmentChange}
            className="px-2 py-2 rounded-lg bg-black w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full max-w-[250px] font-semibold bg-gradient-to-r text-black from-blue-500 to-fuchsia-700 rounded-full p-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const List = () => {
  // table data
  const [data, setData] = useState([]);
  // ticketListState
  const [totalTickets, setTotalTickets] = useState("780");
  const [openTickets, setOpenTickets] = useState("6250");
  const [closedTickets, setClosedTickets] = useState("17");

  // percentages state
  const [totalTicketsPercent, setTotalTicketsPercent] = useState("12");
  const [openTicketsPercent, setOpenTicketsPercent] = useState("32");
  const [closedTicketsPercent, setClosedTicketsPercent] = useState("17");
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    if (userData && userData.token && userData.email && userData.userId) {
      const headers = {
        Authorization: userData.token,
      };

      axios
        .get(
          `${baseURL}/api/tickets/${userData.userId}?email=${userData.email}`,
          { headers }
        )
        .then((response) => {
          if (response.data) {
            setData(response.data.data);
            calculateTicketPercentages(response.data.data);
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((error) => {
          if (
            error?.response?.data?.message ===
            "Token email does not match request email"
          ) {
            toast.error("Invalid Request");
          } else {
            toast.error("Something went wrong");
          }
        });
    } else {
      toast.error("Please sign in again");
    }
  }, []);

  const calculateTicketPercentages = (tickets) => {
    const total = tickets.length;
    const open = tickets.filter((ticket) => ticket.status === "Open").length;
    const closed = tickets.filter(
      (ticket) => ticket.status === "Closed"
    ).length;

    setTotalTickets(total);
    setOpenTickets(open);
    setClosedTickets(closed);

    const totalPercentage = Math.round((total / tickets.length) * 100);
    const openPercentage = Math.round((open / tickets.length) * 100);
    const closedPercentage = Math.round((closed / tickets.length) * 100);

    setTotalTicketsPercent(totalPercentage);
    setOpenTicketsPercent(openPercentage);
    setClosedTicketsPercent(closedPercentage);
  };
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
            <th className=" w-full max-w-[180px] ">Ticket No</th>
            <th className=" w-full max-w-[180px] ">Department</th>
            <th className=" w-full max-w-[180px] ml-12">Service</th>
            <th className=" w-full max-w-[180px] ml-12 ">Subject</th>
            <th className=" w-full max-w-[180px] ml-12 ">Status</th>
            <th className=" w-full max-w-[180px] ml-12 ">Last Updated Date</th>
          </thead>
          <tbody className="w-full">
            {data.length === 0 ? (
              <div>No entries</div>
            ) : (
              data.map((row, index) => (
                <div
                  key={index}
                  className="bg-black w-full px-12 py-4 justify-between flex"
                >
                  <div className=" w-full max-w-[180px] ml-12 ">{row.id}</div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.department}
                  </div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.service}
                  </div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.subject}
                  </div>

                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.status}
                  </div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.updated_date}
                  </div>
                </div>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
