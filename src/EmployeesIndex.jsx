import employees from "./employees.json";

export function EmployeesIndex() {
  return (
    <div>
      {employees.map((employee) => (
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
