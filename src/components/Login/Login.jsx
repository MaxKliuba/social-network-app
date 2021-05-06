import React from "react";
import { Field, reduxForm } from "redux-form";

function LoginForm(props) {
  return (
    <form onSubmit={props.handelSubmit}>
      <div>
        <Field placeholder={"Login"} component={"input"} name={"login"} />
      </div>
      <div>
        <Field placeholder={"Password"} component={"input"} name={"password"} />
      </div>
      <div>
        <Field type={"checkbox"} component={"input"} name={"rememberMe"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

function Login(props) {
  const onSubmit = (formData) => {

  }

  return (
    <div className="content_box">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
}

export default Login;
