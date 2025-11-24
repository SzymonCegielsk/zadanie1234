import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    miasto: "",
    ulica: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ imie: "", nazwisko: "", miasto: "", ulica: "" });
  };

  return (
    <div className="App">
      <h1>Formularz</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="imie"
          placeholder="Imię"
          value={formData.imie}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nazwisko"
          placeholder="Nazwisko"
          value={formData.nazwisko}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="miasto"
          placeholder="Miasto"
          value={formData.miasto}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="ulica"
          placeholder="Ulica"
          value={formData.ulica}
          onChange={handleChange}
          required
        />
        <button type="submit">Dodaj</button>
      </form>

      {tableData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Miasto</th>
              <th>Ulica</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.imie}</td>
                <td>{row.nazwisko}</td>
                <td>{row.miasto}</td>
                <td>{row.ulica}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
