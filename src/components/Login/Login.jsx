import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

function LoginForm(props) {
  return (
    <form onSubmit={props.handelSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
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
