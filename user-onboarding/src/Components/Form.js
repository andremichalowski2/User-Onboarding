import React, { useState } from "react";
import * as Yup from 'yup';

import Input from './Input';

function Form() {

  const defaultState = {
    name: "",
    email: "",
    password: "",
    position: "",
    terms: false
  };

  //formState for inputs etc.
  const[formState, setFormState] = useState(defaultState);
  //errorsState for validation
  const [errors, setErrors] = useState({ ...defaultState, terms: ""})
  //buttonDisabledState for button enableing after validation


  const inputChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
    validateChange(e);
  }

  const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include an email address."),
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include an email address."),
    password: Yup
      .string()
      // .password("Must be a valid password.")
      .min(6, "Must be a minimum of 6 characters.")
      .max(6, "Must be a maximum of 6 characters.")
      .required("Must include a password."),
    terms: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
  });

  const validateChange = e => {
    e.persist();
    if (e.target.value.length === 0) {
      setErrors({
        ...errors,
        [e.target.name]: `${e.target.name} field is required`
      });
    }
  };

  return (
    <div className="form">
      <form>
        <label htmlFor="name">
          Name:&#160;
          <Input
            id="name"
            type="text"
            onChange={inputChange}
            value={formState.name}
            label="name"
            placeholder="Jane Doe"
          />
        </label>

        <label htmlFor="email">
          Email:&#160;
          <Input
            id="email"
            type="email"
            onChange={inputChange}
            value={formState.email}
            label="email"
            placeholder="jane.doe@gmail.com"
          />
        </label>

        <label htmlFor="password">
          Password:&#160;
          <Input
            id="password"
            type="password"
            onChange={inputChange}
            value={formState.password}
            label="password"
            placeholder="jDPwrD345*"
          />
        </label>

        <label htmlFor="position">
          Position:&#160;
          <select name="position" onChange={inputChange} value={formState.position}>
            <option value="null">Select</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Section Lead">Section Lead</option>
            <option value="Career Coach">Career Coach</option>
            <option value="CEO">CEO</option>
          </select>
        </label>

        <label htmlFor="checkbox">
          Terms of Service:&#160;
          <Input
            id="checkbox"
            type="checkbox"
            onChange={inputChange}
            value={formState.checkbox}
            label="checkbox"
          />
        </label>

        <br />

        <button onChange={null}>Submit</button>

      </form>
    </div>
  );
}
export default Form;
