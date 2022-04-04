import React from "react";
import { useState } from "react";

const Task3 = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState();

  const yearOptions = () => {
    const arr = [];

    const startYear = 1900;
    const endYear = new Date().getFullYear();

    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };
  const dayOptions = () => {
    const arr = [];
    var endDay = 0;

    const startDay = 1;
    if (month == "February") {
      endDay = 29;
    } else {
      endDay = 31;
    }

    for (let i = endDay; i >= startDay; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };
  const monthOptions = () => {
    const arr = [
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
    ];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.push(<option value={arr[i]}>{arr[i]}</option>);
    }
    return arr2;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getStock();
    setTimeout(setData(res), 5000);
  };
  const getStock = async () => {
    console.log(day, month, year);
    if (day != null) {
      try {
        const response = await fetch(
          `https://jsonmock.hackerrank.com/api/stocks?date=${day}-${month}-${year}`
        );
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <h1>TASK 3</h1>
      <form onSubmit={handleSubmit}>
        <select name="day" onChange={(e) => setDay(e.target.value)} value={day}>
          <option value="0">Day</option>
          {dayOptions()}
        </select>
        <select
          name="month"
          onChange={(e) => setMonth(e.target.value)}
          value={month}
        >
          <option value="0">Month</option>
          {monthOptions()}
        </select>
        <select
          name="year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        >
          <option value="0">Year</option>
          {yearOptions()}
        </select>
        <input type="submit" value="Search" />
      </form>
      <h2>Output</h2>
      {data ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              Open: {item.open}
              <br/>
              High:{item.high}
              <br/>
              Low:{item.low}
              <br/>
              Close:{item.close}
            </div>
          );
        })
      ) : (
        <div></div>
      )}
      {/* {console.log(data)} */}
    </div>
  );
};

export default Task3;
