import dynamic from "next/dynamic";

import { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
const data: { [key: string]: string | number }[] = [
  {
    timeStamp: "35 minutes ago ",
    purchaseId: 2235678,
    mail: "upadhyay9122@gmail.com",
    name: "Ashwani",
    source: "",
    status: "failed",
  },
  {
    timeStamp: "5 hours ago ",
    purchaseId: 2356789,
    mail: "rohan22@gmail.com",
    name: "Rohan",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "57 minutes ago ",
    purchaseId: 7865985,
    mail: "vishwajeet34@gmail.com",
    name: "Vishwajeet Raj",
    source: "",
    status: "waiting",
  },
  {
    timeStamp: "2 hours ago ",
    purchaseId: 5678453,
    mail: "shrija@gmail.com",
    name: "Shrija Sinha",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "1 hours ago ",
    purchaseId: 6578903,
    mail: "vishant@gmail.com",
    name: "Vishant",
    source: "",
    status: "failed",
  },
  {
    timeStamp: "2 minutes  ago ",
    purchaseId: 2235678,
    mail: "alok25@gmail.com",
    name: "Alok k",
    source: "",
    status: "waiting",
  },
  {
    timeStamp: "24 minutes ago ",
    purchaseId: 4567342,
    mail: "supriya@gmail.com",
    name: "Supriya ",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "35 minutes ago ",
    purchaseId: 2235678,
    mail: "upadhyay9122@gmail.com",
    name: "Shwani",
    source: "",
    status: "failed",
  },
  {
    timeStamp: "5 hours ago ",
    purchaseId: 2356789,
    mail: "rohan22@gmail.com",
    name: "Roan",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "57 minutes ago ",
    purchaseId: 7865985,
    mail: "vishwajeet34@gmail.com",
    name: " Raj",
    source: "",
    status: "waiting",
  },
  {
    timeStamp: "8 hours ago ",
    purchaseId: 5678453,
    mail: "shrija@gmail.com",
    name: " Sinha",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "9 hours ago ",
    purchaseId: 6578903,
    mail: "vishant@gmail.com",
    name: "Shant",
    source: "",
    status: "failed",
  },
  {
    timeStamp: "2 minutes  ago ",
    purchaseId: 2235678,
    mail: "alok25@gmail.com",
    name: "Lokk",
    source: "",
    status: "waiting",
  },
  {
    timeStamp: "48 minutes ago ",
    purchaseId: 4567342,
    mail: "priya@gmail.com",
    name: "Priya ",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "35 minutes ago ",
    purchaseId: 2235678,
    mail: "upadhyay9122@gmail.com",
    name: "Ani",
    source: "",
    status: "failed",
  },
  {
    timeStamp: "2 weeks ago ",
    purchaseId: 2356789,
    mail: "rohan22@gmail.com",
    name: "Anshul",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "57 minutes ago ",
    purchaseId: 7865985,
    mail: "vishwajeet34@gmail.com",
    name: "Vishwajeet Raj",
    source: "",
    status: "waiting",
  },
  {
    timeStamp: "2 hours ago ",
    purchaseId: 5678453,
    mail: "shrija@gmail.com",
    name: "Shrija Sinha",
    source: "",
    status: "passed",
  },
  {
    timeStamp: "1 hours ago ",
    purchaseId: 6578903,
    mail: "vishant@gmail.com",
    name: "Vishant",
    source: "",
    status: "failed",
  },
  {
    timeStamp: "2 minutes  ago ",
    purchaseId: 2235678,
    mail: "alok25@gmail.com",
    name: "Alok",
    source: "",
    status: "waiting",
  },
  {
    timeStamp: "24 minutes ago ",
    purchaseId: 4567342,
    mail: "supriya@gmail.com",
    name: "Aabhi",
    source: "",
    status: "passed",
  },
];
function Home() {
  const [index, setIndex] = useState(5);
  const [item, setItem] = useState(data);
  const [store, setStore] = useState(data.slice(0, index));
  const [value, setValue] = useState("");
  const [sortName, setSortName] = useState(false);
  const [sortStatus, setSortStatus] = useState(false);
  const [sortTime, setSortTime] = useState(false);
  const [col, setCol] = useState("");

  function handleSearch(e: any) {
    setValue(e.target.value);

    const st = item.filter((element) => {
      if (typeof element.name === "number") {
        return;
      }
      return (
        element.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setStore(st);
  }
  function handleSortName() {
    if (sortName === false) {
      setCol("NAME");
      const newArr = JSON.parse(JSON.stringify(store));

      newArr.sort((a: any, b: any) =>
        a.name.toLowerCase().localeCompare(b.name.toUpperCase())
      );

      setStore(newArr);
      setSortName(true);
    } else {
      setStore(data.slice(index - 5, index));
      setSortName(false);
    }
  }
  function handleSortStatus() {
    if (sortStatus == false) {
      setCol("STATUS");
      const newArr = JSON.parse(JSON.stringify(store));
      newArr.sort(function (x: any, y: any) {
        var n1 = x.status;
        var n2 = y.status;
        return n1 == n2 ? 0 : n1 < n2 ? -1 : 1;
      });
      setStore(newArr);
      setSortStatus(true);
    } else {
      setStore(data.slice(index - 5, index));
      setSortStatus(false);
    }
  }
  function handleSortTime() {
    if (sortTime == false) {
      setCol("TIME");
      const timeAgoToMilliseconds: { [key: string]: number } = {
        minutes: 1000 * 60,
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
      };
      const newArr = JSON.parse(JSON.stringify(store));
      newArr.sort((a: any, b: any) => {
        const timeA = a.timeStamp.split(" ");
        const timeB = b.timeStamp.split(" ");
        const unitA = timeA[1].trim() as string;
        const unitB = timeB[1].trim() as string;
        const valueA = parseInt(timeA[0], 10);
        const valueB = parseInt(timeB[0], 10);

        const timeInMillisecondsA = timeAgoToMilliseconds[unitA] * valueA;
        const timeInMillisecondsB = timeAgoToMilliseconds[unitB] * valueB;

        return timeInMillisecondsA - timeInMillisecondsB;
      });
      setStore(newArr);
      setSortTime(true);
    } else {
      setStore(data.slice(index - 5, index));
      setSortTime(false);
    }
  }
  function handlePrev() {
    setSortTime(false);
    setSortStatus(false);
    setSortName(false);
    setStore(data.slice(index - 10, index - 5));
    setIndex(index - 5);
  }
  function handleNext() {
    setSortTime(false);
    setSortStatus(false);
    setSortName(false);
    setStore(data.slice(index, index + 5));
    setIndex(index + 5);
  }

  return (
    <div className="">
      <div className="flex justify-center mx-auto my-4">
        <div className="w-4/6 mx-auto">
          <input
            onChange={handleSearch}
            value={value}
            className="flex justify-center px-3 py-2 leading-tight text-gray-700 transition duration-300 ease-in-out delay-150 border rounded shadow appearance-none hover:-translate-y-1 hover:scale-110 w- focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex">
        <table className="w-5/6 mx-auto ">
          <thead className="h-8 text-sm text-left text-slate-600 ">
            <tr className="">
              <th>
                <div
                  onClick={handleSortTime}
                  className="flex hover:cursor-pointer"
                >
                  <div>TIMESTAMP</div>
                  <button className="mx-3 ">
                    {sortTime === true && col === "TIME" ? (
                      <BsFillArrowUpCircleFill />
                    ) : (
                      <BsFillArrowDownCircleFill />
                    )}
                  </button>
                </div>
              </th>
              <th>PURCHASE ID</th>
              <th>MAIL</th>
              <th>
                <div
                  onClick={handleSortName}
                  className="flex hover:cursor-pointer "
                >
                  <div>NAME</div>
                  <button className="mx-3 ">
                    {sortName === true && col === "NAME" ? (
                      <BsFillArrowUpCircleFill />
                    ) : (
                      <BsFillArrowDownCircleFill />
                    )}
                  </button>
                </div>
              </th>
              <th>SOURCE</th>
              <th>
                <div
                  onClick={handleSortStatus}
                  className="flex hover:cursor-pointer "
                >
                  <div>STATUS</div>
                  <button className="mx-3 ">
                    {sortStatus === true && col === "STATUS" ? (
                      <BsFillArrowUpCircleFill />
                    ) : (
                      <BsFillArrowDownCircleFill />
                    )}
                  </button>
                </div>
              </th>
              <th>SELECT</th>
            </tr>
          </thead>
          <tbody>
            {store.map((val, key) => {
              return (
                <tr
                  className="h-16 text-sm font-semibold text-left even:bg-white odd:bg-slate-50 text-slate-600 "
                  key={key}
                >
                  <td>{val.timeStamp}</td>
                  <td>{val.purchaseId}</td>
                  <td>{val.mail}</td>
                  <td>{val.name}</td>
                  <td>{val.source}</td>
                  <td className="">
                    <div
                      className={`   align-middle flex justify-center h-6  text-sm ${
                        val.status === "failed"
                          ? "bg-red-200"
                          : val.status === "waiting"
                          ? "bg-yellow-200"
                          : "bg-green-200"
                      } rounded-2xl w-14 `}
                    >
                      {val.status}
                    </div>
                  </td>
                  <td>
                    <button className="flex px-4 py-2 font-semibold text-gray-800 transition duration-300 ease-in-out delay-150 border border-gray-400 rounded shadow hover:-translate-y-1 hover:scale-110 hover:bg-slate-100">
                      Select
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex ">
        <div className="flex mx-auto ">
          <div>
            <button
              onClick={handlePrev}
              className="px-4 py-2 font-bold text-gray-800 transition duration-300 ease-in-out delay-150 bg-gray-300 rounded-l hover:-translate-y-1 hover:translate-x-1 hover:scale-110 hover:bg-gray-400 "
            >
              prev
            </button>
          </div>
          <div>
            <button
              onClick={handleNext}
              className="px-4 py-2 font-bold text-gray-800 transition duration-300 ease-in-out delay-150 bg-gray-300 rounded-r hover:-translate-y-1 hover:translate-x-1 hover:scale-110 hover:bg-gray-400"
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default dynamic(async () => Promise.resolve(Home), {
  ssr: false,
});
