import React from "react";

const EmployeeCard = ({ employee }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
    <p><strong>ID:</strong> {employee.id}</p>
    <p><strong>First Name:</strong> {employee.firstName}</p>
    <p><strong>Last Name:</strong> {employee.lastName}</p>
    <p><strong>Gender:</strong> {employee.gender}</p>
    <p><strong>Birth Date:</strong> {employee.birthDate}</p>
    <p><strong>Hire Date:</strong> {employee.hireDate}</p>
  </div>
);

export default EmployeeCard;