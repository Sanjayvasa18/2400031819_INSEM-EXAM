import React, { useState } from "react";

function AttendanceTracker() {
  // Step 1: Create a list of students
  const students = ["Alice", "Bob", "Charlie", "David", "Eva"];

  // Step 2: Create state to track attendance
  const [attendance, setAttendance] = useState(
    students.reduce((acc, name) => ({ ...acc, [name]: false }), {})
  );

  // Step 3: Handle checkbox toggle
  const handleCheckboxChange = (name) => {
    setAttendance((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Step 4: Count students marked present
  const presentCount = Object.values(attendance).filter(Boolean).length;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Attendance Tracker</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li key={student}>
            <label>
              <input
                type="checkbox"
                checked={attendance[student]}
                onChange={() => handleCheckboxChange(student)}
              />
              {student}
            </label>
          </li>
        ))}
      </ul>
      <h3>Total Present: {presentCount}</h3>
    </div>
  );
}

export default AttendanceTracker;
