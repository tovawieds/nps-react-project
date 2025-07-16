import { useState } from "react";
import employees from "./employees.json";

export function EmployeesIndex() {
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employee Work Schedule Organizer</h2>

      <div className="d-flex align-items-center mb-3">
        <label htmlFor="dayFilter" className="form-label fs-5 me-2 mb-0" style={{ whiteSpace: "nowrap" }}>
          Filter by Day:
        </label>
        <select
          id="dayFilter"
          className="form-select w-auto"
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="">No Filter</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </div>
      {employees
        .filter((employee) => sortOption === "" || employee.workdays.includes(sortOption))
        .sort((a, b) => a.last_name.localeCompare(b.last_name))
        .map((employee) => (
          <div key={employee.id} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                <u>
                  {employee.first_name} {employee.last_name}
                </u>
              </h5>
              <p>
                <strong>Email: </strong>
                {employee.email}
              </p>
              <div>
                <strong>Workdays:</strong>
                <ul className="ms-3 mt-2" style={{ listStyle: "circle", paddingLeft: "1.5rem", marginTop: "0.25rem" }}>
                  {employee.workdays.map((day, index) => (
                    <li key={index} className="mb-1" style={{ marginBottom: "4px" }}>
                      {day}
                    </li>
                  ))}
                </ul>
              </div>
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
