import React from "react";

function LogIn() {
  return (
    <div className="login">
      <form class="form" action="dashboard.html">
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" name="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
    </div>
  );
}

export default LogIn;
