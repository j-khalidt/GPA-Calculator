import React from "react";
import { useState } from "react";
import "./form.css";
const Subject = (n) => {
  let [credit, setCredit] = useState([]);
  let [grade, setGrade] = useState([]);
  const options = [
    {
      label: "Select",
      value: ""
    },
    {
      label: "A",
      value: "4"
    },
    {
      label: "A-",
      value: "3.7"
    },
    {
      label: "B+",
      value: "3.3"
    },
    {
      label: "B",
      value: "3"
    },
    {
      label: "B-",
      value: "2.7"
    },
    {
      label: "C+",
      value: "2.3"
    },
    {
      label: "C",
      value: "2"
    },
    {
      label: "C-",
      value: "1.7"
    },
    {
      label: "D+",
      value: "1.3"
    },
    {
      label: "D",
      value: "1"
    },
    {
      label: "F",
      value: "0"
    }
  ];
  const credits = [
    {
      label: "Select",
      value: ""
    },
    {
      label: "3",
      value: "3"
    },
    {
      label: "2",
      value: "2"
    },
    {
      label: "1",
      value: "1"
    }
  ];
  function handleClick(e) {
    setGrade((grade) => [...grade, e.target.value]);
  }
  function handleCredit(e) {
    setCredit((credit) => [...credit, e.target.value]);
  }
  let finalGPA = 0;
  const handleSubmit = () => {
    //return credit * grade;
    let here = [0];
    let creditHours = 0;
    for (let i = 0; i <= credit.length - 1; i++) {
      creditHours = Number(creditHours) + Number(credit[i]);
      for (let j = 0; j <= grade.length - 1; j++) {
        if (i === j) {
          here[i] = credit[i] * grade[j];
          console.log(`${credit[i]} and ${grade[j]}`);
        }
      }
    }
    const sum = here.reduce((acc, curr) => acc + curr);
    finalGPA = (sum / creditHours).toFixed(2);

    return finalGPA;
  };
  console.log(`This is grade ${grade}`);
  console.log(credit);
  return (
    <div>
      <form className="select">
        <p className="grade">Grade</p>
        <p className="credit">Credit.H</p>
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>

        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <br />
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <br />
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <br />
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <br />
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <br />
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <br />
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <br />
        <select onChange={handleClick}>
          {options.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <select onChange={handleCredit}>
          {credits.map((val, ind) => (
            <option value={val.value}>{val.label}</option>
          ))}
        </select>
        <a onChange={handleSubmit()} />
      </form>
      <h3>{`YOUR GPA IS : ${isNaN(finalGPA) ? "Zero" : finalGPA}`}</h3>
    </div>
  );
};
export default Subject;
