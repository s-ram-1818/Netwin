import React, { useState, useEffect } from "react";
import "./App.css";

const FormWithTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dummyjson.com/c/53bb-0457-43f3-b219",
      );
      const data = await response.json();
      console.log(data);

      setRecords(data);
    };

    fetchData();
  }, []);

  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedRecords = [...records];
      updatedRecords[editIndex] = formData;
      setRecords(updatedRecords);
      setEditIndex(null);
    } else {
      setRecords([...records, formData]);
    }

    setFormData({ name: "", email: "", gender: "" });
  };

  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filteredRecords = records.filter((_, i) => i !== index);
    setRecords(filteredRecords);
  };

  return (
    <div style={{ padding: "20px" }} className="container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />{" "}
          Female
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="4">No Data</td>
            </tr>
          ) : (
            records.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "5px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FormWithTable;
