import React, { useState } from "react";
import { getEmployeesByFirstName } from "../services/employeeService";
import EmployeeCard from "./EmployeeCard";

const EmployeeByFirstName = () => {
  const [firstName, setFirstName] = useState("");
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!firstName) {
      setError("Please enter a first name");
      setEmployees([]);
      setSelectedEmployee(null);
      return;
    }

    try {
      const data = await getEmployeesByFirstName(firstName);
      setEmployees(data);
      setSelectedEmployee(null);
      setError("");
    } catch (err) {
      console.error(err);
      setEmployees([]);
      setSelectedEmployee(null);
      setError("Employees not found");
    }
  };

  const handleClickName = (employee) => {
    setSelectedEmployee(employee);
    setEmployees([]);
  }

  const handleBackToList = () => {
    setSelectedEmployee(null);
    handleFetch(); // reload the employee list
  };

  return (
    <div>
      <h2>Search Employees by First Name</h2>
      <input
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleFetch}>Fetch Employees</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {/* {employees.map(emp => (
        <div key={emp.id}>
          <p>{emp.firstName} {emp.lastName}</p>
        </div>
      ))} */}

      {/* If no employee is selected, show the list */}
      {!selectedEmployee && employees.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {employees.map((emp) => (
            <p
              key={emp.id}
              onClick={() => handleClickName(emp)}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
                marginBottom: "8px"
              }}
            >
              {emp.firstName} {emp.lastName}
            </p>
          ))}
        </div>
      )}

{/*  {employees.length > 0 ? (
        <div style={{ marginTop: "20px" }}>
          {employees.map((emp) => (
            <p
              key={emp.id}
              onClick={() => handleClickName(emp)}
              style={{ cursor: "pointer", textDecoration: "underline", color: "blue" }}>
              {emp.firstName} {emp.lastName}
            </p>
          ))}
        </div>
      ) : (
        firstName && <p>No employees found</p>
      )} */}

      {/* Show selected employee details */}
      {selectedEmployee && (
        <div style={{ marginTop: "20px" }}>
          <h3>Employee Details</h3>
          <EmployeeCard employee={selectedEmployee} />
          <button
            onClick={handleBackToList}
            style={{ marginTop: "10px", padding: "8px 16px" }}
            >
            Back to List
          </button>
        </div>
      )}

    </div>
  );
};

export default EmployeeByFirstName;
