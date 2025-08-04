// components/StudentSearch.js
import React, { useState } from 'react';

function StudentSearch({ onSearch }) {
  const [rollNo, setRollNo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (rollNo.trim() !== '') {
      onSearch(rollNo.trim());
    }
  };

  return (
    <form onSubmit={handleSearch} className="my-4">
      <h2>🔎 Search Student by Roll No.</h2>
      <input
        type="text"
        placeholder="Enter Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default StudentSearch;
