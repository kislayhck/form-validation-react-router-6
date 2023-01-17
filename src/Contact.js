import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validation = () => {
    if (!name || !email || !password) {
      setError("All fields are not filled");
      return false;
    } else if (password.length < 5) {
      setError("Password more than 5");
      return false;
    } else if (!email.includes("@")) {
      setError("Email not in correct form");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    const isValid = validation();
    if (isValid) {
      setFormData({
        name: "",
        email: "",
        password: ""
      });
      navigate("/detail", { replace: true, state: formData });
      console.log(formData, "formData");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 1000);
  }, [error]);

  return (
    <div className="App">
      <p style={{ color: "red" }}>{error}</p>
      <h1>Submit Your Details</h1>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <br />
      <br />
      <input
        placeholder="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <br />
      <br />
      <input
        placeholder="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Contact;
