import { useState } from "react";
import employees from "./employees.json";

export function EmployeesIndex() {
  // creating a useState for the days filter
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="container mt-4">
      {/* title */}
      <h2 className="mb-4">Employee Work Schedule Organizer</h2>

      {/* filter box */}
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
          {/* options in the filter box */}
          <option value="">No Filter</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </div>
      {/* printing the employees onto the page */}
      {employees
        // filtering by what was chosen in the filter box
        .filter((employee) => sortOption === "" || employee.workdays.includes(sortOption))
        // sorting by alphabetical order - last name, and then first name
        .sort((a, b) => {
          const lastNameComparison = a.last_name.localeCompare(b.last_name);
          if (lastNameComparison !== 0) return lastNameComparison;
          return a.first_name.localeCompare(b.first_name);
        })
        // printing the specific employees
        .map((employee) => (
          <div key={employee.id} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                <u>
                  {/* printing first and last name */}
                  {employee.first_name} {employee.last_name}
                </u>
              </h5>
              <p>
                {/* printing email */}
                <strong>Email: </strong>
                {employee.email}
              </p>
              <div>
                {/* printing the workdays in a nice, neat list */}
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
          </div>
        ))}
    </div>
  );
}
