import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

import Input from "./Input";

function Form() {
  const defaultState = {
    name: "",
    email: "",
    password: "",
    position: "",
    terms: false,
  };

  //formState for inputs etc.
  const [formState, setFormState] = useState(defaultState);
  //errorsState for validation
  const [errors, setErrors] = useState({ ...defaultState, terms: "" });
  //buttonDisabledState for button enableing after validation
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //2a.4 Display Data
  const [users, setUsers] = useState([]);

  

  const inputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
    validateChange(e);
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .email("Must be a valid email address.")
      .required("Must include an email address."),
    email: Yup.string()
      .email("Must be a valid email address.")
      .required("Must include an email address."),
    password: Yup.string()
      // .password("Must be a valid password.")
      .min(6, "Must be a minimum of 6 characters.")
      .max(10, "Must be a maximum of 10 characters.")
      .required("Must include a password."),
    terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
  });

  const validateChange = (e) => {
    e.persist();
    if (e.target.value.length === 0) {
      setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} field is required`,
      });
    }
  };

  useEffect(() => {
    // formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
    if (formState.terms) {
      setButtonDisabled(!formState.terms);
    }
  }, [formState]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(() => console.log("form submitted success"))
      // .then(() => setUsers(formState))
      .catch((err) => console.log(err));
  };

  console.log(users)
  return (
    <div className="form">
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name:&#160;
          <Input
            // id="name"
            type="text"
            name="name"
            onChange={inputChange}
            value={formState.name}
            // label="Name"
            placeholder="Jane Doe"
            errors={errors}
          />
        </label>

        <label htmlFor="email">
          Email:&#160;
          <Input
            // id="email"
            type="email"
            name="email"
            onChange={inputChange}
            value={formState.email}
            // label="Email"
            placeholder="jane.doe@gmail.com"
            errors={errors}
          />
        </label>

        <label htmlFor="password">
          Password:&#160;
          <Input
            // id="password"
            type="password"
            name="password"
            onChange={inputChange}
            value={formState.password}
            // label="Password"
            placeholder="jDPwrD345*"
            errors={errors}
          />
        </label>

        <label htmlFor="position">
          Position:&#160;
          <select
            name="position"
            onChange={inputChange}
            value={formState.position}
          >
            <option value="null">Select</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Section Lead">Section Lead</option>
            <option value="Career Coach">Career Coach</option>
            <option value="CEO">CEO</option>
          </select>
        </label>

        <label htmlFor="terms">
          Terms of Service:&#160;
          <Input
            // id="checkbox"
            name="terms"
            type="checkbox"
            onChange={inputChange}
            // label="checkbox"
            errors={errors}
          />
        </label>

        <br />

        <button onChange={setButtonDisabled}>Submit</button>
      </form>
    </div>
  );
}
export default Form;
