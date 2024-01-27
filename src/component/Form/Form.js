import React, { useState } from "react";
import "./Form.css";

const FormPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("Select Position");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || position === "Select Position") {
      alert("All fields are required.");
      return;
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      position,
    };

    try {
      const response = await fetch("http://localhost:4000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Form submitted successfully:", data);

        setFirstName("");
        setLastName("");
        setPosition("Select Position");
      } else {
        alert("Failed to submit form:", response.statusText);
      }
    } catch (error) {}

    alert("Form submitted with:", { firstName, lastName, position });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-start">Form Page</h2>
              <form onSubmit={handleFormSubmit} className="text-start">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">
                    Position
                  </label>
                  <select
                    className="form-select"
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  >
                    <option value="Select Position">Select Position</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
