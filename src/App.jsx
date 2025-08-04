import React, { useState } from "react";
import StudentForm from "./components/studentform";
import StudentList from "./components/studentlist";
import "./index.css"; // Make sure to import your CSS

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (updatedStudent) => {
    const updatedList = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    setStudents(updatedList);
    setEditingStudent(null);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="container">
      <h1>🎓 Student Management System</h1>
      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingStudent={editingStudent}
      />
      <StudentList
        students={students}
        onEdit={editStudent}
        onDelete={deleteStudent}
      />
    </div>
  );
};

export default App;
