import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h1>Danh Sách Sinh Viên</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '500px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Họ và Tên</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => (
            <tr key={st.id}>
              <td>{st.id}</td>
              <td>{st.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
