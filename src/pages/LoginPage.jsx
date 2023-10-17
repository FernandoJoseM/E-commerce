import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/slices/credentials";
const LoginPage = () => {
  const { loginUser } = useAuth();
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const lastName = localStorage.getItem("lastname");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const obj = { token, username, lastName, email, phone };
    dispatch(setCredentials(obj));
  }, []);

  return (
    <div className="log">
      <form onSubmit={handleSubmit(submit)}>
        <legend>Welcome! Enter your email and password to continue</legend>

        <h2>credentials</h2>
        <p>user:pepe12@gmail.com</p>
        <p>password:pepe123</p>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" />
        </div>
        <button>Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
