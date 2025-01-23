import SigninForm from "../components/SigninForm";
import { LoginButton } from "../components/Button";

const SignUp = () => {
  return (
    <section className="bg-white flex flex-col rounded-[24px] fixed  left-0 xl:left-[30px] 2xl:left-[100px] top-[50px]  xl:top-[80px] p-10 font-semibold gap-2 w-full max-w-[520px] scale-75 xl:scale-90 2xl:scale-100">
      <h1 className="text-3xl xl:text-4xl">
        <span className="bg-gradient-to-br from-[#2C9CE2] to-[#BFADF2] bg-clip-text text-transparent ">
          Get Started
        </span>{" "}
        to unlock your <br /> study potential.
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-sm font-normal text-[#5E7078]">
          Already have an account?{" "}
          <a className="text-[#007CB5]" href="/">
            Sign in
          </a>
        </p>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <LoginButton>
            <img src="./Google.svg" alt="" /> Continue with Google
          </LoginButton>
          <LoginButton>
            <img src="./Apple.svg" alt="" /> Continue with Apple
          </LoginButton>
          <LoginButton>
            <img src="./facebook.svg" alt="" /> Continue with Facebook
          </LoginButton>
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="w-full h-2 border-b "></div>
        <p className="text-xs text-[#5E7078]">OR</p>
        <div className="w-full h-2 border-b"></div>
      </div>
      <SigninForm />
    </section>
  );
};

export default SignUp;
