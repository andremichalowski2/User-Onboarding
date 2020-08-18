import React, { useState } from "react";

function Form() {

  const defaultState = {
    name: "",
    email: "",
    password: "",
    position: "",
    terms: false
  };

  const[formState, setFormState] = useState(defaultState);

  const inputChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value
    });
  }

  return (
    <div className="form">
      <form>
        <label htmlFor="name">
          Name:&#160;
          <input
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
          <input
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
          <input
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
          <input
            id="checkbox"
            type="checkbox"
            onChange={null}
            value={null}
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
