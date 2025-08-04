import React, { useState, useEffect } from "react";

const StudentForm = ({ addStudent, updateStudent, editingStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    email: "",
    attendance: "",
    phone: ""
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    } else {
      setStudent({
        name: "",
        rollNo: "",
        email: "",
        attendance: "",
        phone: ""
      });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.rollNo || !student.email || !student.attendance || !student.phone) {
      alert("Please fill in all fields.");
      return;
    }

    editingStudent ? updateStudent(student) : addStudent({ ...student, id: Date.now() });

    setStudent({
      name: "",
      rollNo: "",
      email: "",
      attendance: "",
      phone: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} />
      <input type="text" name="rollNo" placeholder="Roll No" value={student.rollNo} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={student.email} onChange={handleChange} />
      <input type="number" name="attendance" placeholder="Attendance %" value={student.attendance} onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Phone No" value={student.phone} onChange={handleChange} />
      <button type="submit">{editingStudent ? "Update" : "Add"} Student</button>
    </form>
  );
};

export default StudentForm;
