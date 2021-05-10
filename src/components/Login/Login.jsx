import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import styles from "./Login.module.css";
import errorStyles from "../common/FormsControls/FormsControls.module.css"

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.text_input_box}>
        <Field
          className={styles.text_input}
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={styles.text_input_box}>
        <Field
          className={styles.text_input}
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={styles.checkbox_input_box}>
        <Field id="remember_me_checkbox" type={"checkbox"} name={"rememberMe"} component={"input"} />
        <label for="remember_me_checkbox">remember me</label>
      </div>
      {props.error && <div className={errorStyles.error_message}>{props.error}</div>}
      <div className={styles.submit_button_box}>
        <button className={styles.submit_button}>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

function Login(props) {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className="content_box">
      <div className={styles.login_box}>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
