import React, { useState } from "react";
import { getEmployeeById } from "../services/employeeService";
import EmployeeCard from "./EmployeeCard";

const EmployeeById = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!employeeId) {
      setError("Please enter an employee ID");
      setEmployee(null);
      return;
    }

    try {
      const data = await getEmployeeById(employeeId);
      setEmployee(data);
      setError("");
    } catch (err) {
      setEmployee(null);
      setError(err.response?.status === 404 ? "Employee not found" : "Error fetching employee");
    }
  };

  return (
    <div>
        <h2>Search Employee by ID</h2>
        <input 
            value={employeeId} 
            onChange={e => setEmployeeId(e.target.value)}
            placeholder="Enter Employee ID"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      
      <button 
        onClick={handleFetch}>Fetch Employee</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {employee && <EmployeeCard employee={employee} />}
    </div>
  );
};

export default EmployeeById;