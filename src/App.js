// import './App.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Define API base URL first
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     axios
//       .get(`${API_BASE_URL}/employees/ping`) // use backticks for template literals
//       .then((response) => setMessage(response.data))
//       .catch((error) => console.error("Error fetching API: ", error));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <p>
//         I'm Ravi Teja. This is my first react app. I'm trying to call spring boot APIs
//         from this react app and trying to display some data on this webpage.
//       </p>
//       <p>API Response: Ping Endpoint - {message}</p>

//       {/* Render EmployeeById component */}
//       <EmployeeById />
//     </div>
//   );
// }

// const EmployeeById = () => {
//   const [employeeId, setEmployeeId] = useState("");
//   const [employee, setEmployee] = useState(null);
//   const [error, setError] = useState("");

//   const handleFetch = async () => {
//     if (!employeeId) {
//       setError("Please enter an employee ID");
//       setEmployee(null);
//       return;
//     }

//     try {
//       const response = await axios.get(`${API_BASE_URL}/employees/${employeeId}`);
//       setEmployee(response.data);
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setEmployee(null);
//       if (err.response && err.response.status === 404) {
//         setError("Employee not found");
//       } else {
//         setError("Error fetching employee");
//       }
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2>Search Employee by ID</h2>

//       <input
//         type="number"
//         placeholder="Enter Employee ID"
//         value={employeeId}
//         onChange={(e) => setEmployeeId(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleFetch} style={{ padding: "8px 16px" }}>
//         Fetch Employee
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {employee && (
//         <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
//           <p><strong>ID:</strong> {employee.id}</p>
//           <p><strong>First Name:</strong> {employee.firstName}</p>
//           <p><strong>Last Name:</strong> {employee.lastName}</p>
//           <p><strong>Gender:</strong> {employee.gender}</p>
//           <p><strong>Birth Date:</strong> {employee.birthDate}</p>
//           <p><strong>Hire Date:</strong> {employee.hireDate}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const EmployeeByFirstName = () => {
//   const [firstName, setFirstName] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState("");

//   const handleFetch = async () => {
//     if (!firstName) {
//       setError("Please enter a first name");
//       setEmployees([]);
//       return;
//     }

//     try {
//       const response = await axios.get(`${API_BASE_URL}/employees/firstname/${firstName}`);
//       setEmployees(response.data); // response is expected to be an array
//       setError("");
//     } catch (err) {
//       console.error(err);
//       setEmployees([]);
//       setError("Error fetching employees");
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", marginTop: "30px" }}>
//       <h2>Search Employees by First Name</h2>

//       <input
//         type="text"
//         placeholder="Enter First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleFetch} style={{ padding: "8px 16px" }}>
//         Fetch Employees
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {employees.length > 0 ? (
//         <div style={{ marginTop: "20px" }}>
//           {employees.map((emp) => (
//             <div key={emp.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
//               <p><strong>ID:</strong> {emp.id}</p>
//               <p><strong>First Name:</strong> {emp.firstName}</p>
//               <p><strong>Last Name:</strong> {emp.lastName}</p>
//               <p><strong>Gender:</strong> {emp.gender}</p>
//               <p><strong>Birth Date:</strong> {emp.birthDate}</p>
//               <p><strong>Hire Date:</strong> {emp.hireDate}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         firstName && <p>No employees found</p>
//       )}
//     </div>
//   );
// };

// export default App;


import React from "react";
import EmployeeById from "./components/EmployeeById";
import EmployeeByFirstName from "./components/EmployeeByFirstName";

function App() {
  return (
    <div className="App">
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>RGRT Employee Portal</h2>
      </div>
      
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <EmployeeById />
      </div>
      <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <EmployeeByFirstName />
      </div>
    </div>
  );
}

export default App;
