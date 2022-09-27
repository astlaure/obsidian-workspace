import React from 'react';
import Card from '../shared/Card';

function Login() {
  return (
    <div className="row justify-center">
      <div className="column size-6">
        <Card>
          <form action="#">
            <label htmlFor="username">
              Username
              <input type="text" name="username" id="username"/>
            </label>
            <label htmlFor="password">
              Password
              <input type="password" name="password" id="password"/>
            </label>
            <button type="submit">log in</button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
