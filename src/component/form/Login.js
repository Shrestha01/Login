import React, { useState } from "react";
import "../form/Login.css";
import { Table, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
s;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <>
      <h1 className={`primary`}>Login Form</h1>

      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
      <br />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Email ID</td>
              <td>Password</td>
            </tr>
          </thead>
          <tbody>
            {allEntry.map((curElement) => {
              return (
                <>
                  <tr>
                    <td>{curElement.email}</td>
                    <td>{curElement.password}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Login;
