import { Button, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { StyledTextField } from "./Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SigninForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const getSequentialStrength = () => {
    let strength = 0;
    
    // Check criteria in sequence
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLowerCase) strength++;
    if (strength >= 1 && hasUpperCase) strength++;
    if (strength >= 2 && hasNumber) strength++;
    if (strength >= 3 && hasSpecialChar) strength++;
    
    return strength;
  };

  const getStrengthColor = (index: number) => {
    const currentStrength = getSequentialStrength();
    
    if (index >= currentStrength) return "bg-gray-200";
    
    // Color based on sequential progress
    switch (currentStrength) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-orange-500";
      case 3:
        return "bg-yellow-500";
      case 4:
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form action="" className="text-left space-y-2">
      <div>
        <label htmlFor="" className="text-xs  w-full text-[#5E7078] ">
          Email <span className="text-red-500">*</span>
        </label>
        <StyledTextField
          type="email"
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        <label htmlFor="" className="text-xs  w-full text-[#5E7078] ">
          Password<span className="text-red-500">*</span>
        </label>
        <StyledTextField
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "hide password" : "show password"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="flex gap-2 mt-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`h-1 flex-1 max-w-[65px] rounded-full transition-colors duration-200 ${getStrengthColor(
                index
              )}`}
            />
          ))}
        </div>
        <div className="text-xs font-normal mt-3 text-[#5E7078]">
          Make your password strong by combining letters, numbers, and symbols.
        </div>
      </div>
      <div className="">
        <label htmlFor="" className="text-xs  w-full  text-[#5E7078]">
          Birthday<span className="text-red-500">*</span>
        </label>
        <StyledTextField
          type="date"
          placeholder="DD/MM/YYYY"
          variant="outlined"
          fullWidth
        />
      </div>

      <div className="flex justify-center pt-2">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007CB5",
            color: "white",
            fontWeight: 600,
            fontSize: "1.125rem",
            fontFamily: "inherit",
            px: "4rem",
            py: "0.5rem",
            borderRadius: "1.5rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#006699",
            },
            boxShadow: "none",
          }}
        >
          Continue
        </Button>
      </div>
      <p className="text-[14px] text-center text-[#5E7078] font-normal ">
        By continuing, you agree to our{" "}
        <a href="" className="no-underline text-[#007CB5]">
          User Agreement
        </a>{" "}
        <br /> and acknowledge our{" "}
        <a href="" className="no-underline text-[#007CB5]">
          Privacy Policy
        </a>{" "}
        .
      </p>
    </form>
  );
};

export default SigninForm;



