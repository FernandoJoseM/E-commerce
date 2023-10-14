import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RegisterPage = () => {
  const{registerUser}=useAuth()
  const{handleSubmit,register,reset}=useForm()
  const submit=(data)=>{
    registerUser(data)
    reset({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      phone:''
    })
  }
  return (
    <div className="log">
      <form onSubmit={handleSubmit(submit)}>
        <legend>Welcome! register to continue</legend>
        <div>
        <label htmlFor="firstname">First Name</label>
          <input {...register('firstName')} type="text" />
        </div>
        <div>
        <label htmlFor="lastname">Last Name</label>
          <input {...register('lastName')} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" />
        </div>
        <div>
        <label htmlFor="phone">Phone</label>
          <input {...register('phone')} type="number" />
        </div>
        <button>sign up</button>
      </form>
      <p>you have an account?<Link to='/login'>Go to Login</Link></p>
    </div>
  )
}

export default RegisterPage