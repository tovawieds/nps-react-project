import { useState } from "react";
import employees from "./employees.json";

export function EmployeesIndex() {
  const [sortOption, setSortOption] = useState("");

  return (
    <div>
      Filter by Day:
      <select value={sortOption} onChange={(event) => setSortOption(event.target.value)}>
        <option value="">No Filter</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
      </select>
      {employees
        .filter((employee) => sortOption === "" || employee.workdays.includes(sortOption))
        .sort((a, b) => a.last_name.localeCompare(b.last_name))
        .map((employee) => (
          <div key={employee.id}>
            <h3>
              <u>
                {employee.first_name} {employee.last_name}
              </u>
            </h3>
            <p>
              <strong>Email: </strong>
              {employee.email}
            </p>
            <div>
              <strong>Workdays:</strong>
              <ul style={{ listStyle: "circle", paddingLeft: "1.5rem", marginTop: "0.25rem" }}>
                {employee.workdays.map((day, index) => (
                  <li key={index} style={{ marginBottom: "4px" }}>
                    {day}
                  </li>
                ))}
              </ul>
            </div>
            {/* <ul>
              Workdays:
              {employee.workdays.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul> */}
            {/* <p>Workdays: {employee.workdays.join(", ")}</p> */}
          </div>
        ))}
    </div>
  );
}
