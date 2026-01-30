import React, { useState } from "react";

const CrudExample = () => {
  const [users, setUser] = useState([
    { id: 1, name: "Chanchalkumar", age: 22, gender: "male" },
    { id: 2, name: "Pranjal", age: 21, gender: "female" },
    { id: 3, name: "Ram", age: 22, gender: "male" },
    { id: 4, name: "Divya", age: 21, gender: "female" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [editId, setEditId] = useState("");
  let [id, setId] = useState(5);

  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
  };

  const handleDelete = (id) => {
    setUser(users.filter((user) => user.id !== id));
  };

  function handleSubmit() {
    if (editId === null) {
      setUser(...users, { id: id, name: name, age: age, gender: gender });
      setId(id++);
    }
  }

  return (
    <div className="container">
      <form action="">
        Name :{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Age:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        Gender :{" "}
        <input
          type="radio"
          name="gen"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          name="gen"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <button onClick={handleSubmit()}>
          {" "}
          {editId === null ? "ADD User" : "Update User"}{" "}
        </button>
      </form>
      <table className="table table-active table-primary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudExample;
