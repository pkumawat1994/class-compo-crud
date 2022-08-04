import React, { useState } from "react";

const MultipleInputData = () => {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
  });
  const [err, setErr] = useState({
    fnameErr: "",
    lnameErr: "",
    emailErr: "",
    ageErr: "",
  });
  const handleChange = (e) => {
    //  First Type ----------------------------------------->>>>
    console.log(e.target.name);
    console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });

    //   seconsd Type   ------------------------------------------>>>>>>

    // const { name, value } = e.target;
    // setInput({
    //   ...input,
    //   [name]: value,
    // });
  };

  const myFormData = () => {
    if (
      input.fname == "" &&
      input.lname == "" &&
      input.email == "" &&
      input.age == ""
    ) {
      setErr({
        ...err,
        fnameErr: "please fill first name",
        lnameErr: "please fill last name",
        emailErr: "please fill email name",
        ageErr: "please fill above 18 age",
      });

      console.log("err");
    } else if (input.fname == "") {
      console.log("hello");
      setErr({ ...err, fnameErr: "please fill first name" });
    } else if (input.lname == "") {
      console.log("lname");
      setErr((err.fnameErr = ""));
      setErr({ ...err, lnameErr: "please fill last name" });
    } else if (input.email == "") {
      console.log("email");
      setErr((err.lnameErr = ""));
      setErr({ ...err, emailErr: "please fill email name" });
    } else if (input.age == "") {
      console.log("agecall");
      setErr((err.emailErr = ""));
      setErr({ ...err, ageErr: "please fill above 18 age" });
    } else {
      setErr((err.ageErr = ""));
      setInput({ fname: "", lname: "", email: "", age: "" });
      console.log(input);
    }
  };
  console.log(err);
  return (
    <>
      <div style={{ border: "3px solid black" }}>
        <center>
          <h1>
            {input.fname}
            {input.lname}
            {input.email}
            {input.age} My Form
          </h1>
          <input
            type="text"
            value={input.fname}
            name="fname"
            onChange={handleChange}
            placeholder="First Name"
          />
          <h6 style={{ color: "red" }}>{err.fnameErr}</h6>
          <br />

          <input
            name="lname"
            value={input.lname}
            type="text"
            onChange={handleChange}
            placeholder="Last Name"
          />
          <h6 style={{ color: "red" }}>{err.lnameErr}</h6>
          <br />

          <input
            name="email"
            value={input.email}
            type="email"
            onChange={handleChange}
            placeholder="Sample@gmail.com"
          />
          <h6 style={{ color: "red" }}>{err.emailErr}</h6>
          <br />

          <input
            name="age"
            value={input.age}
            type="number"
            onChange={handleChange}
            placeholder="Age"
          />
          <h6 style={{ color: "red" }}>{err.ageErr}</h6>
          <br />

          <button onClick={myFormData}>SUBMIT</button>
        </center>
      </div>
    </>
  );
};

export default MultipleInputData;
