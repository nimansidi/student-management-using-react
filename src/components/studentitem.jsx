// components/StudentItem.js
import React from 'react';

function StudentItem({ student, onDelete }) {
  const handleDelete = () => {
    if (window.confirm(`Are you sure to delete ${student.name}?`)) {
      onDelete(student.roll_no);
    }
  };

  return (
    <div className="student-item border p-3 my-2">
      <h3>{student.name} ({student.roll_no})</h3>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Contact:</strong> {student.contact}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <button onClick={handleDelete} className="text-red-600 mt-2">🗑 Delete</button>
    </div>
  );
}

export default StudentItem;
