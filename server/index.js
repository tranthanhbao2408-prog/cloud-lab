const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from Backend Container!" });
});

app.get('/api/students', (req, res) => {
  res.json([{ id: 1, name: "Nguyen Van A" }, { id: 2, name: "Tran Thi B" }]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
