import axios from "axios";
import { setCredentials } from "../store/slices/credentials";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const loginUser = (data) => {
    axios
      .post(`https://e-commerce-api-v2.academlo.tech/api/v1/users/login`, data)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        const userName = res.data.user.firstName;
        const lastName = res.data.user.lastName;
        const email = res.data.user.email;
        const phone = res.data.user.phone;
        localStorage.setItem("token", token);
        localStorage.setItem("username", userName);
        localStorage.setItem("lastname", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        const obj = { token, userName, lastName, email, phone };
        dispatch(setCredentials(obj));
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        dispatch(setCredentials(null));
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("lastname");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
      });
  };
  const registerUser = (data) => {
    axios
      .post(`https://e-commerce-api-v2.academlo.tech/api/v1/users`, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return { loginUser, registerUser };
};

export default useAuth;
