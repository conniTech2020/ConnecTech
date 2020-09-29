import React from "react";

function Registered() {
  return (
    <div>
      <form class="form-style-9">
        <ul>
          <li>
            <input
              type="text"
              name="field1"
              placeholder="Name"
            />
            <input
              type="email"
              name="field2"
              placeholder="Email"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              placeholder="Phone"
            />
            <input
              type="url"
              name="field4"
              placeholder="Website"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              placeholder="Subject"
            />
          </li>
          <li>
            <textarea
              name="field5"
              class="field-style"
              placeholder="Message"
            ></textarea>
          </li>
          <li>
            <input type="submit" value="Send Message" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Registered;
