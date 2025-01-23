
import { LoginButton } from '../components/Button'
import LoginForm from '../components/LoginForm'

const Login = () => {
  
  return (
    <section className="bg-white flex flex-col rounded-[24px] fixed left-[100px] top-[122px] text-[] p-10 font-semibold gap-4 w-full max-w-[500px] scale-90 2xl:scale-100">
      <h1 className="text-4xl">
      Welcome Back!
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-sm font-normal text-[#5E7078]">
        Don’t have an account?{" "}
          <a href='/signup' className="text-[#007CB5]">Sign up</a>
        </p>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <LoginButton >
            <img src="./Google.svg" alt="" /> Continue with Google
          </LoginButton>
          <LoginButton >
            <img src="./Apple.svg" alt="" /> Continue with Apple
          </LoginButton>
          <LoginButton >
            <img src="./facebook.svg" alt="" /> Continue with Facebook
          </LoginButton>
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="w-full h-2 border-b "></div>
        <p className="text-xs text-[#5E7078]">OR</p>
        <div className="w-full h-2 border-b"></div>
      </div>
      <LoginForm />
    </section>
  )
}

export default Login


