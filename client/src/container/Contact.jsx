import React from "react";

function Contact() {
  return (
    <div className="contact-us">
      <form action="action_page.php">
        <div>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Your full-name.."
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tomswalla@gmail.com"
          />
        </div>
        <div>
          <input
            type="Phone"
            id="Phone"
            name="Phone"
            placeholder="052-123-4567"
          />
        </div>
        {/* <label for="country">Country</label>
        <div>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div> */}

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Contact;
