import React from "react";

function SingUp() {
  return (
    <div className="singup">
      <form class="form" action="create-profile.html">
        <div class="form-group">
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email Address" name="email" />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
    </div>
  );
}

export default SingUp;
