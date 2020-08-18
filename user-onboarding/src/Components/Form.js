import React from "react";

function Form() {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            type="text"
            onChange={null}
            value={null}
            label="name"
            placeholder="Jane Doe"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            onChange={null}
            value={null}
            label="email"
            placeholder="jane.doe@gmail.com"
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            onChange={null}
            value={null}
            label="password"
            placeholder="jDPwrD345*"
          />
        </label>

        <label htmlFor="position">
          Position:
          <select name="position" onChange={null}>
            <option value="null">Select</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Section Lead">Section Lead</option>
            <option value="Career Coach">Career Coach</option>
            <option value="CEO">CEO</option>
          </select>
        </label>

        <label htmlFor="checkbox">
          Terms of Service:
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

        {/* //  - [ ] Name
      //  - [ ] Email
      //  - [ ] Password
      //  - [ ] Terms of Service (checkbox)
      //  - [ ] A Submit button to send our form data to the server. */}
      </form>
    </div>
  );
}
export default Form;
