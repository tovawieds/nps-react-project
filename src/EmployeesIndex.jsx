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
        .map((employee) => (
          <div key={employee.id}>
            <h3>
              {employee.first_name} {employee.last_name}
            </h3>
            <p>{employee.email}</p>
            <ul>
              {employee.workdays.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
