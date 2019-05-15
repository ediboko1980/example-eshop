import React from "react";
import Header from "./Header";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginAccount: "",

    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginAccountChange = this.handleLoginAccountChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  handleLoginAccountChange(event) {
    const account = event.target.value;

    this.setState((state, props) => ({
      loginAccount: account
    }));
  }

  handleLoginSubmit(event) {
    event.preventDefault();

    this.props.onLogin(this.state.loginAccount);
  }

  handleRegisterSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header />
        <h3 className="h3 mb-3 font-weight-normal text-info">Node: {this.props.nodeUrl}</h3>

        <form onSubmit={this.handleLoginSubmit} name="form-login" className="form-signin">
          <h3 className="h3 mb-3 font-weight-normal">Existing account?</h3>
          <label htmlFor="login-account" className="">Type your address</label>
          <input value={this.state.loginAccount} onChange={this.handleLoginAccountChange} id="login-account" name="login-account" className="form-control" placeholder="0x..." autoFocus />

          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
        or
        <form onSubmit={this.handleRegisterSubmit} name="form-register" className="form-signin">
          <h3 className="h3 mb-3 font-weight-normal">New account?</h3>
          <label htmlFor="register-password" className="">Type your password</label>
          <input value="" type="password" onChange="" id="register-password" name="register-password" className="form-control" />

          <button className="btn btn-lg btn-primary btn-block" type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default Auth;