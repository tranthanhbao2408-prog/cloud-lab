import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [students, setStudents] = useState([
    { mssv: 'SV001', name: 'Nguyễn Văn A' },
    { mssv: 'SV002', name: 'Trần Thị B' }
  ]);

  const [mssv, setMssv] = useState('');
  const [name, setName] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!mssv || !name) return;
    setStudents([...students, { mssv, name }]);
    setMssv('');
    setName('');
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Quản Lý Danh Sách Sinh Viên</h2>
      
      {/* Form nhập dữ liệu */}
      <form onSubmit={handleAddStudent} style={{ marginBottom: '20px', background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>MSSV:</label>
          <input 
            type="text" 
            value={mssv} 
            onChange={(e) => setMssv(e.target.value)} 
            placeholder="Nhập mã sinh viên..." 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Họ Tên:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Nhập họ tên sinh viên..." 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ background: '#007bff', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', borderRadius: '3px' }}>
          Thêm Sinh Viên
        </button>
      </form>

      {/* Danh sách hiển thị */}
      <h3>Danh Sách Hiện Tại:</h3>
      <ul>
        {students.map((stu, index) => (
          <li key={index} style={{ fontSize: '16px', margin: '5px 0' }}>
            <b>{stu.mssv}</b> - {stu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
